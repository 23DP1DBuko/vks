# Vasilyev Karate Club — промо-сайт (SPA)

Одностраничный промо-сайт карате-клуба **Vasilyev Karate Club** (Рига, с 1984 года): 11 секций, тексты на трёх языках (RU/EN/LV), лёгкая 3D-сцена в Hero, скролл-анимации GSAP и встроенная лента Facebook.

## Стек

- **React 19 + Vite 8 + TypeScript**
- **Tailwind CSS v4** (utility-first, тема в `src/index.css`)
- **GSAP + ScrollTrigger** — вход секций, счётчики (уважает `prefers-reduced-motion`)
- **Three.js** — лёгкий фон Hero (динамический импорт, отдельный чанк)
- **lucide-react** — иконки (брендовые Facebook/Instagram — свои SVG в `src/components/icons.tsx`)

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build (прод-сборка в dist/)
npm run preview  # предпросмотр прод-сборки
```

## Структура

```
src/
  content.ts            # ВСЕ тексты и данные сайта (ru/en/lv) — главный файл для правок
  types.ts              # типы данных (программы, залы, тренеры, тарифы...)
  i18n.tsx              # контекст языка + переключатель
  hooks/useReveal.ts    # GSAP-анимации (data-reveal, data-count)
  components/
    Header / Footer
    Hero (+ Hero3D — three.js сцена)
    Advantages, Programs, Halls, Coaches, Achievements
    Reviews (карусель), SocialFeed (лента Facebook), Pricing, Faq, Contacts
    Section (обёртка + заголовки), icons (SVG Facebook/Instagram)
```

## Где менять контент

Всё — в **`src/content.ts`**: каждое текстовое поле имеет вид `{ ru, en, lv }`. Разделы соответствуют ТЗ (`vasilyev-karate-landing.md`).

## Что осталось заполнить (плейсхолдеры)

- **Расписание** тренировок по залам (`content.halls`) — сейчас примерные дни/время.
- **Цены** — сейчас «цена по телефону» (без фиксированных сумм, как просил владелец). Вернуть конкретные € можно в `content.pricing.plans` (`price: number | null`).
- **Email** клуба (`content.contacts.email` = `null`).
- **Достижения** (`content.achievements`) — наполнить из Facebook-ленты клуба.
- **Логотип** — положить файл в `public/logo.png` — автоматически появится в шапке и подвале (пока показывается запасной знак 拳).
- **Фото** тренеров — в карточках пока инициалы (добавить поле `photo`).
- **Форма заявки** — код готов, осталось получить endpoint EmailOctopus и вписать его (пошаговая инструкция ниже в разделе «Форма заявок: EmailOctopus»).
- **Лента Facebook** — Page Plugin с фолбэком на кнопки; при желании заменить на Graph API с кэшем (см. `src/components/SocialFeed.tsx`).

## Форма заявок: EmailOctopus (установка)

Бесплатный план EmailOctopus — **2 500 контактов и 10 000 писем в месяц, без карты, бессрочно** (для клуба лимит с большим запасом). Код формы на сайте уже готов и шлёт заявку на настроенный endpoint.

**Что нужно сделать (1 раз):**

1. Зарегистрироваться: https://emailoctopus.com (Free-план, карта не нужна).
2. В дашборде: **Forms → New form**. Создать форму с полями с такими **именами** (важно для совпадения с сайтом):
   - `name` (Имя)
   - `phone` (Телефон)
   - `audience` (Кто будет заниматься)
   - `comment` (Комментарий)
   - `lang` (язык сайта — можно добавить скрытым полем)
3. Скопировать **endpoint формы** из настроек/embed-кода формы — URL вида `https://emailoctopus.com/api/v2/forms/xxxxxxxx`.
4. Вписать его в `src/content.ts`, в `content.form.endpoint` (сейчас там `null`):
   ```ts
   endpoint: 'https://emailoctopus.com/api/v2/forms/xxxxxxxx',
   ```
5. (Рекомендуется) задать `content.contacts.email` — адрес клуба: появится в секции «Контакты» и будет использоваться как фолбэк отправки.
6. Проверить: `npm run dev`, заполнить форму на сайте и убедиться, что заявка пришла на почту.

**Как это работает в коде** (`src/components/Contacts.tsx`):
- если `endpoint` задан — сайт шлёт `FormData` на него (EmailOctopus пересылает письмом);
- если endpoint пуст, но задан `contacts.email` — фолбэк: открывается почтовый клиент посетителя (mailto);
- если ничего не настроено — форма показывает ошибку с телефоном клуба.

## Примечания

- Шрифты Oswald + Inter подключены через Google Fonts (поддержка кириллицы и латышских диакритик).
- Анимации отключаются при `prefers-reduced-motion: reduce`.
- Трёхмерная сцена ставится на паузу, когда вкладка скрыта.

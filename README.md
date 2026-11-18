# Vasilyev Karate Club

Промо-сайт Vasilyev Karate Club в Риге. Клуб работает с 1984 года, принимает детей с 4 лет, подростков и взрослых. Занятия проходят в двух залах в Кенгарагсе.

Сайт:

- три языка: русский, английский и латышский;
- адаптивная одностраничная структура;
- бесплатная первая тренировка;
- группы для детей 4-6 и 7-12 лет, подростков, взрослых и участников соревнований;
- расписание и адреса двух залов;
- профили тренеров, достижения и отзывы;
- новости клуба из Facebook;
- FAQ, SEO-текст и форма заявки;
- телефон, WhatsApp, Facebook, Instagram и TikTok.

## Стек

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- GSAP и ScrollTrigger
- Three.js
- lucide-react

## Запуск

```bash
npm install
npm run dev
```

Локальный сайт: `http://localhost:5173`

```bash
npm run build
npm run preview
```

`npm run build` выполняет проверку TypeScript и production-сборку в `dist/`.

## Структура

```text
src/
  App.tsx                  # порядок секций страницы
  content.ts               # тексты и данные RU/EN/LV
  types.ts                 # типы контента
  i18n.tsx                 # текущий язык и переключатель
  index.css                # Tailwind-тема и глобальные стили
  components/
    Header.tsx
    Hero.tsx
    Advantages.tsx
    Programs.tsx
    Halls.tsx
    Coaches.tsx
    Achievements.tsx
    Reviews.tsx
    ClubLife.tsx
    Pricing.tsx
    Faq.tsx
    SeoBlock.tsx
    Contacts.tsx
    Footer.tsx
  data/facebookPosts.ts    # посты после синхронизации Facebook
  hooks/useReveal.ts       # GSAP-анимации секций
  lib/utm.ts               # UTM/gclid/fbclid для заявок
  lib/whatsapp.ts          # ссылки WhatsApp
```

Порядок секций страницы:

1. Первый экран
2. Преимущества
3. Программы
4. Залы и расписание
5. Тренеры
6. Достижения
7. Отзывы
8. Жизнь клуба
9. Группы и запись
10. FAQ
11. SEO-текст
12. Контакты

## Контент

Основные тексты и данные находятся в [`src/content.ts`](./src/content.ts). Локализованные значения имеют форму `{ ru, en, lv }`.

Там находятся:

- название, метаданные и слоган клуба;
- тексты первого экрана и преимущества;
- программы и возрастные группы;
- адреса и расписание залов;
- тренеры и их специализации;
- достижения, отзывы и FAQ;
- группы, условия оплаты и текст о бесплатной первой тренировке;
- телефоны, WhatsApp и социальные сети;
- SEO-блок и поля формы.

## Контакты на сайте

- `+371 29 172 572`
- `+371 29 757 753`
- WhatsApp: `+371 29 172 572`
- Ikšķiles iela 6, Rīgas 72. vidusskola, малый спортзал, 3-й этаж
- Latgales iela 322, Rīga

Стоимость групп на сайте не фиксирована: посетителю показывается «Цена по телефону». Первая тренировка бесплатна. Точные условия и расписание уточняются при обращении.

## Форма заявки

Форма поддерживает Web3Forms. Укажите ключ в `content.form.accessKey` в [`src/content.ts`](./src/content.ts):

```ts
accessKey: 'ваш-access-key',
```

Если ключ не задан, форма использует настроенный email как `mailto`-фолбэк. Если email тоже не задан, посетителю показываются телефоны клуба.

Форма передаёт имя, телефон, возраст, комментарий, язык страницы и сохранённые рекламные метки. Скрытое поле honeypot отсекает ботов.

## Новости из Facebook

Секция «Жизнь клуба» включена. Новости берутся из [`src/data/facebookPosts.ts`](./src/data/facebookPosts.ts), а при отсутствии синхронизированных постов используются демо-карточки.

Для синхронизации создайте `.env.local` в корне проекта:

```env
FB_PAGE_ID=...
FB_PAGE_TOKEN=...
```

Затем выполните:

```bash
npm run sync:fb
npm run build
```

Скрипт получает последние посты Facebook Graph API, скачивает изображения в `public/images/posts/` и обновляет `src/data/facebookPosts.ts`. `.env.local` не добавляется в репозиторий.

## Изображения

| Назначение | Путь |
| --- | --- |
| Первый экран | `public/hero.jpg` |
| Логотип | `public/logo.png` |
| Тренеры | `public/leonid.jpg`, `public/zanna.jpg`, `public/diana.jpg`, `public/olga.jpg` |
| Зал на Ikšķiles iela | `public/images/halls/ikskiles.jpg` |
| Зал на Latgales iela | `public/images/halls/latgales.jpg` |
| Посты Facebook | `public/images/posts/*.jpg` |

При отсутствии изображения сайт показывает fallback, поэтому битые ссылки не ломают страницу.

## SEO и реклама

SEO настроено в `index.html`, `public/robots.txt` и `public/sitemap.xml`:

- title и description на русском по умолчанию;
- Open Graph и Twitter Card;
- canonical для `https://vasilyev-karate.lv/`;
- JSON-LD `SportsClub` и `WebSite`;
- языковой переключатель обновляет метаданные страницы;
- поддерживаются якоря `#hero`, `#kids`, `#programs`, `#halls` и `#contacts`.

UTM-метки, `gclid` и `fbclid` сохраняются в `sessionStorage` и передаются вместе с заявкой. Meta Pixel и GA4 не подключены.

## Дополнительно

- Анимации учитывают `prefers-reduced-motion`.
- Three.js загружается динамически и ставится на паузу при скрытой вкладке.
- Шрифты Oswald и Inter подключаются через Google Fonts.
- Канонический домен и ссылки на соцсети находятся в `index.html` и [`src/content.ts`](./src/content.ts).

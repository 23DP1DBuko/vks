# Vasilyev Karate Club — одностраничный промо-сайт (SPA)

> Документ для разработчика: цель, структура секций, тексты на трёх языках (RU/EN/LV), структура React-компонентов, рекомендации по анимации, JSON-структуры данных.
> **v1.1** — добавлена лента соцсетей, тренер Diana Tokare (2 дан), второй телефон и данные с флаера клуба.
> Плейсхолдеры помечены `[уточнить]` — заменить реальными данными.

---

## 0. Источники и факты о клубе

**Сайты конкурентов (для структуры и контента):**
- **rskarate.lv** — приём «с 4 лет», «бесплатная тренировка» как главный CTA, список локаций (Centrs, Mežciems, Jugla), сертификаты тренеров («Sertifikāta Nr.»).
- **lv.tan.lv** — блок «Kāpēc tieši mēs?» (квалификация, опыт, тщательность, любовь к делу), команда с данами и номерами сертификатов, тренировочные места, реквизиты/лицензия.
- **ippon.lv** — цифры-факты (15+ лет, 300+ спортсменов, 6 тренеров, 4 филиала), «от новичка до мастера», тренеры с данами, контакты по каждому залу, партнёры, соцсети.

**Факты о клубе Vasilyev Karate Club:**
- Название: Vasilyev Karate Club / Vasiljevu karatē skola (Vasiljev's Karate School).
- Основан: **1984** (более 40 лет; 2024 — юбилей 40 лет).
- Тренеры: **Leonīds Vasiļjevs — 8 дан** (основатель), **Žanna Vasiļjeva — 5 дан** (сертификат ЛФК, категория C, № 2622, действовал до 11.11.2025 — проверить актуальность), **Diana Tokare — 2 дан**.
- Залы: **Зал 1 — Ikšķiles iela 6** (Rīgas 72. vidusskola, малый спортивный зал, 3-й этаж); **Зал 2 — Latgales iela 322**. Оба — Rīga, LV-1057.
- Телефоны (с флаера): **29 172 572** и **29 757 753**.
- Соцсети: Facebook — facebook.com/eurokaratedo (и «Vasilyevs Karate School»), Instagram — instagram.com/vasilyev_karate.
- Слоган с флаера: **«Nāc un pievienojies komandai!»** («Приходи и присоединяйся к команде!»).
- 4 ценности с флаера: **Veselība** (здоровье) · **Disciplīna** (дисциплина) · **Pašaizsardzība** (самооборона) · **Sacensības** (соревнования) — использовать в Hero/преимуществах.
- Достижения и анонсы клуб регулярно публикует **на Facebook** — секция «Достижения» наполняется из ленты соцсетей (см. п. 3.8 и 6).

---

## 1. Цель сайта

Цель — превратить родителей детей 4–16 лет и взрослых жителей Риги в записавшихся на **бесплатное пробное занятие** (главный CTA сайта, дублируется в Hero, конце каждой секции, шапке и контактах). Сайт должен закрыть главные страхи и вопросы: безопасность тренировок, квалификация тренеров (8 дан и 5 дан), подойдёт ли карате застенчивому или неспортивному ребёнку, сколько это стоит и где удобно заниматься (два зала в Кенгарагсе). Вторичная задача — транслировать солидность и историю клуба (с 1984 года, 40+ лет опыта), чтобы выбор «своего» клуба был очевиден без долгих сравнений. Тексты на трёх языках (RU/EN/LV) с переключателем в шапке — чтобы охватить и русско-, и латышско-, и англоговорящую аудиторию Риги.

---

## 2. Структура секций

**1) Hero / Обложка**
- Цель: за 5 секунд ответить «кто вы, для кого, что делать». Захватить внимание и дать единственный CTA.
- Элементы: заголовок, подзаголовок, 1 абзац, кнопка «Записаться на бесплатную первую тренировку» + вторичная «Смотреть расписание»; лёгкий 3D-фон; строка фактов (1984 / 8 дан / 2 зала / с 4 лет); строка ценностей (здоровье · дисциплина · самооборона · соревнования).
- UX: числа-факты с анимированным счётчиком при скролле; кнопка CTA закреплена в шапке на мобильных.

**2) «Почему именно наш клуб»**
- Цель: снять основные сомнения и выделиться среди rskarate.lv, tan.lv, ippon.lv.
- Элементы: 6 карточек-преимуществ (иконка + заголовок + 1 предложение); подпись-доверие «сертифицированные тренеры Латвийской федерации карате».
- UX: сетка карточек с каскадным появлением (stagger) при скролле; в карточке тренера-основателя — бейдж «8 дан».

**3) «Программы и возрастные группы»**
- Цель: помочь родителю быстро найти «свою» группу по возрасту.
- Элементы: 5 карточек программ (возраст, цель, частота тренировок, длительность); CTA на каждой.
- UX: табы-фильтры «4–6 / 7–12 / 13–16 / Взрослые / Соревновательная» — переключение без перезагрузки.

**4) «Залы и расписание»**
- Цель: показать, что заниматься удобно и близко.
- Элементы: карточки залов с адресом, описанием и расписанием по дням/времени; кнопка «Построить маршрут» (Google Maps).
- UX: расписание внутри карточки — аккордеон по дням недели; ссылка на карту на каждый зал.

**5) «Тренеры»**
- Цель: доверие через личности и звания.
- Элементы: карточки тренеров (фото, имя, дан, специализация, опыт); акцент на 8 дан основателя.
- UX: hover-эффект «приподнимание» карточки + раскрытие деталей; бейдж с даном.

**6) «Достижения и мероприятия»**
- Цель: доказать результат («у нас дети реально выступают и выигрывают»).
- Элементы: горизонтальный таймлайн «год + название + результат/формат» (турниры, лагеря, сборы, юбилей 40 лет). Данные берутся из ленты Facebook клуба.
- UX: таймлайн со скролл-анимацией; точки-маркеры лет.

**7) «Отзывы»**
- Цель: социальное доказательство от родителей и взрослых учеников.
- Элементы: 5 отзывов (имя, роль: «мама Саши, 7 лет» / «взрослый ученик»), звёзды, фото/аватар.
- UX: карусель (авто-листание + ручное), на мобильных — свайп; под отзывами — CTA «Хотите так же?».

**8) «Жизнь клуба» — лента соцсетей (опционально, добавлено по желанию владельца)**
- Цель: показывать живую жизнь клуба (тренировки, турниры, анонсы) без необходимости обновлять сайт — клуб регулярно постит на Facebook/Instagram.
- Элементы: встроенная лента Facebook (Page Plugin) или Instagram; кнопки «Подписаться в Facebook / Instagram»; фолбэк-ссылки на соцсети.
- UX: ленивая загрузка iframe (lazy load) + кнопка «Загрузить ещё»; если соцсеть недоступна/медленная — показываем только кнопки-ссылки.
- Технические варианты: (а) Facebook Page Plugin — проще всего, без токенов, но тяжёлый и со своим стилем; (б) отдельные посты Instagram через embed; (в) Graph API с кэшем на бэкенде — единый стиль, но нужен токен и обработка; (г) сервис-агрегатор соцсетей. Рекомендация: начать с (а) + фолбэк, позже перейти на (в). Учесть GDPR/cookie-баннер (трекинг Facebook) и вес страницы.

**9) «Стоимость и условия»**
- Цель: прозрачно ответить «сколько стоит» и снять барьер пробным занятием.
- Элементы: 3 карточки абонементов (средний — выделен «Популярный»), блок условий пробного занятия, скидки.
- UX: без лишней анимации, только лёгкий hover; кнопка «Записаться» на каждой карточке.

**10) «FAQ»**
- Цель: закрыть остаточные возражения (безопасность, экипировка, пропуски, возраст).
- Элементы: 9 вопросов-ответов в аккордеоне, открыт один пункт.
- UX: аккордеон; вопросы сгруппированы по темам (безопасность / экипировка / оплата).

**11) «Контакты и соцсети»**
- Цель: последний шаг — оставить заявку.
- Элементы: форма (имя, телефон, возраст ребёнка / «взрослый», зал, комментарий), телефоны, email, адреса залов, ссылки на Facebook/Instagram, обещание «ответим в течение дня».
- UX: форма + контакты в одной секции; кнопки соцсетей; мини-карта.

---

## 3. Тексты (RU / EN / LV)

Все тексты — в формате `{ru, en, lv}`. Помеченные `[уточнить]` — плейсхолдеры.

### 3.1 Hero

**Заголовок (H1)**
- RU: Карате в Риге для детей и взрослых — с 1984 года
- EN: Karate in Riga for kids and adults — since 1984
- LV: Karatē Rīgā bērniem un pieaugušajiem — kopš 1984. gada

**Вторичный слоган (с флаера)**
- RU: Приходи и присоединяйся к команде!
- EN: Come and join the team!
- LV: Nāc un pievienojies komandai!

**Подзаголовок**
- RU: Мастера клуба: Леонид Васильев — 8 дан, Жанна Васильева — 5 дан. Группы с 4 лет, два зала в Риге, бесплатное пробное занятие.
- EN: Club masters: Leonid Vasilyev — 8th dan, Zhanna Vasilyeva — 5th dan. Groups from age 4, two halls in Riga, free trial class.
- LV: Kluba meistari: Leonīds Vasiļjevs — 8. dans, Žanna Vasiļjeva — 5. dans. Grupas no 4 gadu vecuma, divas zāles Rīgā, bezmaksas izmēģinājuma nodarbība.

**Абзац**
- RU: Помогаем детям расти сильными и уверенными, а взрослым — найти форму и дисциплину. Приходите на пробную тренировку и убедитесь сами.
- EN: We help children grow strong and confident, and adults find fitness and discipline. Come to a trial class and see for yourself.
- LV: Palīdzam bērniem augt stipriem un pārliecinātiem, bet pieaugušajiem — iegūt formu un disciplīnu. Nāciet uz izmēģinājuma nodarbību un pārliecinieties paši.

**Кнопки**
- CTA1 RU: Записаться на бесплатную первую тренировку / EN: Book a free first class / LV: Pieteikties bezmaksas pirmajai nodarbībai
- CTA2 RU: Смотреть расписание / EN: See the schedule / LV: Skatīt nodarbību grafiku

**Факты-цифры:** 1984 — год основания (RU: с 1984 года / EN: since 1984 / LV: kopš 1984. gada); 8 дан — высшая степень тренера; 2 — зала в Риге; 4+ — возраст, с которого принимаем.

**Строка ценностей (с флаера):** здоровье / дисциплина / самооборона / соревнования — RU: Здоровье · Дисциплина · Самооборона · Соревнования; EN: Health · Discipline · Self-defence · Competitions; LV: Veselība · Disciplīna · Pašaizsardzība · Sacensības.

### 3.2 «Почему именно наш клуб»

Заголовок: RU: Почему именно наш клуб / EN: Why choose our club / LV: Kāpēc izvēlēties mūsu klubu

1. **Мастера высшей категории** / Masters of the highest rank / Augstākās kategorijas meistari
   - RU: Клуб основал Леонид Васильев — 8 дан, обладатель одной из высших степеней в Латвии; занятия ведут сертифицированные тренеры.
   - EN: The club was founded by Leonid Vasilyev — 8th dan, one of the highest ranks in Latvia; classes are led by certified coaches.
   - LV: Klubu dibināja Leonīds Vasiļjevs — 8. dans, viena no augstākajām pakāpēm Latvijā; nodarbības vada sertificēti treneri.
2. **Опыт с 1984 года** / Since 1984 / Kopš 1984. gada
   - RU: Более 40 лет учим карате детей и взрослых в Риге — школа с историей и традициями.
   - EN: Over 40 years of teaching karate to kids and adults in Riga — a school with history and tradition.
   - LV: Vairāk nekā 40 gadus mācām karatē bērniem un pieaugušajiem Rīgā — skola ar vēsturi un tradīcijām.
3. **Приём с 4 лет** / From age 4 / No 4 gadu vecuma
   - RU: Игровая методика для самых маленьких и спокойный старт без стресса для ребёнка.
   - EN: A play-based method for the youngest and a stress-free start for your child.
   - LV: Rotaļu metode mazākajiem un mierīgs starts bez stresa bērnam.
4. **Два зала в Риге** / Two halls in Riga / Divas zāles Rīgā
   - RU: Удобное расположение в Кенгарагсе: Ikšķiles iela 6 и Latgales iela 322.
   - EN: Convenient locations in Ķengarags: Ikšķiles iela 6 and Latgales iela 322.
   - LV: Ērtas atrašanās vietas Ķengaragā: Ikšķiles iela 6 un Latgales iela 322.
5. **Соревновательная практика** / Competition practice / Sacensību prakse
   - RU: Регулярно выступаем на турнирах Латвии и международных соревнованиях — участие по желанию.
   - EN: Regular participation in Latvian and international tournaments — participation is optional.
   - LV: Regulāri piedalāmies Latvijas un starptautiskos turnīros — dalība pēc vēlēšanās.
6. **Дисциплина и характер** / Discipline and character / Disciplīna un raksturs
   - RU: Карате — это не только спорт: воспитываем уважение, собранность и уверенность в себе.
   - EN: Karate is more than sport: we build respect, focus and self-confidence.
   - LV: Karatē ir vairāk nekā sports: audzinām cieņu, savaldību un pašapziņu.

### 3.3 «Программы и возрастные группы»

Заголовок: RU: Программы и возрастные группы / EN: Programs & age groups / LV: Programmas un vecuma grupas

1. **Малыши 4–6 лет** / Little ones 4–6 / Mazākie 4–6 gadi
   - RU: Карате и общая физическая подготовка в игровой форме: координация, гибкость, привычка к дисциплине. 2 раза в неделю, 45 мин.
   - EN: Karate and general fitness through play: coordination, flexibility and good habits. 2× per week, 45 min.
   - LV: Karatē un vispārējā fiziskā sagatavotība rotaļu veidā: koordinācija, lokanība, disciplīnas ieradumi. 2× nedēļā, 45 min.
2. **Дети 7–12 лет** / Kids 7–12 / Bērni 7–12 gadi
   - RU: Базовая техника, ката и лёгкое кумите, подготовка к поясам и первым турнирам. 2–3 раза в неделю.
   - EN: Basic technique, kata and light kumite, preparation for belts and first tournaments. 2–3× per week.
   - LV: Pamattehnika, kata un viegls kumite, sagatavošanās jostām un pirmajiem turnīriem. 2–3× nedēļā.
3. **Подростки 13–16 лет** / Teens 13–16 / Pusaudži 13–16 gadi
   - RU: Углублённая техника, физическая подготовка, соревновательный режим по желанию. 3 раза в неделю.
   - EN: Advanced technique, physical conditioning, optional competitive track. 3× per week.
   - LV: Padziļināta tehnika, fiziskā sagatavotība, sacensību režīms pēc vēlēšanās. 3× nedēļā.
4. **Взрослые, с нуля** / Adults, from zero / Pieaugušie, no nulles
   - RU: Начните в любом возрасте: техника, ОФП, самооборона, снятие стресса. 2 раза в неделю.
   - EN: Start at any age: technique, fitness, self-defence, stress relief. 2× per week.
   - LV: Sāciet jebkurā vecumā: tehnika, fiziskā forma, pašaizsardzība, stresa mazināšana. 2× nedēļā.
5. **Соревновательная группа** / Competition group / Sacensību grupa
   - RU: Для тех, кто хочет выступать: интенсивные тренировки, сборы и лагеря. 3–5 раз в неделю + сборы.
   - EN: For those who want to compete: intensive training, camps and training sessions. 3–5× per week + camps.
   - LV: Tiem, kas vēlas startēt: intensīvi treniņi, nometnes un treniņsalidojumi. 3–5× nedēļā + nometnes.

### 3.4 «Залы и расписание»

Заголовок: RU: Залы и расписание / EN: Halls & schedule / LV: Treniņu zāles un nodarbību grafiks

1. **Зал 1 — Ikšķiles iela 6** (Rīgas 72. vidusskola, малый спортивный зал, 3-й этаж) / Hall 1 — Ikšķiles iela 6 (Riga 72nd Secondary School, small gym, 3rd floor) / 1. zāle — Ikšķiles iela 6 (Rīgas 72. vidusskola, mazā sporta zāle, 3. stāvs)
   - RU: Основной зал клуба в спортивном зале школы. Рядом остановки общественного транспорта и парковка.
   - EN: The club's main hall in the school gym. Public transport stops and parking nearby.
   - LV: Kluba galvenā zāle skolas sporta zālē. Blakus sabiedriskā transporta pieturas un autostāvvieta.
   - Расписание `[уточнить]`: Пн/Ср/Пт 17:00–20:00, Сб 10:00–13:00.
2. **Зал 2 — Latgales iela 322** / Hall 2 — Latgales iela 322 / 2. zāle — Latgales iela 322
   - RU: Второй зал клуба, группы детей и взрослых. Удобно добираться из центра и Кенгарагса.
   - EN: The club's second hall for kids and adults. Easy access from the city centre and Ķengarags.
   - LV: Kluba otrā zāle bērnu un pieaugušo grupām. Ērta piekļuve no centra un Ķengaraga.
   - Расписание `[уточнить]`: Вт/Чт 17:00–20:00, Сб 13:00–16:00.
3. **Новая группа `[уточнить]`** — адрес и расписание уточняются (карточка-заглушка, можно скрыть).

На каждой карточке — кнопка «Построить маршрут» (ссылка Google Maps на адрес).

### 3.5 «Тренеры»

Заголовок: RU: Тренеры / EN: Coaches / LV: Treneri

1. **Леонид Васильев** / Leonids Vasiļjevs — **8 дан**
   - RU: Основатель клуба, в карате более 40 лет. Ведёт соревновательную группу, готовит спортсменов к турнирам Латвии и международным стартам. Специализация: ката, кумите, подготовка спортсменов высокого уровня.
   - EN: Founder of the club, over 40 years in karate. Leads the competition group, prepares athletes for Latvian and international tournaments. Specialisation: kata, kumite, high-level athlete development.
   - LV: Kluba dibinātājs, karatē vairāk nekā 40 gadus. Vada sacensību grupu, gatavo sportistus Latvijas un starptautiskiem turnīriem. Specializācija: kata, kumite, augsta līmeņa sportistu sagatavošana.
2. **Жанна Васильева** / Žanna Vasiļjeva — **5 дан**, сертифицированный тренер (категория C, сертификат № 2622)
   - RU: Сертифицированный тренер Латвийской федерации карате. Специализация: детские группы с 4 лет, начальная подготовка, работа с новичками.
   - EN: Certified coach of the Latvian Karate Federation. Specialisation: kids' groups from age 4, beginner training.
   - LV: Sertificēta Latvijas Karatē federācijas trenere. Specializācija: bērnu grupas no 4 gadu vecuma, iesācēju sagatavošana.
   - ⚠️ Сертификат указан действительным до 11.11.2025 — проверить актуальность перед публикацией на сайте.
3. **Диана Токаре** / Diana Tokare / Diāna Tokare — **2 дан**
   - RU: Тренер клуба, 2 дан. Специализация: детские группы, общая физическая подготовка, подготовка к экзаменам на пояса. `[описание уточнить]`
   - EN: Club coach, 2nd dan. Specialisation: kids' groups, general fitness, belt exam preparation. `[description to confirm]`
   - LV: Kluba trenere, 2. dans. Specializācija: bērnu grupas, vispārējā fiziskā sagatavotība, sagatavošanās jostu eksāmeniem. `[apraksts jāprecizē]`

### 3.6 «Достижения и мероприятия»

Заголовок: RU: Достижения и мероприятия / EN: Achievements & events / LV: Sasniegumi un pasākumi

> Данные наполняются из ленты Facebook клуба (там публикуются турниры, фото и результаты). Ниже — формат и плейсхолдеры `[уточнить]`.

1. 2024 — **40 лет клубу** — юбилейный год: праздничный турнир и показательные выступления учеников. `[уточнить]`
2. 2024 — **Чемпионат Латвии по карате** — призовые места в личных и командных категориях. `[уточнить]`
3. 2023 — **Международный турнир в Риге** — участие и призовые места, обмен опытом с зарубежными клубами. `[уточнить]`
4. Ежегодно — **Летний тренировочный лагерь** — неделя интенсивных тренировок, ката и отдыха. `[уточнить]`
5. Ежегодно — **Экзамены на пояса (кю)** — дважды в год, официальная аттестация учеников. `[уточнить]`

### 3.7 «Отзывы»

Заголовок: RU: Отзывы / EN: Reviews / LV: Atsauksmes

1. **Анна, мама Саши (7 лет)** / Anna, Sasha's mum (age 7) / Anna, Sašas mamma (7 gadi)
   - RU: Сын занимается уже два года — стал собраннее, увереннее, и это его любимое занятие недели. Тренеры внимательные, всегда на связи.
   - EN: My son has trained for two years — he's become more focused and confident, and it's the highlight of his week. Coaches are attentive and always in touch.
   - LV: Dēls trenējas jau divus gadus — kļuvis savāktāks un pārliecinātāks, un tā ir viņa mīļākā nedēļas nodarbība. Treneri ir uzmanīgi un vienmēr sazinās.
2. **Игорь, 34 года** / Igor, 34 / Igors, 34 gadi
   - RU: Начал с нуля в 33 — никогда не поздно. Отличная атмосфера, грамотная техника, за полгода заметно подтянулся и физически, и морально.
   - EN: Started from zero at 33 — it's never too late. Great atmosphere, solid technique; in six months I've noticeably improved physically and mentally.
   - LV: Sāku no nulles 33 gadu vecumā — nekad nav par vēlu. Lieliska atmosfēra, pamatīga tehnika; pusgada laikā manāmi uzlabojusies gan fiziskā, gan garīgā forma.
3. **Марина, мама Лизы (5 лет)** / Marina, Lisa's mum (age 5) / Marina, Lizas mamma (5 gadi)
   - RU: Дочка ходит с четырёх лет. Занятия в игровой форме, ребёнок бежит на тренировку с радостью. Очень благодарны за терпение к малышам.
   - EN: My daughter has attended since she was four. Classes are play-based and she runs to training happily. We are grateful for the patience with the little ones.
   - LV: Meita trenējas kopš četru gadu vecuma. Nodarbības ir rotaļu formā, un bērns uz treniņu skrien ar prieku. Ļoti pateicīgi par pacietību pret mazākajiem.
4. **Дмитрий, папа Марка (10 лет)** / Dmitry, Mark's dad (age 10) / Dmitrijs, Marka tētis (10 gadi)
   - RU: Марк начал выступать на турнирах — у клуба серьёзная соревновательная подготовка. Расписание удобное, два зала рядом с домом.
   - EN: Mark has started competing — the club has serious competitive training. The schedule is convenient and the two halls are close to home.
   - LV: Marks sācis startēt turnīros — klubam ir nopietna sacensību sagatavošana. Ērts grafiks, abas zāles netālu no mājām.
5. **Елена, 28 лет** / Elena, 28 / Jeļena, 28 gadi
   - RU: Искала спорт без скучных тренажёров — карате дало и нагрузку, и технику самообороны, и интерес. Новичкам здесь рады.
   - EN: I wanted sport without boring gym machines — karate gives me a workout, self-defence skills and real interest. Beginners are welcome here.
   - LV: Meklēju sportu bez garlaicīgiem trenažieriem — karatē dod gan slodzi, gan pašaizsardzības tehniku, gan interesi. Iesācējiem šeit priecājas.

### 3.8 «Жизнь клуба» — лента соцсетей

Заголовок: RU: Жизнь клуба / EN: Club life / LV: Kluba dzīve

**Подзаголовок**
- RU: Свежие новости, фото и видео — прямо из наших соцсетей.
- EN: Latest news, photos and videos — straight from our social media.
- LV: Jaunākās ziņas, fotogrāfijas un video — tieši no mūsu sociālajiem tīkliem.

**Текст**
- RU: Мы регулярно публикуем фото и видео тренировок, турниров и мероприятий. Листайте ленту или подписывайтесь — будьте в курсе жизни клуба.
- EN: We regularly share photos and videos of training, tournaments and events. Scroll the feed or follow us to keep up with club life.
- LV: Regulāri publicējam treniņu, turnīru un pasākumu fotogrāfijas un video. Šķirstiet lenti vai sekojiet mums, lai būtu lietas kursā.

**Кнопки**
- RU: Подписаться в Facebook · Подписаться в Instagram
- EN: Follow on Facebook · Follow on Instagram
- LV: Sekot Facebook · Sekot Instagram

**UX/технические рекомендации:** Facebook Page Plugin (iframe) с `loading="lazy"`; кнопка «Загрузить ещё» для подгрузки; фолбэк — если плагин не загрузился (блокировщики, медленный интернет), показываем только кнопки-ссылки на соцсети. Если хочется единого стиля — позже перейти на Graph API с кэшем. Учесть cookie-баннер (трекинг Facebook) и вес страницы.

### 3.9 «Стоимость и условия»

Заголовок: RU: Стоимость и условия / EN: Pricing & terms / LV: Cenas un nosacījumi

- **Первая тренировка — бесплатно** / First class — free / Pirmā nodarbība — bez maksas
  - RU: Запишитесь и попробуйте без обязательств — решение остаётся за вами.
  - EN: Book and try it with no commitment — the decision is yours.
  - LV: Pieteicieties un izmēģiniet bez saistībām — lēmums paliek jūsu ziņā.
- **Абонемент «Старт»** — 2 раза в неделю — **по телефону** `[уточнить]` / Start — 2× per week / «Starta» abonements — 2× nedēļā
  - RU: Для новичков и детей: 8 тренировок в месяц, удобно для знакомства с карате.
- **Абонемент «Стандарт»** — 3 раза в неделю — **по телефону** `[уточнить]` — помечен «Популярный» / Standard — 3× per week / «Standarta» abonements — 3× nedēļā
  - RU: Основной формат: 12 тренировок в месяц, стабильный прогресс.
- **Соревновательная группа** — 3–5 раз в неделю + сборы — **по телефону** `[уточнить]` / Competition group / Sacensību grupa
  - RU: Для тех, кто выступает на турнирах: интенсивные тренировки, сборы и лагеря.
- Условия `[уточнить]`: оплата помесячно; скидка 10% на второго ребёнка из семьи; заморозка абонемента на время болезни или отпуска; разовое занятие — уточнять по телефону.

### 3.10 «FAQ»

Заголовок: RU: Вопросы и ответы / EN: FAQ / LV: Biežāk uzdotie jautājumi

1. **С какого возраста можно начинать?** / What is the minimum age? / No kāda vecuma var sākt?
   - С 4 лет. Для самых маленьких — игровая программа с ОФП. / From age 4. For the youngest there is a play-based program with general fitness. / No 4 gadu vecuma. Mazākajiem — rotaļu programma ar vispārējo fizisko sagatavotību.
2. **Нужна ли специальная экипировка?** / Do I need special equipment? / Vai ir nepieciešams īpašs ekipējums?
   - На первых занятиях — удобная спортивная форма. Кимоно понадобится позже, подскажем, где купить. / Comfortable sportswear for the first classes. A gi will be needed later — we'll advise where to get one. / Pirmajās nodarbībās — ērts sporta apģērbs. Kimono būs vajadzīgs vēlāk — ieteiksim, kur iegādāties.
3. **Что делать, если ребёнок пропустил тренировку?** / What if a class is missed? / Ko darīt, ja nodarbība tiek izlaista?
   - Предупредите тренера заранее — пропуск можно отработать в другой группе `[уточнить]`. / Let the coach know in advance — missed classes can be made up in another group `[to confirm]`. / Iepriekš informējiet treneri — izlaisto nodarbību var atstrādāt citā grupā `[jāprecizē]`.
4. **Безопасно ли карате для детей?** / Is karate safe for kids? / Vai karatē ir droši bērniem?
   - Да: контролируемые спарринги, защитная экипировка, страховка учеников, тренеры сертифицированы. / Yes: controlled sparring, protective gear, athlete insurance, certified coaches. / Jā: kontrolēti sparingi, aizsargekipējums, audzēkņu apdrošināšana, sertificēti treneri.
5. **Обязательно ли участвовать в соревнованиях?** / Are competitions mandatory? / Vai dalība sacensībās ir obligāta?
   - Нет. Соревнования — по желанию, есть отдельная соревновательная группа. / No. Competitions are optional; there is a separate competition group. / Nē. Sacensības pēc vēlēšanās; ir atsevišķa sacensību grupa.
6. **Подойдёт ли карате застенчивому или неспортивному ребёнку?** / Will karate suit a shy or non-athletic child? / Vai karatē piemērota kautrīgam vai nesportiskam bērnam?
   - Да: индивидуальный темп, поддержка тренера, постепенное включение в группу. / Yes: individual pace, coach support, gradual integration into the group. / Jā: individuāls temps, trenera atbalsts, pakāpeniska iekļaušanās grupā.
7. **Можно ли взрослому начать с нуля?** / Can an adult start from zero? / Vai pieaugušais var sākt no nulles?
   - Да, в любом возрасте. Есть отдельные группы для взрослых. / Yes, at any age. There are separate adult groups. / Jā, jebkurā vecumā. Ir atsevišķas grupas pieaugušajiem.
8. **Как проходит оплата?** / How does payment work? / Kā notiek apmaksa?
   - Помесячно, наличными или банковским переводом `[уточнить]`; есть заморозка на время болезни или отпуска. / Monthly, by cash or bank transfer `[to confirm]`; freezing is available for illness or holidays. / Katru mēnesi, skaidrā naudā vai bankas pārskaitījumā `[jāprecizē]`; iespējama abonementa apturēšana slimības vai atvaļinājuma laikā.
9. **Как записаться на пробное занятие?** / How to book a trial class? / Kā pieteikties izmēģinājuma nodarbībai?
   - Оставьте заявку в форме на сайте или позвоните — подберём удобный зал и время. / Leave a request in the form or call us — we'll find a convenient hall and time. / Atstājiet pieprasījumu formā vai zvaniet — piemeklēsim ērtu zāli un laiku.

### 3.11 «Контакты и соцсети»

Заголовок: RU: Контакты / EN: Contacts / LV: Kontakti

- **Телефоны:** +371 29 172 572 · +371 29 757 753 `[уточнить, чей какой]`
- **Email:** `[адрес клуба — уточнить]`
- **Facebook:** https://www.facebook.com/eurokaratedo
- **Instagram:** https://www.instagram.com/vasilyev_karate
- **TikTok:** https://www.tiktok.com/@eurokarate
- **Адреса залов:** Ikšķiles iela 6 (Rīgas 72. vidusskola, малый спортзал, 3-й этаж) и Latgales iela 322, Rīga, LV-1057
- **CTA:** Напишите нам или оставьте заявку — мы ответим в течение дня. / Write to us or leave a request — we will reply within a day. / Rakstiet mums vai atstājiet pieprasījumu — atbildēsim dienas laikā.
- **Форма:** Имя · Телефон · Возраст ребёнка или «взрослый» · Комментарий (все поля необязательные, кроме телефона).

---

## 4. Структура React-компонентов (без кода)

```
App (роутер SPA с якорями + LanguageProvider + контент {ru,en,lv})
├─ Header          — навигация по якорям, LanguageSwitcher, кнопка «Пробное занятие»
├─ HeroSection     — 3D-фон (canvas), заголовок, CTA, строка ценностей
├─ AdvantagesSection
├─ ProgramsSection
├─ HallsSection
├─ CoachesSection
├─ AchievementsSection
├─ ReviewsSection
├─ SocialFeedSection  — лента Facebook/Instagram (опционально)
├─ PricingSection
├─ FaqSection
├─ ContactsSection
└─ Footer          — дублирование контактов, соцсети, копирайт
```

**Пропсы и данные компонентов:**

| Компонент | Пропсы / данные |
|---|---|
| `HeroSection` | `hero: { title, slogan, subtitle, paragraph, cta1, cta2 }` (объекты `{ru,en,lv}`), `stats: number[]`, `values: string[]` |
| `AdvantagesSection` | `advantages: Advantage[]` — массив `{ id, icon, title, text }` |
| `ProgramsSection` | `programs: Program[]` — `{ id, ageGroup, title, description, sessionsPerWeek, duration, tag }`; табы-фильтр — внутреннее состояние |
| `HallsSection` | `halls: Hall[]` — `{ id, name, address, description, schedule: [{day, time}], mapUrl }` |
| `CoachesSection` | `coaches: Coach[]` — `{ id, name, dan, photo, description, specialty, certificate? }` |
| `AchievementsSection` | `achievements: Achievement[]` — `{ id, year, title, result }` (таймлайн) |
| `ReviewsSection` | `reviews: Review[]` — `{ id, author, role, text, rating }`; карусель — внутреннее состояние |
| `SocialFeedSection` | `socialFeed: { provider: 'facebook'\|'instagram', pageUrl, embedUrl?, cta }`; ленивая загрузка, фолбэк-кнопки |
| `PricingSection` | `plans: Plan[]` — `{ id, name, price, sessionsPerWeek, features[], highlighted }`; `trial: TrialInfo` |
| `FaqSection` | `faq: FaqItem[]` — `{ id, question, answer, category }`; аккордеон — внутреннее состояние |
| `ContactsSection` | `contacts: { phones[], email, addresses[], socials[], cta }`, `formFields`; форма шлёт данные (куда — уточнить: email/Telegram/Google Form) |
| `LanguageSwitcher` | `currentLang`, `onChange(lang)` — RU/EN/LV |

**Самостоятельные секции:** Hero, Advantages, Programs, Achievements, SocialFeed, Pricing, FAQ.
**Секции-контейнеры (составные):** HallsSection = заголовок + список `HallCard` + `ScheduleAccordion`; ContactsSection = `ContactForm` + `ContactInfoBlock` + `SocialLinks` + `MapEmbed`; CoachesSection = заголовок + список `CoachCard`.

**Общие (shared):** `SectionHeader` (заголовок + подзаголовок + якорь), `CtaButton`, `Card`, `Accordion`, `Carousel`, `StatCounter`, `SocialLinks`, `ContactForm`.

**Данные:** один файл `content.ts` (или JSON под CMS) с объектами `{ru, en, lv}` — компоненты не содержат текстов, только пропсы. Язык хранится в контексте; при смене языка ререндерится весь контент (можно без i18n-библиотеки; `react-i18next` упростит переключение и SEO-мета).

---

## 5. Рекомендации по анимации

**Где использовать GSAP (ScrollTrigger):**
- Вход секций при скролле: fade + сдвиг вверх, с каскадом (stagger) для карточек преимуществ, программ и отзывов.
- Мягкий параллакс фона в Hero (слой изображения/3D двигается медленнее контента).
- Счётчики-факты (1984, 8 дан, 2 зала) — анимация чисел при попадании в зону видимости.
- Hover-эффекты карточек тренеров и абонементов: лёгкое приподнимание + тень (можно и чистым CSS/Tailwind).
- Таймлайн достижений: точки и линии «вырисовываются» по мере скролла.

**Где НЕ анимировать (чтобы не мешать чтению):**
- Текст FAQ (аккордеон открывается мгновенно, без длинных переходов).
- Блоки цен — только лёгкий hover на карточку, без движения цифр.
- Контактную форму и блоки контактов — статично, чтобы не отвлекать от заполнения.
- Ленту соцсетей — никакой анимации внутри iframe, только появление секции.
- Обязательно `prefers-reduced-motion: reduce` — отключать все анимации.

**Лёгкая 3D-сцена для Hero (Three.js):**
Стилизованный низкополигональный «додзё»: плоскость татами с деликатной сеткой линий, мягкий туман, тёплый свет; в центре — 2–3 парящих геометрических объекта (октаэдр/тор) в цветах клуба (белый + красный — цвета поясов), медленно вращающихся + лёгкий параллакс за курсором мыши. Контент — поверх, с градиентной подложкой для читаемости. Никакого пост-процессинга, ≤1 canvas, пауза при скрытии вкладки.

---

## 6. JSON-структуры данных и CMS

Все текстовые поля — объекты `{"ru": "...", "en": "...", "lv": "..."}`.

```jsonc
// content.json — единый файл контента
{
  "site": { "clubName": {"ru":"Vasilyev Karate Club","en":"Vasilyev Karate Club","lv":"Vasiljeva karatē klubs"},
            "founded": 1984, "languages": ["ru","en","lv"] },
  "hero": { "title": {...}, "slogan": {...}, "subtitle": {...}, "paragraph": {...},
            "cta1": {...}, "cta2": {...}, "values": [{...}, {...}, {...}, {...}] },
  "advantages": [ { "id": 1, "icon": "belt", "title": {...}, "text": {...} } ],
  "programs":   [ { "id": 1, "ageGroup": "4–6", "title": {...}, "description": {...},
                    "sessionsPerWeek": 2, "duration": "45 min", "tag": "kids" } ],
  "halls":      [ { "id": 1, "name": {...},
                    "address": "Ikšķiles iela 6, Rīga 72. vidusskola, mazā sporta zāle, 3. stāvs, LV-1057",
                    "description": {...}, "mapUrl": "https://maps.google.com/?q=...",
                    "schedule": [ { "day": "mon", "time": "17:00–18:00" } ] } ],
  "coaches":    [ { "id": 1, "name": "Leonids Vasiļjevs", "dan": 8, "photo": "/img/coach-1.jpg",
                    "description": {...}, "certificate": null },
                  { "id": 2, "name": "Žanna Vasiļjeva", "dan": 5, "photo": "/img/coach-2.jpg",
                    "certificate": { "category": "C", "number": "2622", "validUntil": "2025-11-11" } },
                  { "id": 3, "name": "Diana Tokare", "dan": 2, "photo": "/img/coach-3.jpg",
                    "description": {...}, "certificate": null } ],
  "achievements":[ { "id": 1, "year": 2024, "title": {...}, "result": {...}, "type": "anniversary" } ],
  "reviews":    [ { "id": 1, "author": "Anna", "role": {...}, "text": {...}, "rating": 5 } ],
  "socialFeed": { "enabled": true, "provider": "facebook",
                  "pageUrl": "https://www.facebook.com/eurokaratedo",
                  "embedUrl": "https://www.facebook.com/plugins/page.php?href=...",
                  "fallback": { "text": {...} } },
  "pricing":    { "trial": { "price": 0, "description": {...} },
                  "plans": [ { "id": "start", "name": {...}, "price": null, "currency": "EUR", // «цена по телефону»
                               "sessionsPerWeek": 2, "highlighted": false } ] },
  "faq":        [ { "id": 1, "question": {...}, "answer": {...}, "category": "safety" } ],
  "contacts":   { "phones": ["+371 29172572", "+371 29757753"], "email": null,
                  "socials": [ {"name":"Facebook","url":"https://www.facebook.com/eurokaratedo"},
                               {"name":"Instagram","url":"https://www.instagram.com/vasilyev_karate"} ],
                  "cta": {...} }
}
```

**Поля, которые обязательно вынести в CMS/конфиг** (обновляются без разработчика):
- Контакты: телефоны, email, ссылки на соцсети.
- Адреса залов и расписание по дням/часам (+ ссылки на Google Maps).
- Цены и условия абонементов, скидки, условия пробного занятия.
- Тексты преимуществ, программ, FAQ, отзывов (на 3 языках).
- Данные тренеров: имена, степени, фото, сертификаты.
- Достижения (год, название, результат) — или флаг «брать из ленты Facebook».
- Лента соцсетей: провайдер, ссылка на страницу, включить/выключить.
- Фото и видео (Hero, залы, тренеры, галерея), логотип.

---

## 7. Открытые вопросы / плейсхолдеры

- Расписание тренировок по залам и дням (владелец не знает — оставить плейсхолдеры, заполнить позже).
- Цены абонементов, скидки, условия заморозки, стоимость разового занятия.
- Email клуба.
- Реальные достижения (наполнить из Facebook-ленты).
- Реальные отзывы (сейчас — примеры; заменить на реальные с разрешения авторов).
- Фото тренеров (в т.ч. Diana Tokare) и залов.
- Кому отправляется форма заявки: вписать endpoint сервиса приёма форм (EmailOctopus) в `content.form.endpoint` в `src/content.ts`.
- Актуальность сертификата Жанны Васильевой (указан срок до 11.11.2025).

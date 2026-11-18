import type {
  Achievement,
  Advantage,
  Coach,
  DayKey,
  FaqItem,
  Hall,
  HallAddress,
  Localized,
  Program,
  ProgramTag,
  Review,
  SeoBlockContent,
  Social,
  SocialPost,
  Stat,
  TrialInfo,
  TrainingGroup,
  TrustItem,
} from './types'

export const LANGS = ['ru', 'en', 'lv'] as const

export const NAV: { id: string; label: Localized }[] = [
  { id: 'why', label: { ru: 'Почему мы', en: 'Why us', lv: 'Kāpēc mēs' } },
  { id: 'programs', label: { ru: 'Программы', en: 'Programs', lv: 'Programmas' } },
  { id: 'halls', label: { ru: 'Залы', en: 'Halls', lv: 'Zāles' } },
  { id: 'coaches', label: { ru: 'Тренеры', en: 'Coaches', lv: 'Treneri' } },
  { id: 'social', label: { ru: 'Новости', en: 'News', lv: 'Jaunumi' } },
  { id: 'pricing', label: { ru: 'Группы', en: 'Groups', lv: 'Grupas' } },
  { id: 'faq', label: { ru: 'FAQ', en: 'FAQ', lv: 'BUJ' } },
  { id: 'contacts', label: { ru: 'Контакты', en: 'Contacts', lv: 'Kontakti' } },
]

export const DAY_NAMES: Record<DayKey, Localized> = {
  mon: { ru: 'Понедельник', en: 'Monday', lv: 'Pirmdiena' },
  tue: { ru: 'Вторник', en: 'Tuesday', lv: 'Otrdiena' },
  wed: { ru: 'Среда', en: 'Wednesday', lv: 'Trešdiena' },
  thu: { ru: 'Четверг', en: 'Thursday', lv: 'Ceturtdiena' },
  fri: { ru: 'Пятница', en: 'Friday', lv: 'Piektdiena' },
  sat: { ru: 'Суббота', en: 'Saturday', lv: 'Sestdiena' },
  sun: { ru: 'Воскресенье', en: 'Sunday', lv: 'Svētdiena' },
}

export const PROGRAM_TAGS: { id: ProgramTag | 'all'; label: Localized }[] = [
  { id: 'all', label: { ru: 'Все', en: 'All', lv: 'Visi' } },
  { id: 'kids-4-6', label: { ru: '4-6 лет', en: 'Age 4-6', lv: '4-6 gadi' } },
  { id: 'kids-7-12', label: { ru: '7-12 лет', en: 'Age 7-12', lv: '7-12 gadi' } },
  { id: 'teens', label: { ru: '13-16 лет', en: 'Age 13-16', lv: '13-16 gadi' } },
  { id: 'adults', label: { ru: 'Взрослые', en: 'Adults', lv: 'Pieaugušie' } },
  { id: 'competition', label: { ru: 'Соревновательная', en: 'Competition', lv: 'Sacensību' } },
]

export const SECTIONS: Record<
  string,
  { kicker: Localized; title: Localized; subtitle?: Localized }
> = {
  why: {
    kicker: { ru: '01 · Преимущества', en: '01 · Advantages', lv: '01 · Priekšrocības' },
    title: { ru: 'Почему именно наш клуб', en: 'Why choose our club', lv: 'Kāpēc izvēlēties mūsu klubu' },
    subtitle: {
      ru: 'Школа с историей и сертифицированными тренерами - карате, которому доверяют уже более 40 лет.',
      en: 'A school with history and certified coaches - karate trusted for over 40 years.',
      lv: 'Skola ar vēsturi un sertificētiem treneriem - karatē, kam uzticas jau vairāk nekā 40 gadus.',
    },
  },
  programs: {
    kicker: { ru: '02 · Программы', en: '02 · Programs', lv: '02 · Programmas' },
    title: { ru: 'Программы и возрастные группы', en: 'Programs & age groups', lv: 'Programmas un vecuma grupas' },
    subtitle: {
      ru: 'Детское карате в Риге с 4 лет и группы для взрослых - от игровых тренировок для малышей до соревновательной группы.',
      en: "Kids' karate in Riga from age 4 and adult groups - from play-based classes to the competition group.",
      lv: 'Bērnu karatē Rīgā no 4 gadu vecuma un pieaugušo grupas - no rotaļu nodarbībām līdz sacensību grupai.',
    },
  },
  halls: {
    kicker: { ru: '03 · Залы', en: '03 · Halls', lv: '03 · Zāles' },
    title: { ru: 'Залы и расписание', en: 'Halls & schedule', lv: 'Treniņu zāles un grafiks' },
    subtitle: {
      ru: 'Два зала в Риге (Кенгарагс) - выберите тот, что ближе к дому.',
      en: 'Two halls in Riga (Ķengarags) - pick the one closest to home.',
      lv: 'Divas zāles Rīgā (Ķengaragā) - izvēlieties to, kas tuvāk mājām.',
    },
  },
  coaches: {
    kicker: { ru: '04 · Команда', en: '04 · Team', lv: '04 · Komanda' },
    title: { ru: 'Тренеры', en: 'Coaches', lv: 'Treneri' },
    subtitle: {
      ru: 'Занятия ведут мастера с высшими степенями и инструктор по ОФП - от детских групп до соревновательной подготовки.',
      en: 'Classes are led by masters with the highest ranks and a physical-training instructor - from kids’ groups to competition training.',
      lv: 'Nodarbības vada meistari ar augstākajām pakāpēm un vispārējās fiziskās sagatavotības instruktore - no bērnu grupām līdz sacensību sagatavošanai.',
    },
  },
  achievements: {
    kicker: { ru: '05 · Результаты', en: '05 · Results', lv: '05 · Rezultāti' },
    title: { ru: 'Достижения и мероприятия', en: 'Achievements & events', lv: 'Sasniegumi un pasākumi' },
    subtitle: {
      ru: 'Турниры, лагеря и аттестации - наши ученики регулярно выступают и подтверждают уровень.',
      en: 'Tournaments, camps and belt exams - our students compete and prove their level.',
      lv: 'Turnīri, nometnes un jostu eksāmeni - mūsu audzēkņi regulāri startē un apliecina līmeni.',
    },
  },
  reviews: {
    kicker: { ru: '06 · Отзывы', en: '06 · Reviews', lv: '06 · Atsauksmes' },
    title: { ru: 'Отзывы', en: 'Reviews', lv: 'Atsauksmes' },
    subtitle: {
      ru: 'Что говорят родители и взрослые ученики клуба.',
      en: 'What parents and adult students say about the club.',
      lv: 'Ko saka vecāki un pieaugušie kluba audzēkņi.',
    },
  },
  social: {
    kicker: { ru: '07 · Новости', en: '07 · News', lv: '07 · Jaunumi' },
    title: { ru: 'Жизнь клуба', en: 'Club life', lv: 'Kluba dzīve' },
    subtitle: {
      ru: 'Фото и новости тренировок, турниров, лагерей и мероприятий - жизнь клуба на одной странице.',
      en: 'Photos and news from training, tournaments, camps and events - club life in one place.',
      lv: 'Fotogrāfijas un jaunumi no treniņiem, turnīriem, nometnēm un pasākumiem - kluba dzīve vienā vietā.',
    },
    // замечание: заголовки секций social/pricing/faq/contacts переопределены ниже в content
  },
  pricing: {
    kicker: { ru: '08 · Как начать', en: '08 · Getting started', lv: '08 · Kā sākt' },
    title: { ru: 'Группы для детей и взрослых', en: 'Groups for kids and adults', lv: 'Grupas bērniem un pieaugušajiem' },
    subtitle: {
      ru: 'Первая тренировка - бесплатно. Подскажем, какая группа подойдёт вам или вашему ребёнку, и назовём стоимость по телефону.',
      en: 'Your first class is free. We will suggest the right group for you or your child and tell you the price by phone.',
      lv: 'Pirmā nodarbība - bez maksas. Ieteiksim piemērotāko grupu jums vai jūsu bērnam un pateiksim cenu pa tālruni.',
    },
  },
  faq: {
    kicker: { ru: '09 · Вопросы', en: '09 · Questions', lv: '09 · Jautājumi' },
    title: { ru: 'Вопросы и ответы', en: 'FAQ', lv: 'Biežāk uzdotie jautājumi' },
    subtitle: {
      ru: 'Безопасность, экипировка, пропуски, соревнования - отвечаем на главные вопросы.',
      en: 'Safety, gear, missed classes, competitions - answers to the main questions.',
      lv: 'Drošība, ekipējums, izlaistas nodarbības, sacensības - atbildes uz galvenajiem jautājumiem.',
    },
  },
  contacts: {
    kicker: { ru: '10 · Контакты', en: '10 · Contacts', lv: '10 · Kontakti' },
    title: { ru: 'Контакты', en: 'Contacts', lv: 'Kontakti' },
    subtitle: {
      ru: 'Напишите нам или оставьте заявку - мы ответим в течение дня.',
      en: 'Write to us or leave a request - we will reply within a day.',
      lv: 'Rakstiet mums vai atstājiet pieprasījumu - atbildēsim dienas laikā.',
    },
  },
}

export const content = {
  sections: SECTIONS,
  site: {
    /** Канонический домен сайта - canonical, OG-теги, sitemap. Заменить при переезде. */
    url: 'https://vasilyev-karate.lv',
    clubName: {
      ru: 'Vasilyev Karate Club',
      en: 'Vasilyev Karate Club',
      lv: 'Vasiljeva karatē klubs',
    } as Localized,
    tagline: { ru: 'Карате в Риге с 1984 года', en: 'Karate in Riga since 1984', lv: 'Karatē Rīgā kopš 1984. gada' } as Localized,
    meta: {
      title: {
        ru: 'Карате в Риге (Кенгарагс) - Vasilyev Karate Club с 1984 года',
        en: 'Karate in Riga (Ķengarags) - Vasilyev Karate Club since 1984',
        lv: 'Karatē Rīgā (Ķengaragā) - Vasiljeva karatē klubs kopš 1984. gada',
      },
      description: {
        ru: 'Детское и взрослое карате в Риге, Кенгарагс: два зала, группы с 4 лет, соревнования и самооборона. Первая тренировка бесплатно, тренеры 8 дан и 5 дан.',
        en: 'Karate for children from age 4 and adults in Riga, Ķengarags: two halls, competitions and self-defence. Free first class, coaches with 8th and 5th dan.',
        lv: 'Karatē bērniem no 4 gadu vecuma un pieaugušajiem Rīgā, Ķengaragā: divas zāles, sacensības un pašaizsardzība. Pirmā nodarbība bez maksas, treneri ar 8. un 5. danu.',
      },
    },
  },

  hero: {
    /** Главное фото первого экрана. Пока файл есть - 3D-сцена не рендерится (быстрее и нагляднее). */
    image: {
      src: '/hero.jpg',
      alt: {
        ru: 'Тренировка в зале Vasilyev Karate Club - карате в Риге с 1984 года',
        en: 'Training at Vasilyev Karate Club - karate in Riga since 1984',
        lv: 'Treniņš Vasiljeva karatē klubā - karatē Rīgā kopš 1984. gada',
      },
    },
    title: {
      ru: 'Карате в Риге для детей и взрослых - с 1984 года',
      en: 'Karate in Riga for kids and adults - since 1984',
      lv: 'Karatē Rīgā bērniem un pieaugušajiem - kopš 1984. gada',
    } as Localized,
    slogan: {
      ru: 'Приходи и присоединяйся к команде!',
      en: 'Come and join the team!',
      lv: 'Nāc un pievienojies komandai!',
    } as Localized,
    subtitle: {
      ru: 'Мастера клуба: Леонид Васильев - 8 дан, Жанна Васильева - 5 дан. Группы с 4 лет, два зала в Риге, бесплатное пробное занятие.',
      en: 'Club masters: Leonid Vasilyev - 8th dan, Zhanna Vasilyeva - 5th dan. Groups from age 4, two halls in Riga, free trial class.',
      lv: 'Kluba meistari: Leonīds Vasiļjevs - 8. dans, Žanna Vasiļjeva - 5. dans. Grupas no 4 gadu vecuma, divas zāles Rīgā, bezmaksas izmēģinājuma nodarbība.',
    } as Localized,
    /** Короткая версия подзаголовка для телефонов - первый экран должен укладываться в высоту. */
    subtitleMobile: {
      ru: 'Мастера 8 и 5 дан, группы с 4 лет, два зала в Риге. Первая тренировка - бесплатно.',
      en: 'Masters 8th and 5th dan, groups from age 4, two halls in Riga. First class free.',
      lv: 'Meistari ar 8. un 5. danu, grupas no 4 gadiem, divas zāles Rīgā. Pirmā nodarbība bez maksas.',
    } as Localized,
    paragraph: {
      ru: 'Помогаем детям расти сильными и уверенными, а взрослым - найти форму и дисциплину. Приходите на пробную тренировку и убедитесь сами.',
      en: 'We help children grow strong and confident, and adults find fitness and discipline. Come to a trial class and see for yourself.',
      lv: 'Palīdzam bērniem augt stipriem un pārliecinātiem, bet pieaugušajiem - iegūt formu un disciplīnu. Nāciet uz izmēģinājuma nodarbību un pārliecinieties paši.',
    } as Localized,
    cta1: {
      ru: 'Записаться на бесплатную первую тренировку',
      en: 'Book a free first class',
      lv: 'Pieteikties bezmaksas pirmajai nodarbībai',
    } as Localized,
    cta2: {
      ru: 'Смотреть расписание',
      en: 'See the schedule',
      lv: 'Skatīt nodarbību grafiku',
    } as Localized,
    /** Короткая версия для телефонов: в половину ширины длинная подпись не влезает. */
    cta2Short: {
      ru: 'Расписание',
      en: 'Schedule',
      lv: 'Grafiks',
    } as Localized,
    ctaShort: {
      ru: 'Первая тренировка',
      en: 'First class',
      lv: 'Pirmā nodarbība',
    } as Localized,
    stats: [
      { value: 1984, label: { ru: 'год основания', en: 'founded', lv: 'dibināts' } },
      { value: 8, suffix: { ru: ' дан', en: 'th dan', lv: '. dans' }, label: { ru: 'высшая степень тренера', en: 'highest coach rank', lv: 'augstākā trenera pakāpe' } },
      { value: 2, label: { ru: 'зала в Риге', en: 'halls in Riga', lv: 'zāles Rīgā' } },
      { value: 4, suffix: { ru: '+', en: '+', lv: '+' }, label: { ru: 'лет - приём с 4 лет', en: 'years - start at 4', lv: 'gadi - sākums no 4' } },
    ] as Stat[],
    values: [
      { ru: 'Здоровье', en: 'Health', lv: 'Veselība' },
      { ru: 'Дисциплина', en: 'Discipline', lv: 'Disciplīna' },
      { ru: 'Самооборона', en: 'Self-defence', lv: 'Pašaizsardzība' },
      { ru: 'Соревнования', en: 'Competitions', lv: 'Sacensības' },
    ] as Localized[],
  },

  advantages: [
    {
      id: 'masters',
      icon: 'award',
      title: { ru: 'Мастера высшей категории', en: 'Masters of the highest rank', lv: 'Augstākās kategorijas meistari' },
      text: {
        ru: 'Клуб основал Леонид Васильев - 8 дан, обладатель одной из высших степеней в Латвии; занятия ведут сертифицированные тренеры.',
        en: 'The club was founded by Leonid Vasilyev - 8th dan, one of the highest ranks in Latvia; classes are led by certified coaches.',
        lv: 'Klubu dibināja Leonīds Vasiļjevs - 8. dans, viena no augstākajām pakāpēm Latvijā; nodarbības vada sertificēti treneri.',
      },
    },
    {
      id: 'history',
      icon: 'history',
      title: { ru: 'Опыт с 1984 года', en: 'Since 1984', lv: 'Kopš 1984. gada' },
      text: {
        ru: 'Более 40 лет учим карате детей и взрослых в Риге - школа с историей и традициями.',
        en: 'Over 40 years of teaching karate to kids and adults in Riga - a school with history and tradition.',
        lv: 'Vairāk nekā 40 gadus mācām karatē bērniem un pieaugušajiem Rīgā - skola ar vēsturi un tradīcijām.',
      },
    },
    {
      id: 'age',
      icon: 'baby',
      title: { ru: 'Приём с 4 лет', en: 'From age 4', lv: 'No 4 gadu vecuma' },
      text: {
        ru: 'Игровая методика для самых маленьких и спокойный старт без стресса для ребёнка.',
        en: 'A play-based method for the youngest and a stress-free start for your child.',
        lv: 'Rotaļu metode mazākajiem un mierīgs starts bez stresa bērnam.',
      },
    },
    {
      id: 'halls',
      icon: 'pin',
      title: { ru: 'Два зала в Риге', en: 'Two halls in Riga', lv: 'Divas zāles Rīgā' },
      text: {
        ru: 'Удобное расположение в Кенгарагсе: Ikšķiles iela 6 и Latgales iela 322.',
        en: 'Convenient locations in Ķengarags: Ikšķiles iela 6 and Latgales iela 322.',
        lv: 'Ērtas atrašanās vietas Ķengaragā: Ikšķiles iela 6 un Latgales iela 322.',
      },
    },
    {
      id: 'competition',
      icon: 'trophy',
      title: { ru: 'Соревновательная практика', en: 'Competition practice', lv: 'Sacensību prakse' },
      text: {
        ru: 'Регулярно выступаем на турнирах Латвии и международных соревнованиях - участие по желанию.',
        en: 'Regular participation in Latvian and international tournaments - participation is optional.',
        lv: 'Regulāri piedalāmies Latvijas un starptautiskos turnīros - dalība pēc vēlēšanās.',
      },
    },
    {
      id: 'character',
      icon: 'target',
      title: { ru: 'Дисциплина и характер', en: 'Discipline and character', lv: 'Disciplīna un raksturs' },
      text: {
        ru: 'Карате - это не только спорт: воспитываем уважение, собранность и уверенность в себе.',
        en: 'Karate is more than sport: we build respect, focus and self-confidence.',
        lv: 'Karatē ir vairāk nekā sports: audzinām cieņu, savaldību un pašapziņu.',
      },
    },
  ] as Advantage[],

  programs: [
    {
      id: 'kids-4-6',
      ageGroup: '4-6',
      title: { ru: 'Малыши 4-6 лет', en: 'Little ones 4-6', lv: 'Mazākie 4-6 gadi' },
      description: {
        ru: 'Карате и общая физическая подготовка в игровой форме: координация, гибкость, привычка к дисциплине.',
        en: 'Karate and general fitness through play: coordination, flexibility and good habits.',
        lv: 'Karatē un vispārējā fiziskā sagatavotība rotaļu veidā: koordinācija, lokanība, disciplīnas ieradumi.',
      },
      sessions: { ru: '2 раза в неделю', en: '2× per week', lv: '2× nedēļā' },
      tag: 'kids-4-6',
    },
    {
      id: 'kids-7-12',
      ageGroup: '7-12',
      title: { ru: 'Дети 7-12 лет', en: 'Kids 7-12', lv: 'Bērni 7-12 gadi' },
      description: {
        ru: 'Базовая техника, ката и лёгкое кумите, подготовка к поясам и первым турнирам.',
        en: 'Basic technique, kata and light kumite, preparation for belts and first tournaments.',
        lv: 'Pamattehnika, kata un viegls kumite, sagatavošanās jostām un pirmajiem turnīriem.',
      },
      sessions: { ru: '2-3 раза в неделю', en: '2-3× per week', lv: '2-3× nedēļā' },
      tag: 'kids-7-12',
    },
    {
      id: 'teens',
      ageGroup: '13-16',
      title: { ru: 'Подростки 13-16 лет', en: 'Teens 13-16', lv: 'Pusaudži 13-16 gadi' },
      description: {
        ru: 'Углублённая техника, физическая подготовка, соревновательный режим по желанию.',
        en: 'Advanced technique, physical conditioning, optional competitive track.',
        lv: 'Padziļināta tehnika, fiziskā sagatavotība, sacensību režīms pēc vēlēšanās.',
      },
      sessions: { ru: '3 раза в неделю', en: '3× per week', lv: '3× nedēļā' },
      tag: 'teens',
    },
    {
      id: 'adults',
      ageGroup: '18+',
      title: { ru: 'Взрослые, с нуля', en: 'Adults, from zero', lv: 'Pieaugušie, no nulles' },
      description: {
        ru: 'Начните в любом возрасте: техника, ОФП, самооборона, снятие стресса.',
        en: 'Start at any age: technique, fitness, self-defence, stress relief.',
        lv: 'Sāciet jebkurā vecumā: tehnika, fiziskā forma, pašaizsardzība, stresa mazināšana.',
      },
      sessions: { ru: '2 раза в неделю', en: '2× per week', lv: '2× nedēļā' },
      tag: 'adults',
    },
  ] as Program[],

  halls: [
    {
      id: 'hall-1',
      name: { ru: 'Зал 1 - Ikšķiles iela 6', en: 'Hall 1 - Ikšķiles iela 6', lv: '1. zāle - Ikšķiles iela 6' },
      address: 'Rīgas 72. vidusskola, малый спортзал, 3-й этаж · LV-1057',
      description: {
        ru: 'Основной зал клуба в спортивном зале школы. Рядом остановки общественного транспорта и парковка.',
        en: "The club's main hall in the school gym. Public transport stops and parking nearby.",
        lv: 'Kluba galvenā zāle skolas sporta zālē. Blakus sabiedriskā transporta pieturas un autostāvvieta.',
      },
      schedule: [
        { day: 'mon', time: '17:00-20:00' },
        { day: 'wed', time: '17:00-20:00' },
        { day: 'fri', time: '17:00-20:00' },
        { day: 'sat', time: '10:00-13:00' },
      ],
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ik%C5%A1%C4%B7iles+iela+6,+R%C4%ABga',
      photo: '/images/halls/ikskiles.jpg',
      convenience: {
        ru: 'Удобно для жителей Кенгарагса и центра Риги: остановки транспорта и парковка у школы, 5 минут пешком от остановки «Ikšķiles iela».',
        en: 'Convenient for Ķengarags and central Riga residents: transport stops and parking by the school, 5 minutes on foot from the "Ikšķiles iela" stop.',
        lv: 'Ērti Ķengaraga un Rīgas centra iedzīvotājiem: transports pieturas un stāvvieta pie skolas, 5 minūtes gājienā no pieturas "Ikšķiles iela".',
      },
    },
    {
      id: 'hall-2',
      name: { ru: 'Зал 2 - Latgales iela 322', en: 'Hall 2 - Latgales iela 322', lv: '2. zāle - Latgales iela 322' },
      address: 'Latgales iela 322, Rīga · LV-1057',
      description: {
        ru: 'Второй зал клуба, группы детей и взрослых. Удобно добираться из центра и Кенгарагса.',
        en: "The club's second hall for kids and adults. Easy access from the city centre and Ķengarags.",
        lv: 'Kluba otrā zāle bērnu un pieaugušo grupām. Ērta piekļuve no centra un Ķengaraga.',
      },
      schedule: [
        { day: 'tue', time: '17:00-20:00' },
        { day: 'thu', time: '17:00-20:00' },
        { day: 'sat', time: '13:00-16:00' },
      ],
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Latgales+iela+322,+R%C4%ABga',
      photo: '/images/halls/latgales.jpg',
      convenience: {
        ru: 'Рядом Кенгарагс и центр: трамвай и автобус по Latgales iela, парковка во дворе - легко добраться из любого района Риги.',
        en: 'Close to Ķengarags and the centre: tram and bus along Latgales iela, parking on site - easy to reach from any district of Riga.',
        lv: 'Netālu no Ķengaraga un centra: tramvajs un autobuss pa Latgales ielu, stāvvieta pagalmā - viegli sasniegt no jebkura Rīgas rajona.',
      },
    },
  ] as Hall[],

  hallsNote: {
    ru: 'Оба зала находятся в Кенгарагсе, 10-15 минут от центра Риги: удобно добираться на трамвае, автобусе и на машине, рядом остановки и парковка. Родителям из Кенгарагса, Дарзини и центра не нужно возить детей через весь город.',
    en: 'Both halls are in Ķengarags, 10-15 minutes from central Riga: easy by tram, bus or car, with stops and parking nearby. Parents from Ķengarags, Dārziņi and the centre do not have to cross the whole city.',
    lv: 'Abas zāles atrodas Ķengaragā, 10-15 minūtēs no Rīgas centra: ērti ar tramvaju, autobusu vai auto, blakus pieturas un stāvvieta. Vecākiem no Ķengaraga, Dārziņiem un centra nav jābrauc pāri visai pilsētai.',
  } as Localized,

  coaches: [
    {
      id: 'leonid',
      photo: '/leonid.jpg',
      name: 'Leonids Vasiļjevs',
      dan: 8,
      description: {
        ru: 'Основатель клуба. Тренировки по кумите и ката, готовит спортсменов к турнирам Латвии и международным стартам.',
        en: 'Founder of the club. Coaches kumite and kata, prepares athletes for Latvian and international tournaments.',
        lv: 'Kluba dibinātājs. Vada kumite un kata treniņus, gatavo sportistus Latvijas un starptautiskiem turnīriem.',
      },
      specialty: {
        ru: 'Кумите и ката',
        en: 'Kumite and kata',
        lv: 'Kumite un kata',
      },
    },
    {
      id: 'zhanna',
      photo: '/zanna.jpg',
      name: 'Žanna Vasiļjeva',
      dan: 5,
      description: {
        ru: 'Тренер: подготовка к экзаменам и турнирам, все группы.',
        en: 'Coach: preparation for exams and tournaments, all groups.',
        lv: 'Trenere: sagatavošanās eksāmeniem un turnīriem, visas grupas.',
      },
      specialty: {
        ru: 'Экзамены и турниры · все группы',
        en: 'Exams and tournaments · all groups',
        lv: 'Eksāmeni un turnīri · visas grupas',
      },
    },
    {
      id: 'diana',
      photo: '/diana.jpg',
      name: 'Diana Tokare',
      dan: 2,
      description: {
        ru: 'Тренер: детские группы, ОФП.',
        en: 'Coach: kids’ groups, general fitness.',
        lv: 'Trenere: bērnu grupas, vispārējā fiziskā sagatavotība.',
      },
      specialty: {
        ru: 'Детские группы · ОФП',
        en: 'Kids’ groups · general fitness',
        lv: 'Bērnu grupas · vispārējā sagatavotība',
      },
    },
    {
      id: 'olga',
      photo: '/olga.jpg',
      name: 'Olga Halvitova',
      /* Степени карате нет - на бейдже указываем направление работы, а не выдуманный дан. */
      badge: {
        ru: 'ОФП',
        en: 'FITNESS',
        lv: 'VFS',
      },
      description: {
        ru: 'Инструктор клуба: общая физическая подготовка в детских группах.',
        en: 'Club instructor: general physical training in the kids’ groups.',
        lv: 'Kluba instruktore: vispārējā fiziskā sagatavotība bērnu grupās.',
      },
      specialty: {
        ru: 'Дети',
        en: 'Kids',
        lv: 'Bērni',
      },
    },
  ] as Coach[],

  achievements: [
    {
      id: 'anniversary-40',
      year: { ru: '2024', en: '2024', lv: '2024' },
      title: { ru: '40 лет клубу', en: '40 years of the club', lv: 'Klubam 40 gadi' },
      result: {
        ru: 'Юбилейный год: праздничный турнир и показательные выступления учеников.',
        en: 'Anniversary year: a festive tournament and demonstrations by students.',
        lv: 'Jubilejas gads: svētku turnīrs un audzēkņu demonstrācijas.',
      },
      type: 'anniversary',
    },
    {
      id: 'lv-championship',
      year: { ru: '2024', en: '2024', lv: '2024' },
      title: { ru: 'Чемпионат Латвии по карате', en: 'Latvian Karate Championship', lv: 'Latvijas karatē čempionāts' },
      result: {
        ru: 'Призовые места в личных и командных категориях.',
        en: 'Podium finishes in individual and team categories.',
        lv: 'Godalgotas vietas individuālajās un komandu kategorijās.',
      },
      type: 'tournament',
    },
    {
      id: 'riga-intl',
      year: { ru: '2023', en: '2023', lv: '2023' },
      title: { ru: 'Международный турнир в Риге', en: 'International tournament in Riga', lv: 'Starptautisks turnīrs Rīgā' },
      result: {
        ru: 'Участие и призовые места, обмен опытом с зарубежными клубами.',
        en: 'Participation and podium finishes, exchange of experience with foreign clubs.',
        lv: 'Dalība un godalgotas vietas, pieredzes apmaiņa ar ārvalstu klubiem.',
      },
      type: 'tournament',
    },
    {
      id: 'summer-camp',
      year: { ru: 'Ежегодно', en: 'Every year', lv: 'Katru gadu' },
      title: { ru: 'Летний тренировочный лагерь', en: 'Summer training camp', lv: 'Vasaras treniņnometne' },
      result: {
        ru: 'Неделя интенсивных тренировок, ката и отдыха.',
        en: 'A week of intensive training, kata and rest.',
        lv: 'Nedēļa intensīvu treniņu, kata un atpūtas.',
      },
      type: 'camp',
    },
    {
      id: 'belt-exams',
      year: { ru: 'Ежегодно', en: 'Every year', lv: 'Katru gadu' },
      title: { ru: 'Экзамены на пояса (кю)', en: 'Belt exams (kyu)', lv: 'Jostu eksāmeni (kju)' },
      result: {
        ru: 'Дважды в год - официальная аттестация учеников.',
        en: 'Twice a year - official certification of students.',
        lv: 'Divas reizes gadā - oficiāla audzēkņu atestācija.',
      },
      type: 'exam',
    },
  ] as Achievement[],

  achievementTypes: {
    anniversary: { ru: 'Юбилей', en: 'Anniversary', lv: 'Jubileja' },
    tournament: { ru: 'Турнир', en: 'Tournament', lv: 'Turnīrs' },
    camp: { ru: 'Лагерь', en: 'Camp', lv: 'Nometne' },
    exam: { ru: 'Аттестация', en: 'Exam', lv: 'Eksāmens' },
  } as Record<Achievement['type'], Localized>,

  reviews: [
    {
      id: 'anna',
      author: 'Anna',
      role: { ru: 'мама Саши (7 лет)', en: "Sasha's mum (age 7)", lv: 'Sašas mamma (7 gadi)' },
      text: {
        ru: 'Сын занимается уже два года - стал собраннее, увереннее, и это его любимое занятие недели. Тренеры внимательные, всегда на связи.',
        en: "My son has trained for two years - he's become more focused and confident, and it's the highlight of his week. Coaches are attentive and always in touch.",
        lv: 'Dēls trenējas jau divus gadus - kļuvis savāktāks un pārliecinātāks, un tā ir viņa mīļākā nedēļas nodarbība. Treneri ir uzmanīgi un vienmēr sazinās.',
      },
      rating: 5,
    },
    {
      id: 'igor',
      author: 'Igor',
      role: { ru: '34 года', en: '34 years old', lv: '34 gadi' },
      text: {
        ru: 'Начал с нуля в 33 - никогда не поздно. Отличная атмосфера, грамотная техника, за полгода заметно подтянулся и физически, и морально.',
        en: "Started from zero at 33 - it's never too late. Great atmosphere, solid technique; in six months I've noticeably improved physically and mentally.",
        lv: 'Sāku no nulles 33 gadu vecumā - nekad nav par vēlu. Lieliska atmosfēra, pamatīga tehnika; pusgada laikā manāmi uzlabojusies gan fiziskā, gan garīgā forma.',
      },
      rating: 5,
    },
    {
      id: 'marina',
      author: 'Marina',
      role: { ru: 'мама Лизы (5 лет)', en: "Lisa's mum (age 5)", lv: 'Lizas mamma (5 gadi)' },
      text: {
        ru: 'Дочка ходит с четырёх лет. Занятия в игровой форме, ребёнок бежит на тренировку с радостью. Очень благодарны за терпение к малышам.',
        en: "My daughter has attended since she was four. Classes are play-based and she runs to training happily. We are grateful for the patience with the little ones.",
        lv: 'Meita trenējas kopš četru gadu vecuma. Nodarbības ir rotaļu formā, un bērns uz treniņu skrien ar prieku. Ļoti pateicīgi par pacietību pret mazākajiem.',
      },
      rating: 5,
    },
    {
      id: 'dmitry',
      author: 'Dmitry',
      role: { ru: 'папа Марка (10 лет)', en: "Mark's dad (age 10)", lv: 'Marka tētis (10 gadi)' },
      text: {
        ru: 'Марк начал выступать на турнирах - у клуба серьёзная соревновательная подготовка. Расписание удобное, два зала рядом с домом.',
        en: "Mark has started competing - the club has serious competitive training. The schedule is convenient and the two halls are close to home.",
        lv: 'Marks sācis startēt turnīros - klubam ir nopietna sacensību sagatavošana. Ērts grafiks, abas zāles netālu no mājām.',
      },
      rating: 5,
    },
    {
      id: 'elena',
      author: 'Elena',
      role: { ru: '28 лет', en: '28 years old', lv: '28 gadi' },
      text: {
        ru: 'Искала спорт без скучных тренажёров - карате дало и нагрузку, и технику самообороны, и интерес. Новичкам здесь рады.',
        en: 'I wanted sport without boring gym machines - karate gives me a workout, self-defence skills and real interest. Beginners are welcome here.',
        lv: 'Meklēju sportu bez garlaicīgiem trenažieriem - karatē dod gan slodzi, gan pašaizsardzības tehniku, gan interesi. Iesācējiem šeit priecājas.',
      },
      rating: 5,
    },
  ] as Review[],

  trustTitle: {
    ru: 'Почему родители выбирают нас',
    en: 'Why parents choose us',
    lv: 'Kāpēc vecāki izvēlas mūs',
  } as Localized,

  trust: [
    {
      id: 'since-1984',
      text: {
        ru: 'Школа работает с 1984 года - более 40 лет карате в Риге',
        en: 'The school has run since 1984 - over 40 years of karate in Riga',
        lv: 'Skola darbojas kopš 1984. gada - vairāk nekā 40 gadus karatē Rīgā',
      },
    },
    {
      id: 'founder-8dan',
      text: {
        ru: 'Основатель клуба - 8 дан, одна из высших степеней в Латвии',
        en: 'The club founder holds 8th dan - one of the highest ranks in Latvia',
        lv: 'Kluba dibinātājam ir 8. dans - viena no augstākajām pakāpēm Latvijā',
      },
    },
    {
      id: 'halls-kengarags',
      text: {
        ru: 'Два зала в Кенгарагсе - рядом дом, школа и транспорт',
        en: 'Two halls in Ķengarags - close to home, school and transport',
        lv: 'Divas zāles Ķengaragā - tuvu mājām, skolai un transportam',
      },
    },
    {
      id: 'safety',
      text: {
        ru: 'Ученики застрахованы, спарринги - под контролем и в защите',
        en: 'Students are insured; sparring is controlled and with protective gear',
        lv: 'Audzēkņi ir apdrošināti; sparingi notiek kontrolēti un ar aizsargiem',
      },
    },
    {
      id: 'free-trial',
      text: {
        ru: 'Первая тренировка бесплатно - решение без обязательств',
        en: 'Free first class - decide with no commitment',
        lv: 'Pirmā nodarbība bez maksas - lēmums bez saistībām',
      },
    },
    {
      id: 'competitions',
      text: {
        ru: 'Ученики выступают на турнирах в Латвии и за рубежом - по желанию',
        en: 'Students compete in Latvia and abroad - always optional',
        lv: 'Audzēkņi startē turnīros Latvijā un ārzemēs - pēc vēlēšanās',
      },
    },
  ] as TrustItem[],

  social: {
    enabled: true,
    provider: 'facebook' as const,
    pageUrl: 'https://www.facebook.com/eurokaratedo',
    text: {
      ru: 'Все новости и фото клуба - в Facebook: свежие посты подтягиваются на сайт автоматически.',
      en: 'All club news and photos live on Facebook: recent posts appear on the site automatically.',
      lv: 'Visi kluba jaunumi un foto ir Facebook: jaunākie ieraksti mājaslapā parādās automātiski.',
    } as Localized,
    followLabels: {
      facebook: { ru: 'Подписаться в Facebook', en: 'Follow on Facebook', lv: 'Sekot Facebook' },
      instagram: { ru: 'Подписаться в Instagram', en: 'Follow on Instagram', lv: 'Sekot Instagram' },
      tiktok: { ru: 'Подписаться в TikTok', en: 'Follow on TikTok', lv: 'Sekot TikTok' },
    } as Record<'facebook' | 'instagram' | 'tiktok', Localized>,
    viewPostLabel: { ru: 'Смотреть в Facebook', en: 'View on Facebook', lv: 'Skatīt Facebook' } as Localized,
    prevLabel: { ru: 'Предыдущая карточка', en: 'Previous card', lv: 'Iepriekšējais ieraksts' } as Localized,
    nextLabel: { ru: 'Следующая карточка', en: 'Next card', lv: 'Nākamais ieraksts' } as Localized,
    posts: [
      /* Демо-карточки: автоматически заменяются реальными постами,
       * когда настроена синхронизация с Facebook (npm run sync:fb). */
      {
        id: 'demo-enrollment',
        date: '2026-09-14',
        text: 'Набор в группы открыт: дети с 4 лет и взрослые. Первая тренировка - бесплатно.',
        url: 'https://www.facebook.com/eurokaratedo',
      },
      {
        id: 'demo-halls',
        date: '2026-09-07',
        text: 'Занимаемся в двух залах в Кенгарагсе: Ikšķiles iela 6 и Latgales iela 322.',
        url: 'https://www.facebook.com/eurokaratedo',
      },
      {
        id: 'demo-trial',
        date: '2026-09-01',
        text: 'Приходите на пробную тренировку: удобная спортивная форма и бутылка воды - всё, что нужно для первого раза.',
        url: 'https://www.facebook.com/eurokaratedo',
      },
    ] as SocialPost[],
  },

  pricing: {
    trial: {
      title: { ru: 'Первая тренировка - бесплатно', en: 'First class - free', lv: 'Pirmā nodarbība - bez maksas' },
      text: {
        ru: 'Приходите на первую тренировку бесплатно - без обязательств, решение остаётся за вами.',
        en: 'Come to your first class free - no commitment, the decision is yours.',
        lv: 'Nāciet uz pirmo nodarbību bez maksas - bez saistībām, lēmums paliek jūsu ziņā.',
      },
    },
    // Группы набираются по возрасту и аудитории - так родителю проще узнать свою.
    groups: [
      {
        id: 'kids-4-6',
        name: { ru: 'Дети 4-6 лет', en: 'Kids 4-6', lv: 'Bērni 4-6 gadi' },
        audience: {
          ru: 'Самые маленькие: первые шаги в карате в игровой форме, без давления и перегрузок.',
          en: 'The youngest: first steps in karate in a playful way - no pressure, no overload.',
          lv: 'Paši mazākie: pirmie soļi karatē rotaļīgā veidā - bez spiediena un pārslodzes.',
        },
        schedule: { ru: '2-3 тренировки в неделю', en: '2-3 classes per week', lv: '2-3 treniņi nedēļā' },
        price: null,
        features: [
          { ru: 'Старт с нуля - опыт не нужен', en: 'Start from zero - no experience needed', lv: 'Sākums no nulles - pieredze nav vajadzīga' },
          { ru: 'Общая физподготовка и координация', en: 'General fitness and coordination', lv: 'Vispārējā sagatavotība un koordinācija' },
          { ru: 'Привыкаем к дисциплине в зале', en: 'Getting used to discipline in the hall', lv: 'Pierodam pie disciplīnas zālē' },
        ],
        highlighted: false,
      },
      {
        id: 'kids-7-12',
        name: { ru: 'Дети 7-12 лет', en: 'Children 7-12', lv: 'Bērni 7-12 gadi' },
        audience: {
          ru: 'Основная детская группа - и для тех, кто только начинает, и для тех, кто уже тренируется.',
          en: 'The main kids group - for those just starting out and for those already training.',
          lv: 'Galvenā bērnu grupa - gan tiem, kas tikko sāk, gan tiem, kas jau trenējas.',
        },
        schedule: { ru: '3 тренировки в неделю', en: '3 classes per week', lv: '3 treniņi nedēļā' },
        price: null,
        features: [
          { ru: 'Техника карате с нуля', en: 'Karate technique from zero', lv: 'Karatē tehnika no nulles' },
          { ru: 'Подготовка к экзаменам на пояса', en: 'Preparation for belt exams', lv: 'Sagatavošanās jostu eksāmeniem' },
          { ru: 'Первые соревнования - по желанию', en: 'First competitions - only if they want to', lv: 'Pirmās sacensības - tikai pēc vēlēšanās' },
        ],
        highlighted: true,
      },
      {
        id: 'teens-adults',
        name: { ru: 'Подростки и взрослые', en: 'Teens & adults', lv: 'Pusaudži un pieaugušie' },
        audience: {
          ru: 'Для подростков и взрослых с любым уровнем, включая соревновательную группу клуба.',
          en: 'For teens and adults of any level, including the competition squad.',
          lv: 'Pusaudžiem un pieaugušajiem ar jebkuru līmeni, ieskaitot kluba sacensību grupu.',
        },
        schedule: { ru: '3-5 тренировок в неделю', en: '3-5 classes per week', lv: '3-5 treniņi nedēļā' },
        price: null,
        features: [
          { ru: 'Начать можно в любом возрасте', en: 'You can start at any age', lv: 'Sākt var jebkurā vecumā' },
          { ru: 'Форма, выносливость и самооборона', en: 'Fitness, stamina and self-defence', lv: 'Forma, izturība un pašaizsardzība' },
          { ru: 'Подготовка к турнирам в Латвии и за рубежом', en: 'Preparation for tournaments in Latvia and abroad', lv: 'Sagatavošanās turnīriem Latvijā un ārzemēs' },
        ],
        highlighted: false,
      },
    ] as TrainingGroup[],
    // Метка на карточке группы, которая лучше всего подходит новичкам.
    beginnerLabel: { ru: 'Для начинающих', en: 'Beginner friendly', lv: 'Iesācējiem' } as Localized,
    priceOnRequest: { ru: 'Цена по телефону', en: 'Price on request', lv: 'Cena pa tālruni' } as Localized,
    callLabel: { ru: 'Позвонить', en: 'Call us', lv: 'Zvanīt' } as Localized,
    requestLabel: { ru: 'Оставить заявку', en: 'Leave a request', lv: 'Atstāt pieprasījumu' } as Localized,
    priceNote: {
      ru: 'Не знаете, какая группа подойдёт? Позвоните - подскажем и запишем на бесплатную первую тренировку.',
      en: 'Not sure which group fits? Call us - we will advise and book your free first class.',
      lv: 'Nezināt, kura grupa piemērota? Zvaniet - ieteiksim un pierakstīsim uz bezmaksas pirmo nodarbību.',
    } as Localized,
    cta: { ru: 'Записаться', en: 'Sign up', lv: 'Pieteikties' } as Localized,
    // Условия без непроверенных обещаний: спорные пункты заменены на «уточним при разговоре».
    terms: [
      {
        ru: 'Оплата помесячно - наличными или банковским переводом',
        en: 'Monthly payment - cash or bank transfer',
        lv: 'Apmaksa katru mēnesi - skaidrā naudā vai bankas pārskaitījumā',
      },
      {
        ru: 'Группу подбираем по возрасту и уровню подготовки',
        en: 'We place you in a group by age and level',
        lv: 'Grupu izvēlamies pēc vecuma un sagatavotības līmeņa',
      },
      {
        ru: 'Точные условия и расписание уточняем при разговоре',
        en: 'Exact terms and schedule are clarified when we talk',
        lv: 'Precīzus nosacījumus un grafiku precizējam sarunā',
      },
      {
        ru: 'Разовое занятие - уточняйте по телефону',
        en: 'Single class - ask by phone',
        lv: 'Vienreizēja nodarbība - jautājiet pa tālruni',
      },
    ] as Localized[],
  },

  faq: [
    {
      id: 'age',
      category: 'other',
      question: { ru: 'С какого возраста можно начинать?', en: 'What is the minimum age?', lv: 'No kāda vecuma var sākt?' },
      answer: {
        ru: 'С 4 лет. Для самых маленьких - игровая программа с ОФП.',
        en: 'From age 4. For the youngest there is a play-based program with general fitness.',
        lv: 'No 4 gadu vecuma. Mazākajiem - rotaļu programma ar vispārējo fizisko sagatavotību.',
      },
    },
    {
      id: 'gear',
      category: 'gear',
      question: { ru: 'Нужна ли специальная экипировка?', en: 'Do I need special equipment?', lv: 'Vai ir nepieciešams īpašs ekipējums?' },
      answer: {
        ru: 'На первых занятиях - удобная спортивная форма. Кимоно понадобится позже, подскажем, где купить.',
        en: "Comfortable sportswear for the first classes. A gi will be needed later - we'll advise where to get one.",
        lv: 'Pirmajās nodarbībās - ērts sporta apģērbs. Kimono būs vajadzīgs vēlāk - ieteiksim, kur iegādāties.',
      },
    },
    {
      id: 'missed',
      category: 'other',
      question: { ru: 'Что делать, если ребёнок пропустил тренировку?', en: 'What if a class is missed?', lv: 'Ko darīt, ja nodarbība tiek izlaista?' },
      answer: {
        ru: 'Предупредите тренера заранее - пропуск можно отработать в другой группе.',
        en: 'Let the coach know in advance - missed classes can be made up in another group.',
        lv: 'Iepriekš informējiet treneri - izlaisto nodarbību var atstrādāt citā grupā.',
      },
    },
    {
      id: 'safety',
      category: 'safety',
      question: { ru: 'Безопасно ли карате для детей?', en: 'Is karate safe for kids?', lv: 'Vai karatē ir droši bērniem?' },
      answer: {
        ru: 'Да: контролируемые спарринги, защитная экипировка, страховка учеников, тренеры сертифицированы.',
        en: 'Yes: controlled sparring, protective gear, athlete insurance, certified coaches.',
        lv: 'Jā: kontrolēti sparingi, aizsargekipējums, audzēkņu apdrošināšana, sertificēti treneri.',
      },
    },
    {
      id: 'competitions',
      category: 'other',
      question: { ru: 'Обязательно ли участвовать в соревнованиях?', en: 'Are competitions mandatory?', lv: 'Vai dalība sacensībās ir obligāta?' },
      answer: {
        ru: 'Нет. Соревнования - по желанию, есть отдельная соревновательная группа.',
        en: 'No. Competitions are optional; there is a separate competition group.',
        lv: 'Nē. Sacensības pēc vēlēšanās; ir atsevišķa sacensību grupa.',
      },
    },
    {
      id: 'shy-child',
      category: 'other',
      question: { ru: 'Подойдёт ли карате застенчивому или неспортивному ребёнку?', en: 'Will karate suit a shy or non-athletic child?', lv: 'Vai karatē piemērota kautrīgam vai nesportiskam bērnam?' },
      answer: {
        ru: 'Да: индивидуальный темп, поддержка тренера, постепенное включение в группу.',
        en: 'Yes: individual pace, coach support, gradual integration into the group.',
        lv: 'Jā: individuāls temps, trenera atbalsts, pakāpeniska iekļaušanās grupā.',
      },
    },
    {
      id: 'adult-start',
      category: 'other',
      question: { ru: 'Можно ли взрослому начать с нуля?', en: 'Can an adult start from zero?', lv: 'Vai pieaugušais var sākt no nulles?' },
      answer: {
        ru: 'Да, в любом возрасте. Есть отдельные группы для взрослых.',
        en: 'Yes, at any age. There are separate adult groups.',
        lv: 'Jā, jebkurā vecumā. Ir atsevišķas grupas pieaugušajiem.',
      },
    },
    {
      id: 'payment',
      category: 'payment',
      question: { ru: 'Как проходит оплата?', en: 'How does payment work?', lv: 'Kā notiek apmaksa?' },
      answer: {
        ru: 'Помесячно, наличными или банковским переводом. Точные условия уточняем при разговоре.',
        en: 'Monthly, by cash or bank transfer. We clarify the exact terms when we talk.',
        lv: 'Katru mēnesi, skaidrā naudā vai bankas pārskaitījumā. Precīzus nosacījumus precizējam sarunā.',
      },
    },
    {
      id: 'how-to-book',
      category: 'other',
      question: { ru: 'Как записаться на первую тренировку?', en: 'How to book your first class?', lv: 'Kā pieteikties pirmajai nodarbībai?' },
      answer: {
        ru: 'Оставьте заявку в форме на сайте или позвоните - подберём удобный зал и время.',
        en: "Leave a request in the form or call us - we'll find a convenient hall and time.",
        lv: 'Atstājiet pieprasījumu formā vai zvaniet - piemeklēsim ērtu zāli un laiku.',
      },
    },
  ] as FaqItem[],

  contacts: {
    phones: ['+371 29 172 572', '+371 29 757 753'],
    email: null as string | null,
    /**
     * WhatsApp: кнопка «Написать в WhatsApp» открывает чат с уже готовым текстом.
     * ВАЖНО: указать номер, на котором у клуба действительно есть WhatsApp.
     */
    whatsapp: '+371 29 172 572',
    whatsappLabel: {
      ru: 'Написать в WhatsApp',
      en: 'Message us on WhatsApp',
      lv: 'Rakstīt WhatsApp',
    } as Localized,
    /** Короткая подпись (название бренда не переводится) - для тесных кнопок на телефоне. */
    whatsappLabelShort: {
      ru: 'WhatsApp',
      en: 'WhatsApp',
      lv: 'WhatsApp',
    } as Localized,
    whatsappMessage: {
      ru: 'Здравствуйте! Хочу записаться на бесплатную пробную тренировку.',
      en: "Hello! I'd like to book a free trial class.",
      lv: 'Sveiki! Vēlos pieteikties izmēģinājuma nodarbībai.',
    } as Localized,
    socials: [
      { name: 'facebook', url: 'https://www.facebook.com/eurokaratedo' },
      { name: 'instagram', url: 'https://www.instagram.com/vasilyev_karate' },
      { name: 'tiktok', url: 'https://www.tiktok.com/@eurokarate' },
    ] as Social[],
    addresses: [
      {
        label: { ru: 'Зал 1', en: 'Hall 1', lv: '1. zāle' },
        address: 'Ikšķiles iela 6, Rīgas 72. vidusskola (малый спортзал, 3-й этаж), LV-1057',
      },
      {
        label: { ru: 'Зал 2', en: 'Hall 2', lv: '2. zāle' },
        address: 'Latgales iela 322, Rīga, LV-1057',
      },
    ] as HallAddress[],
  },

  seoBlock: {
    title: {
      ru: 'Карате в Риге и Кенгарагсе - для детей и взрослых',
      en: 'Karate in Riga and Ķengarags - for children and adults',
      lv: 'Karatē Rīgā un Ķengaragā - bērniem un pieaugušajiem',
    },
    paragraphs: [
      {
        ru: 'Vasilyev Karate Club работает в Риге с 1984 года. Мы обучаем детей с 4 лет, подростков и взрослых - независимо от уровня подготовки. Занятия проходят в двух залах в Кенгарагсе: в школе на Ikšķiles iela 6 и на Latgales iela 322, куда удобно добираться из центра и других районов Риги.',
        en: 'Vasilyev Karate Club has been teaching in Riga since 1984. We train children from the age of 4, teenagers and adults - regardless of previous experience. Classes take place in two halls in Ķengarags: at Ikšķiles iela 6 and Latgales iela 322, both easy to reach from the centre and other districts of Riga.',
        lv: 'Vasiljeva karatē klubs Rīgā strādā kopš 1984. gada. Mēs apmācām bērnus no 4 gadu vecuma, pusaudžus un pieaugušos - neatkarīgi no iepriekšējas pieredzes. Nodarbības notiek divās zālēs Ķengaragā: Ikšķiles ielā 6 un Latgales ielā 322, kur ērti nokļūt no centra un citiem Rīgas rajoniem.',
      },
      {
        ru: 'Если вы ищете карате в Риге для ребёнка, обратите внимание: в наших группах дети получают не только физическую нагрузку, но и привычку к дисциплине, умение концентрироваться и уверенность в себе. Тренировки построены по возрасту: для малышей - игровая форма, для школьников - базовая техника, ката и первые соревнования.',
        en: 'If you are looking for karate in Riga for a child, note that our groups build not only fitness but also discipline, concentration and self-confidence. Training is adapted to age: play-based classes for the youngest, basic technique, kata and first competitions for schoolchildren.',
        lv: 'Ja meklējat karatē Rīgā bērnam, ņemiet vērā: mūsu grupās bērni iegūst ne tikai fizisko sagatavotību, bet arī disciplīnu, spēju koncentrēties un pašapziņu. Treniņi tiek pielāgoti vecumam: mazākajiem - rotaļu forma, skolēniem - pamattehnika, kata un pirmās sacensības.',
      },
      {
        ru: 'Для взрослых карате - это способ поддерживать форму, снять стресс и освоить практичные навыки самообороны. Начать можно с нуля в любом возрасте: тренеры подбирают нагрузку индивидуально, а участие в турнирах и сборах всегда по желанию. Первая тренировка бесплатная - приходите и попробуйте.',
        en: 'For adults, karate is a way to stay in shape, release stress and learn practical self-defence. You can start from zero at any age: coaches adjust the load individually, and competitions and camps are always optional. The first class is free - come and try it.',
        lv: 'Pieaugušajiem karatē ir veids, kā uzturēt formu, mazināt stresu un apgūt praktiskas pašaizsardzības iemaņas. Sākt var no nulles jebkurā vecumā: treneri pielāgo slodzi individuāli, un dalība turnīros un nometnēs vienmēr ir pēc vēlēšanās. Pirmā nodarbība ir bez maksas - nāciet un pamēģiniet.',
      },
    ],
  } as SeoBlockContent,

  form: {
    title: { ru: 'Оставьте заявку', en: 'Leave a request', lv: 'Atstājiet pieprasījumu' } as Localized,
    /**
     * Ключ Web3Forms (бесплатный релей «форма → письмо»): вписывает владелец.
     * Получить: web3forms.com → ввести email администратора → подтвердить ссылку из письма.
     * Ключ не секретный - он лишь указывает, на какой ящик отправлять заявки.
     * null = релей выключен, работают фолбэки (mailto или ошибка с телефоном).
     */
    accessKey: null as string | null,
    /** Что нужно знать перед пробной тренировкой - показываем рядом с формой. */
    trialInfo: {
      title: { ru: 'Пробная тренировка', en: 'Trial class', lv: 'Izmēģinājuma nodarbība' },
      forWhom: {
        ru: 'Для детей с 4 лет и взрослых любого уровня - приходить можно с нуля.',
        en: 'For children from age 4 and adults of any level - beginners are welcome.',
        lv: 'Bērniem no 4 gadu vecuma un pieaugušajiem jebkurā līmenī - var sākt no nulles.',
      },
      replyTime: {
        ru: 'Отвечаем в течение дня, обычно за пару часов - позвоним или напишем в WhatsApp.',
        en: 'We reply within a day, usually within a couple of hours - by phone or WhatsApp.',
        lv: 'Atbildam dienas laikā, parasti pāris stundu laikā - pa tālruni vai WhatsApp.',
      },
      whatToBringTitle: {
        ru: 'Что взять на первую тренировку',
        en: 'What to bring to your first class',
        lv: 'Ko ņemt līdzi uz pirmo nodarbību',
      },
      whatToBring: [
        {
          ru: 'Удобная спортивная форма - футболка и штаны',
          en: 'Comfortable sportswear - a t-shirt and trousers',
          lv: 'Ērts sporta apģērbs - t-krekls un bikses',
        },
        {
          ru: 'Кроксы или сланцы для зала и бутылка воды',
          en: 'Crocs or sandals for indoors, and a bottle of water',
          lv: 'Kroksi vai sandales zālei un ūdens pudele',
        },
        {
          ru: 'Кимоно понадобится позже - подскажем, где купить',
          en: 'A gi is needed later - we will advise where to buy one',
          lv: 'Kimono būs vajadzīgs vēlāk - ieteiksim, kur iegādāties',
        },
      ],
    } as TrialInfo,
    name: { ru: 'Имя', en: 'Name', lv: 'Vārds' } as Localized,
    phone: { ru: 'Телефон', en: 'Phone', lv: 'Tālrunis' } as Localized,
    phonePlaceholder: { ru: '+371 ...', en: '+371 ...', lv: '+371 ...' } as Localized,
    /* Возраст спрашиваем свободным полем - группу тренеры подберут сами. */
    age: { ru: 'Возраст ребёнка', en: "Child's age", lv: 'Bērna vecums' } as Localized,
    agePlaceholder: { ru: 'Например, 7', en: 'e.g. 7', lv: 'Piemēram, 7' } as Localized,
    ageHint: {
      ru: 'Если будет заниматься взрослый - напишите свой возраст.',
      en: 'If an adult is joining, just enter your own age.',
      lv: 'Ja trenēsies pieaugušais - ierakstiet savu vecumu.',
    } as Localized,
    comment: { ru: 'Комментарий', en: 'Comment', lv: 'Komentārs' } as Localized,
    commentPlaceholder: { ru: 'Вопросы, удобное время...', en: 'Questions, preferred time...', lv: 'Jautājumi, ērts laiks...' } as Localized,
    submit: { ru: 'Отправить заявку', en: 'Send request', lv: 'Nosūtīt pieprasījumu' } as Localized,
    sending: { ru: 'Отправляем…', en: 'Sending…', lv: 'Nosūta…' } as Localized,
    error: {
      ru: 'Не удалось отправить заявку. Позвоните нам или попробуйте ещё раз.',
      en: 'Failed to send. Please call us or try again.',
      lv: 'Neizdevās nosūtīt. Zvaniet mums vai mēģiniet vēlreiz.',
    } as Localized,
    successTitle: { ru: 'Заявка отправлена!', en: 'Request sent!', lv: 'Pieprasījums nosūtīts!' } as Localized,
    successText: {
      ru: 'Спасибо! Мы свяжемся с вами в течение дня и подберём удобное время для пробного занятия.',
      en: 'Thank you! We will contact you within a day to arrange a convenient trial class.',
      lv: 'Paldies! Sazināsimies ar jums dienas laikā un piemeklēsim ērtu laiku izmēģinājuma nodarbībai.',
    } as Localized,
  },
}

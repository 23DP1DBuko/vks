import type {
  Achievement,
  Advantage,
  Coach,
  DayKey,
  FaqItem,
  Hall,
  HallAddress,
  Localized,
  Plan,
  Program,
  ProgramTag,
  Review,
  Social,
  Stat,
} from './types'

export const LANGS = ['ru', 'en', 'lv'] as const

export const NAV: { id: string; label: Localized }[] = [
  { id: 'why', label: { ru: 'Почему мы', en: 'Why us', lv: 'Kāpēc mēs' } },
  { id: 'programs', label: { ru: 'Программы', en: 'Programs', lv: 'Programmas' } },
  { id: 'halls', label: { ru: 'Залы', en: 'Halls', lv: 'Zāles' } },
  { id: 'coaches', label: { ru: 'Тренеры', en: 'Coaches', lv: 'Treneri' } },
  { id: 'pricing', label: { ru: 'Цены', en: 'Pricing', lv: 'Cenas' } },
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
    kicker: { ru: '02 · Группы', en: '02 · Groups', lv: '02 · Grupas' },
    title: { ru: 'Программы и возрастные группы', en: 'Programs & age groups', lv: 'Programmas un vecuma grupas' },
    subtitle: {
      ru: 'Заниматься можно с 4 лет - от игровых тренировок для малышей до соревновательной группы.',
      en: 'Train from age 4 - from play-based classes for little ones to a competition group.',
      lv: 'Trenēties var no 4 gadu vecuma - no rotaļu nodarbībām mazākajiem līdz sacensību grupai.',
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
      ru: 'Занятия ведут мастера с высшими степенями и сертифицированные тренеры.',
      en: 'Classes are led by masters with the highest ranks and certified coaches.',
      lv: 'Nodarbības vada meistari ar augstākajām pakāpēm un sertificēti treneri.',
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
      ru: 'Свежие новости, фото и видео - прямо из наших соцсетей.',
      en: 'Latest news, photos and videos - straight from our social media.',
      lv: 'Jaunākās ziņas, fotogrāfijas un video - tieši no mūsu sociālajiem tīkliem.',
    },
    // замечание: заголовки секций social/pricing/faq/contacts переопределены ниже в content
  },
  pricing: {
    kicker: { ru: '08 · Тарифы', en: '08 · Pricing', lv: '08 · Cenas' },
    title: { ru: 'Стоимость и условия', en: 'Pricing & terms', lv: 'Cenas un nosacījumi' },
    subtitle: {
      ru: 'Первая тренировка - бесплатно. Начните без обязательств, а стоимость подскажем по телефону.',
      en: 'Your first class is free - start with no commitment; the price is one phone call away.',
      lv: 'Pirmā nodarbība - bez maksas. Sāciet bez saistībām, cenu pateiksim pa tālruni.',
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
    clubName: {
      ru: 'Vasilyev Karate Club',
      en: 'Vasilyev Karate Club',
      lv: 'Vasiljeva karatē klubs',
    } as Localized,
    tagline: { ru: 'Карате в Риге с 1984 года', en: 'Karate in Riga since 1984', lv: 'Karatē Rīgā kopš 1984. gada' } as Localized,
    meta: {
      title: {
        ru: 'Vasilyev Karate Club - Карате в Риге с 1984 года',
        en: 'Vasilyev Karate Club - Karate in Riga since 1984',
        lv: 'Vasiljeva karatē klubs - Karatē Rīgā kopš 1984. gada',
      },
      description: {
        ru: 'Карате для детей с 4 лет и взрослых в Риге. Два зала, первая тренировка бесплатно, тренеры 8 дан и 5 дан.',
        en: 'Karate for kids from age 4 and adults in Riga. Two halls, a free first class, coaches with 8th and 5th dan.',
        lv: 'Karatē bērniem no 4 gadu vecuma un pieaugušajiem Rīgā. Divas zāles, pirmā nodarbība bez maksas, treneri ar 8. un 5. danu.',
      },
    },
  },

  hero: {
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
    ctaShort: {
      ru: 'Первая тренировка',
      en: 'First class',
      lv: 'Pirmā nodarbība',
    } as Localized,
    stats: [
      { value: 1984, suffix: '', label: { ru: 'год основания', en: 'founded', lv: 'dibināts' } },
      { value: 8, suffix: ' дан', label: { ru: 'высшая степень тренера', en: 'highest coach rank', lv: 'augstākā trenera pakāpe' } },
      { value: 2, suffix: '', label: { ru: 'зала в Риге', en: 'halls in Riga', lv: 'zāles Rīgā' } },
      { value: 4, suffix: '+', label: { ru: 'лет - приём с 4 лет', en: 'years - start at 4', lv: 'gadi - sākums no 4' } },
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
      duration: { ru: '45 мин', en: '45 min', lv: '45 min' },
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
    {
      id: 'competition',
      ageGroup: 'по возрасту',
      title: { ru: 'Соревновательная группа', en: 'Competition group', lv: 'Sacensību grupa' },
      description: {
        ru: 'Для тех, кто хочет выступать: интенсивные тренировки, сборы и лагеря.',
        en: 'For those who want to compete: intensive training, camps and training sessions.',
        lv: 'Tiem, kas vēlas startēt: intensīvi treniņi, nometnes un treniņsalidojumi.',
      },
      sessions: { ru: '3-5 раз в неделю + сборы', en: '3-5× per week + camps', lv: '3-5× nedēļā + nometnes' },
      tag: 'competition',
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
    },
  ] as Hall[],

  coaches: [
    {
      id: 'leonid',
      name: 'Leonids Vasiļjevs',
      dan: 8,
      description: {
        ru: 'Основатель клуба, в карате более 40 лет. Ведёт соревновательную группу, готовит спортсменов к турнирам Латвии и международным стартам.',
        en: 'Founder of the club, over 40 years in karate. Leads the competition group, prepares athletes for Latvian and international tournaments.',
        lv: 'Kluba dibinātājs, karatē vairāk nekā 40 gadus. Vada sacensību grupu, gatavo sportistus Latvijas un starptautiskiem turnīriem.',
      },
      specialty: {
        ru: 'Ката, кумите, подготовка спортсменов высокого уровня',
        en: 'Kata, kumite, high-level athlete development',
        lv: 'Kata, kumite, augsta līmeņa sportistu sagatavošana',
      },
    },
    {
      id: 'zhanna',
      name: 'Žanna Vasiļjeva',
      dan: 5,
      description: {
        ru: 'Сертифицированный тренер Латвийской федерации карате. Специализация: детские группы с 4 лет, начальная подготовка, работа с новичками.',
        en: 'Certified coach of the Latvian Karate Federation. Specialisation: kids’ groups from age 4, beginner training.',
        lv: 'Sertificēta Latvijas Karatē federācijas trenere. Specializācija: bērnu grupas no 4 gadu vecuma, iesācēju sagatavošana.',
      },
      specialty: {
        ru: 'Детские группы, начальная подготовка',
        en: 'Kids’ groups, beginner training',
        lv: 'Bērnu grupas, iesācēju sagatavošana',
      },
      certificate: { category: 'C', number: '2622', validUntil: '2025-11-11' },
    },
    {
      id: 'diana',
      name: 'Diana Tokare',
      dan: 2,
      description: {
        ru: 'Тренер клуба, 2 дан. Специализация: детские группы, общая физическая подготовка, подготовка к экзаменам на пояса.',
        en: 'Club coach, 2nd dan. Specialisation: kids’ groups, general fitness, belt exam preparation.',
        lv: 'Kluba trenere, 2. dans. Specializācija: bērnu grupas, vispārējā fiziskā sagatavotība, sagatavošanās jostu eksāmeniem.',
      },
      specialty: {
        ru: 'Детские группы, ОФП, пояса',
        en: 'Kids’ groups, general fitness, belts',
        lv: 'Bērnu grupas, vispārējā sagatavotība, jostas',
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

  social: {
    enabled: true,
    provider: 'facebook' as const,
    pageUrl: 'https://www.facebook.com/eurokaratedo',
    text: {
      ru: 'Мы регулярно публикуем фото и видео тренировок, турниров и мероприятий. Листайте ленту или подписывайтесь - будьте в курсе жизни клуба.',
      en: 'We regularly share photos and videos of training, tournaments and events. Scroll the feed or follow us to keep up with club life.',
      lv: 'Regulāri publicējam treniņu, turnīru un pasākumu fotogrāfijas un video. Šķirstiet lenti vai sekojiet mums, lai būtu lietas kursā.',
    } as Localized,
    followLabels: {
      facebook: { ru: 'Подписаться в Facebook', en: 'Follow on Facebook', lv: 'Sekot Facebook' },
      instagram: { ru: 'Подписаться в Instagram', en: 'Follow on Instagram', lv: 'Sekot Instagram' },
      tiktok: { ru: 'Подписаться в TikTok', en: 'Follow on TikTok', lv: 'Sekot TikTok' },
    } as Record<'facebook' | 'instagram' | 'tiktok', Localized>,
    loadLabel: { ru: 'Загрузить ленту', en: 'Load the feed', lv: 'Ielādēt lenti' } as Localized,
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
    plans: [
      {
        id: 'start',
        name: { ru: 'Старт', en: 'Start', lv: 'Starta' },
        price: null,
        sessions: { ru: '2 раза в неделю', en: '2× per week', lv: '2× nedēļā' },
        features: [
          { ru: '8 тренировок в месяц', en: '8 sessions per month', lv: '8 treniņi mēnesī' },
          { ru: 'Удобно для знакомства с карате', en: 'Great for trying karate', lv: 'Ērti karatē iepazīšanai' },
        ],
        highlighted: false,
      },
      {
        id: 'standard',
        name: { ru: 'Стандарт', en: 'Standard', lv: 'Standarta' },
        price: null,
        sessions: { ru: '3 раза в неделю', en: '3× per week', lv: '3× nedēļā' },
        features: [
          { ru: '12 тренировок в месяц', en: '12 sessions per month', lv: '12 treniņi mēnesī' },
          { ru: 'Стабильный прогресс', en: 'Steady progress', lv: 'Stabils progress' },
          { ru: 'Любые группы по возрасту', en: 'Any age group', lv: 'Jebkura vecuma grupa' },
        ],
        highlighted: true,
      },
      {
        id: 'competition',
        name: { ru: 'Соревновательная', en: 'Competition', lv: 'Sacensību' },
        price: null,
        sessions: { ru: '3-5 раз в неделю + сборы', en: '3-5× per week + camps', lv: '3-5× nedēļā + nometnes' },
        features: [
          { ru: 'Интенсивные тренировки', en: 'Intensive training', lv: 'Intensīvi treniņi' },
          { ru: 'Сборы и лагеря', en: 'Camps and training sessions', lv: 'Nometnes un treniņsalidojumi' },
          { ru: 'Подготовка к турнирам', en: 'Tournament preparation', lv: 'Sagatavošanās turnīriem' },
        ],
        highlighted: false,
      },
    ] as Plan[],
    popularLabel: { ru: 'Популярный', en: 'Most popular', lv: 'Populārākais' } as Localized,
    priceOnRequest: { ru: 'Цена по телефону', en: 'Price on request', lv: 'Cena pa tālruni' } as Localized,
    callLabel: { ru: 'Позвонить', en: 'Call us', lv: 'Zvanīt' } as Localized,
    priceNote: {
      ru: 'Точную стоимость подскажем по телефону - позвоните или оставьте заявку.',
      en: 'We will tell you the exact price by phone - call us or leave a request.',
      lv: 'Precīzu cenu pateiksim pa tālruni - zvaniet vai atstājiet pieprasījumu.',
    } as Localized,
    cta: { ru: 'Записаться', en: 'Sign up', lv: 'Pieteikties' } as Localized,
    terms: [
      {
        ru: 'Оплата помесячно - наличными или банковским переводом',
        en: 'Monthly payment - cash or bank transfer',
        lv: 'Apmaksa katru mēnesi - skaidrā naudā vai bankas pārskaitījumā',
      },
      {
        ru: 'Скидка 10% на второго ребёнка из семьи',
        en: '10% discount for a second child from the same family',
        lv: '10% atlaide otrajam bērnam no ģimenes',
      },
      {
        ru: 'Заморозка абонемента на время болезни или отпуска',
        en: 'Membership freeze during illness or holidays',
        lv: 'Abonementa apturēšana slimības vai atvaļinājuma laikā',
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
        ru: 'Помесячно, наличными или банковским переводом; есть заморозка на время болезни или отпуска.',
        en: 'Monthly, by cash or bank transfer; freezing is available for illness or holidays.',
        lv: 'Katru mēnesi, skaidrā naudā vai bankas pārskaitījumā; iespējama abonementa apturēšana slimības vai atvaļinājuma laikā.',
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
    cta: {
      ru: 'Напишите нам или оставьте заявку - мы ответим в течение дня.',
      en: 'Write to us or leave a request - we will reply within a day.',
      lv: 'Rakstiet mums vai atstājiet pieprasījumu - atbildēsim dienas laikā.',
    } as Localized,
  },

  form: {
    title: { ru: 'Оставьте заявку', en: 'Leave a request', lv: 'Atstājiet pieprasījumu' } as Localized,
    /** URL сервиса приёма заявок (например, EmailOctopus form endpoint). null = фолбэк на mailto. */
    endpoint: null as string | null,
    name: { ru: 'Имя', en: 'Name', lv: 'Vārds' } as Localized,
    phone: { ru: 'Телефон', en: 'Phone', lv: 'Tālrunis' } as Localized,
    phonePlaceholder: { ru: '+371 ...', en: '+371 ...', lv: '+371 ...' } as Localized,
    audience: { ru: 'Кто будет заниматься?', en: 'Who will train?', lv: 'Kas trenēsies?' } as Localized,
    audienceOptions: [
      { ru: 'Ребёнок 4-6 лет', en: 'Child 4-6', lv: 'Bērns 4-6 gadi' },
      { ru: 'Ребёнок 7-12 лет', en: 'Child 7-12', lv: 'Bērns 7-12 gadi' },
      { ru: 'Подросток 13-16 лет', en: 'Teen 13-16', lv: 'Pusaudzis 13-16 gadi' },
      { ru: 'Взрослый', en: 'Adult', lv: 'Pieaugušais' },
    ] as Localized[],
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

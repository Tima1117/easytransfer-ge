export type Lang = "en" | "ru" | "ka";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "ka", label: "ქა" },
];

type ServiceItem = { title: string; desc: string; tag: string };
type FleetItem = { name: string; cls: string; seats: string; bags: string };
type StatItem = { value: string; label: string };

export type Dictionary = {
  nav: {
    services: string;
    about: string;
    reviews: string;
    gallery: string;
    contact: string;
    book: string;
  };
  hero: {
    eyebrow: string;
    words: string[];
    headlinePrefix: string;
    headlineSuffix: string;
    hook: string;
    cta: string;
    ctaSecondary: string;
    stats: { rating: string; hours: string; fleet: string };
    scrollHint: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    stats: StatItem[];
    languagesLabel: string;
    languages: string[];
    fleetLabel: string;
    fleet: FleetItem[];
    routesLabel: string;
    routes: string[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badge: string;
    ctaLabel: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    hoursLabel: string;
    hoursValue: string;
    phoneLabel: string;
    form: {
      from: string;
      to: string;
      date: string;
      name: string;
      phone: string;
      comment: string;
      commentPlaceholder: string;
      submit: string;
      selectPlaceholder: string;
      passengers: string;
    };
    note: string;
    callCta: string;
    routeCta: string;
  };
  footer: {
    tagline: string;
    rights: string;
    credits: string;
  };
};

const CITIES_EN = [
  "Batumi",
  "Tbilisi",
  "Kutaisi",
  "Batumi Airport",
  "Tbilisi Airport",
  "Kutaisi Airport",
  "Trabzon",
  "Rize",
];
const CITIES_RU = [
  "Батуми",
  "Тбилиси",
  "Кутаиси",
  "Аэропорт Батуми",
  "Аэропорт Тбилиси",
  "Аэропорт Кутаиси",
  "Трабзон",
  "Ризе",
];
const CITIES_KA = [
  "ბათუმი",
  "თბილისი",
  "ქუთაისი",
  "ბათუმის აეროპორტი",
  "თბილისის აეროპორტი",
  "ქუთაისის აეროპორტი",
  "თრაბზონი",
  "რიზე",
];

export const CITY_OPTIONS: Record<Lang, string[]> = {
  en: CITIES_EN,
  ru: CITIES_RU,
  ka: CITIES_KA,
};

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      reviews: "Reviews",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book now",
    },
    hero: {
      eyebrow: "Batumi · Tbilisi · Kutaisi · all of Georgia",
      words: ["Batumi", "Tbilisi", "Svaneti", "Kazbegi", "Borjomi", "Kakheti"],
      headlinePrefix: "Easy transfer to",
      headlineSuffix: "No haggling. No waiting at the curb.",
      hook: "Just a driver with your name on a sign — and the whole of Georgia ahead.",
      cta: "Book on WhatsApp",
      ctaSecondary: "See how it works",
      stats: {
        rating: "4.9 on Google",
        hours: "Open 24/7",
        fleet: "Lexus RX · V-Class · Sprinter",
      },
      scrollHint: "Scroll",
    },
    services: {
      eyebrow: "Services",
      title: "One call covers the whole trip",
      subtitle:
        "From the moment you land to the moment you reach the door — we handle it.",
      items: [
        {
          title: "Airport pickup",
          desc: "Batumi, Tbilisi and Kutaisi airports. We track your flight, so a delay never leaves you waiting outside.",
          tag: "Meet & greet",
        },
        {
          title: "City-to-city transfer",
          desc: "Door-to-door between any two cities in Georgia, on your schedule, for one fixed price with no surprises.",
          tag: "Fixed price",
        },
        {
          title: "VIP chauffeur",
          desc: "A discreet, professional driver for business trips and VIP guests — on call around the clock.",
          tag: "24/7 on call",
        },
        {
          title: "Excursions with a driver-guide",
          desc: "One-day and multi-day tours across Adjara, Svaneti, Kakheti and beyond, with a local behind the wheel.",
          tag: "Driver-guide",
        },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "A family business you can trust with the road",
      body: "EasyTransfer Georgia is a women-owned transfer company based in Batumi, on the road every day since our very first pickup. Our drivers speak Georgian, Russian and English, know every pass and shortcut in the country, and treat every trip — an airport run or a three-day tour — the same way: calmly, on time, and without surprises.",
      stats: [
        { value: "4.9★", label: "Google rating" },
        { value: "56+", label: "reviews" },
        { value: "24/7", label: "on the road" },
        { value: "3", label: "languages spoken" },
      ],
      languagesLabel: "Our drivers speak",
      languages: ["Georgian", "Russian", "English"],
      fleetLabel: "The fleet",
      fleet: [
        { name: "Lexus RX", cls: "Premium", seats: "1–4 passengers", bags: "3 bags" },
        { name: "Mercedes-Benz V-Class", cls: "VIP minivan", seats: "1–7 passengers", bags: "7 bags" },
        { name: "Mercedes-Benz Sprinter", cls: "Group", seats: "1–17 passengers", bags: "16 bags" },
      ],
      routesLabel: "Popular routes",
      routes: [
        "Batumi ↔ Tbilisi",
        "Kutaisi ↔ Batumi",
        "Tbilisi ↔ Kutaisi",
        "Batumi → Trabzon",
        "Batumi → Rize",
      ],
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What our guests say",
      subtitle: "4.9 out of 5 on Google — real trips, real guests.",
      badge: "Google reviews",
      ctaLabel: "All reviews on Google",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Where we take you",
      subtitle:
        "A few of the places our guests reach on a transfer or an excursion.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Book your transfer",
      subtitle: "Tell us where and when — we reply in minutes, 24/7.",
      addressLabel: "Address",
      hoursLabel: "Working hours",
      hoursValue: "Open 24 hours",
      phoneLabel: "Phone / WhatsApp",
      form: {
        from: "From",
        to: "To",
        date: "Date & time",
        name: "Full name",
        phone: "Phone / WhatsApp",
        comment: "Comment (optional)",
        commentPlaceholder: "Flight number, number of passengers, child seat…",
        submit: "Send to WhatsApp",
        selectPlaceholder: "Choose a city",
        passengers: "Passengers",
      },
      note: "No prepayment — the booking is confirmed once we reply on WhatsApp.",
      callCta: "Call",
      routeCta: "Directions",
    },
    footer: {
      tagline: "Premium transfers and tours across Georgia, available 24/7.",
      rights: "© 2026 EasyTransfer Georgia. All rights reserved.",
      credits: "Destination photos: Wikimedia Commons, free licenses (CC BY / CC BY-SA / CC0).",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      about: "О нас",
      reviews: "Отзывы",
      gallery: "Галерея",
      contact: "Контакты",
      book: "Забронировать",
    },
    hero: {
      eyebrow: "Батуми · Тбилиси · Кутаиси · вся Грузия",
      words: ["Батуми", "Тбилиси", "Сванети", "Казбеги", "Боржоми", "Кахетия"],
      headlinePrefix: "Лёгкий трансфер в",
      headlineSuffix: "Без торга и без ожидания на бордюре.",
      hook: "Просто водитель с табличкой — и вся Грузия впереди.",
      cta: "Забронировать в WhatsApp",
      ctaSecondary: "Как это работает",
      stats: {
        rating: "4.9 в Google",
        hours: "Работаем 24/7",
        fleet: "Lexus RX · V-Class · Sprinter",
      },
      scrollHint: "Листайте",
    },
    services: {
      eyebrow: "Услуги",
      title: "Один звонок закрывает всю поездку",
      subtitle:
        "С момента посадки самолёта до двери отеля — обо всём позаботимся мы.",
      items: [
        {
          title: "Трансфер из аэропорта",
          desc: "Аэропорты Батуми, Тбилиси и Кутаиси. Следим за рейсом — задержка не оставит вас ждать снаружи.",
          tag: "Встреча с табличкой",
        },
        {
          title: "Трансфер между городами",
          desc: "Из точки в точку по всей Грузии, в удобное вам время, по одной фиксированной цене без сюрпризов.",
          tag: "Фиксированная цена",
        },
        {
          title: "VIP-шофёр",
          desc: "Сдержанный профессиональный водитель для деловых поездок и VIP-гостей — на связи круглосуточно.",
          tag: "24/7 на связи",
        },
        {
          title: "Экскурсии с водителем-гидом",
          desc: "Одно- и многодневные туры по Аджарии, Сванети, Кахетии и другим регионам с местным гидом за рулём.",
          tag: "Водитель-гид",
        },
      ],
    },
    about: {
      eyebrow: "О нас",
      title: "Семейный бизнес, которому можно доверить дорогу",
      body: "EasyTransfer Georgia — трансферная компания из Батуми, которой управляет женщина-предприниматель. Мы в дороге каждый день с самой первой поездки. Наши водители говорят на грузинском, русском и английском, знают каждый перевал и короткий путь — и к любой поездке, будь то трансфер из аэропорта или тур на три дня, относятся одинаково: спокойно, вовремя и без сюрпризов.",
      stats: [
        { value: "4.9★", label: "рейтинг Google" },
        { value: "56+", label: "отзывов" },
        { value: "24/7", label: "на дороге" },
        { value: "3", label: "языка у водителей" },
      ],
      languagesLabel: "Наши водители говорят",
      languages: ["Грузинский", "Русский", "Английский"],
      fleetLabel: "Автопарк",
      fleet: [
        { name: "Lexus RX", cls: "Премиум", seats: "1–4 пассажира", bags: "3 чемодана" },
        { name: "Mercedes-Benz V-Class", cls: "VIP-минивэн", seats: "1–7 пассажиров", bags: "7 чемоданов" },
        { name: "Mercedes-Benz Sprinter", cls: "Групповой", seats: "1–17 пассажиров", bags: "16 чемоданов" },
      ],
      routesLabel: "Популярные маршруты",
      routes: [
        "Батуми ↔ Тбилиси",
        "Кутаиси ↔ Батуми",
        "Тбилиси ↔ Кутаиси",
        "Батуми → Трабзон",
        "Батуми → Ризе",
      ],
    },
    reviews: {
      eyebrow: "Отзывы",
      title: "Что говорят наши гости",
      subtitle: "4.9 из 5 на Google — реальные поездки, реальные гости.",
      badge: "Отзывы Google",
      ctaLabel: "Все отзывы на Google",
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Куда мы отвозим",
      subtitle: "Несколько мест, куда гости добираются на трансфере или экскурсии.",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Забронируйте трансфер",
      subtitle: "Скажите куда и когда — ответим за несколько минут, круглосуточно.",
      addressLabel: "Адрес",
      hoursLabel: "Часы работы",
      hoursValue: "Круглосуточно",
      phoneLabel: "Телефон / WhatsApp",
      form: {
        from: "Откуда",
        to: "Куда",
        date: "Дата и время",
        name: "Имя и фамилия",
        phone: "Телефон / WhatsApp",
        comment: "Комментарий (необязательно)",
        commentPlaceholder: "Номер рейса, число пассажиров, детское кресло…",
        submit: "Отправить в WhatsApp",
        selectPlaceholder: "Выберите город",
        passengers: "Пассажиров",
      },
      note: "Без предоплаты — бронь подтверждается ответом в WhatsApp.",
      callCta: "Позвонить",
      routeCta: "Маршрут",
    },
    footer: {
      tagline: "Премиальные трансферы и туры по Грузии, доступны 24/7.",
      rights: "© 2026 EasyTransfer Georgia. Все права защищены.",
      credits: "Фото достопримечательностей: Wikimedia Commons, свободные лицензии (CC BY / CC BY-SA / CC0).",
    },
  },
  ka: {
    nav: {
      services: "სერვისები",
      about: "ჩვენ შესახებ",
      reviews: "შეფასებები",
      gallery: "გალერეა",
      contact: "კონტაქტი",
      book: "დაჯავშნა",
    },
    hero: {
      eyebrow: "ბათუმი · თბილისი · ქუთაისი · მთელი საქართველო",
      words: ["ბათუმი", "თბილისი", "სვანეთი", "ყაზბეგი", "ბორჯომი", "კახეთი"],
      headlinePrefix: "მარტივი ტრანსფერი",
      headlineSuffix: "ვაჭრობის და ლოდინის გარეშე.",
      hook: "უბრალოდ მძღოლი თქვენი სახელით — და წინ მთელი საქართველო.",
      cta: "დაჯავშნა WhatsApp-ში",
      ctaSecondary: "როგორ მუშაობს",
      stats: {
        rating: "4.9 Google-ზე",
        hours: "24/7 ღიაა",
        fleet: "Lexus RX · V-Class · Sprinter",
      },
      scrollHint: "ჩამოსქროლეთ",
    },
    services: {
      eyebrow: "სერვისები",
      title: "ერთი ზარი ფარავს მთელ მოგზაურობას",
      subtitle: "თვითმფრინავიდან ჩამოსვლიდან სასტუმროს კარამდე — ყველაფერზე ჩვენ ვზრუნავთ.",
      items: [
        {
          title: "აეროპორტში დახვედრა",
          desc: "ბათუმის, თბილისისა და ქუთაისის აეროპორტები. ფრენას ვადევნებთ თვალს — დაგვიანება გარეთ არ დაგტოვებთ.",
          tag: "დახვედრა ტაბლოთი",
        },
        {
          title: "ქალაქთაშორისი ტრანსფერი",
          desc: "ნებისმიერ ორ წერტილს შორის საქართველოში, თქვენთვის მოსახერხებელ დროს, ფიქსირებული ფასით.",
          tag: "ფიქსირებული ფასი",
        },
        {
          title: "VIP შოფერი",
          desc: "დისკრეტული, პროფესიონალი მძღოლი ბიზნეს მოგზაურობისა და VIP სტუმრებისთვის — 24 საათზე ხელმისაწვდომი.",
          tag: "24/7 კავშირზე",
        },
        {
          title: "ექსკურსია მძღოლ-გიდთან",
          desc: "ერთდღიანი და მრავალდღიანი ტურები აჭარაში, სვანეთში, კახეთსა და სხვა რეგიონებში ადგილობრივ მძღოლ-გიდთან ერთად.",
          tag: "მძღოლ-გიდი",
        },
      ],
    },
    about: {
      eyebrow: "ჩვენ შესახებ",
      title: "ოჯახური ბიზნესი, რომელსაც გზას მიანდობთ",
      body: "EasyTransfer Georgia — ტრანსფერის კომპანია ბათუმიდან, რომელსაც ქალი მეწარმე მართავს. გზაზე ვართ ყოველდღე, პირველივე მგზავრობიდან. ჩვენი მძღოლები საუბრობენ ქართულად, რუსულად და ინგლისურად, იცნობენ ქვეყნის ყველა უღელტეხილსა და მოკლე გზას — და ყველა მოგზაურობას, იქნება ეს აეროპორტში დახვედრა თუ სამდღიანი ტური, ერთნაირად ეპყრობიან: მშვიდად, დროულად და სიურპრიზების გარეშე.",
      stats: [
        { value: "4.9★", label: "Google შეფასება" },
        { value: "56+", label: "შეფასება" },
        { value: "24/7", label: "გზაზე" },
        { value: "3", label: "ენა მძღოლებთან" },
      ],
      languagesLabel: "ჩვენი მძღოლები საუბრობენ",
      languages: ["ქართული", "რუსული", "ინგლისური"],
      fleetLabel: "ავტოპარკი",
      fleet: [
        { name: "Lexus RX", cls: "პრემიუმი", seats: "1–4 მგზავრი", bags: "3 ჩემოდანი" },
        { name: "Mercedes-Benz V-Class", cls: "VIP მინივენი", seats: "1–7 მგზავრი", bags: "7 ჩემოდანი" },
        { name: "Mercedes-Benz Sprinter", cls: "ჯგუფური", seats: "1–17 მგზავრი", bags: "16 ჩემოდანი" },
      ],
      routesLabel: "პოპულარული მარშრუტები",
      routes: [
        "ბათუმი ↔ თბილისი",
        "ქუთაისი ↔ ბათუმი",
        "თბილისი ↔ ქუთაისი",
        "ბათუმი → თრაბზონი",
        "ბათუმი → რიზე",
      ],
    },
    reviews: {
      eyebrow: "შეფასებები",
      title: "რას ამბობენ ჩვენი სტუმრები",
      subtitle: "4.9 5-დან Google-ზე — რეალური მოგზაურობები, რეალური სტუმრები.",
      badge: "Google შეფასებები",
      ctaLabel: "ყველა შეფასება Google-ზე",
    },
    gallery: {
      eyebrow: "გალერეა",
      title: "სად მივყავართ",
      subtitle: "რამდენიმე ადგილი, სადაც სტუმრები ტრანსფერით ან ექსკურსიით მიდიან.",
    },
    contact: {
      eyebrow: "კონტაქტი",
      title: "დაჯავშნეთ ტრანსფერი",
      subtitle: "გვითხარით სად და როდის — გიპასუხებთ წუთებში, 24/7.",
      addressLabel: "მისამართი",
      hoursLabel: "სამუშაო საათები",
      hoursValue: "ღია 24 საათი",
      phoneLabel: "ტელეფონი / WhatsApp",
      form: {
        from: "საიდან",
        to: "სად",
        date: "თარიღი და დრო",
        name: "სახელი და გვარი",
        phone: "ტელეფონი / WhatsApp",
        comment: "კომენტარი (არასავალდებულო)",
        commentPlaceholder: "ფრენის ნომერი, მგზავრთა რაოდენობა, საბავშვო სავარძელი…",
        submit: "გაგზავნა WhatsApp-ში",
        selectPlaceholder: "აირჩიეთ ქალაქი",
        passengers: "მგზავრი",
      },
      note: "წინასწარი გადახდის გარეშე — ჯავშანი დასტურდება WhatsApp-ში პასუხით.",
      callCta: "დარეკვა",
      routeCta: "მარშრუტი",
    },
    footer: {
      tagline: "პრემიუმ ტრანსფერი და ტურები საქართველოში, 24/7 ხელმისაწვდომი.",
      rights: "© 2026 EasyTransfer Georgia. ყველა უფლება დაცულია.",
      credits: "ღირსშესანიშნაობების ფოტოები: Wikimedia Commons, თავისუფალი ლიცენზიები (CC BY / CC BY-SA / CC0).",
    },
  },
};

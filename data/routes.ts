import type { Lang } from "./content";

export type RouteCategory = "transfer" | "excursion";

export type RouteItem = {
  id: string;
  category: RouteCategory;
  image: string;
  duration: string;
  priceFrom: number;
  priceUnit: Record<Lang, string>;
  badge?: Record<Lang, string>;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  stops: Record<Lang, string[]>;
};

export const ROUTES: RouteItem[] = [
  {
    id: "airport",
    category: "transfer",
    image: "/images/gallery/batumi.jpg",
    duration: "20–40 min",
    priceFrom: 15,
    priceUnit: { en: "/ car", ru: "/ машина", ka: "/ მანქანა" },
    badge: { en: "MOST BOOKED", ru: "ЧАЩЕ ВСЕГО", ka: "ყველაზე ხშირად" },
    title: {
      en: "Airport pickup",
      ru: "Трансфер из аэропорта",
      ka: "აეროპორტში დახვედრა",
    },
    desc: {
      en: "We meet you at the gate with a name sign and track your flight, so a delay never leaves you waiting.",
      ru: "Встречаем на выходе с табличкой и следим за рейсом — задержка не оставит вас ждать снаружи.",
      ka: "გელოდებით გასასვლელთან ტაბლოთი და ვადევნებთ თვალს ფრენას — დაგვიანება გარეთ არ დაგტოვებთ.",
    },
    stops: {
      en: ["Batumi airport", "Kutaisi airport", "Tbilisi airport", "→ any hotel in the city"],
      ru: ["Аэропорт Батуми", "Аэропорт Кутаиси", "Аэропорт Тбилиси", "→ любой отель в городе"],
      ka: ["ბათუმის აეროპორტი", "ქუთაისის აეროპორტი", "თბილისის აეროპორტი", "→ ნებისმიერი სასტუმრო ქალაქში"],
    },
  },
  {
    id: "batumi-tbilisi",
    category: "transfer",
    image: "/images/gallery/tbilisi.jpg",
    duration: "~6 h",
    priceFrom: 90,
    priceUnit: { en: "/ car", ru: "/ машина", ka: "/ მანქანა" },
    title: {
      en: "Batumi ↔ Tbilisi transfer",
      ru: "Трансфер Батуми ↔ Тбилиси",
      ka: "ტრანსფერი ბათუმი ↔ თბილისი",
    },
    desc: {
      en: "Door-to-door between the two cities, one fixed price, stop whenever you like along the way.",
      ru: "Из точки в точку между городами, одна фиксированная цена, остановимся, где захотите.",
      ka: "ქალაქებს შორის კარიდან კარამდე, ერთი ფიქსირებული ფასი, გავჩერდებით, სადაც გსურთ.",
    },
    stops: {
      en: ["Your address in Batumi", "Rest stop in Kobuleti or Samtredia", "→ your address in Tbilisi"],
      ru: ["Ваш адрес в Батуми", "Остановка в Кобулети или Самтредиа", "→ ваш адрес в Тбилиси"],
      ka: ["თქვენი მისამართი ბათუმში", "გაჩერება ქობულეთში ან სამტრედიაში", "→ თქვენი მისამართი თბილისში"],
    },
  },
  {
    id: "vip",
    category: "transfer",
    image: "/images/gallery/jvari.jpg",
    duration: "by the hour",
    priceFrom: 40,
    priceUnit: { en: "/ hour", ru: "/ час", ka: "/ საათი" },
    title: {
      en: "VIP chauffeur",
      ru: "VIP-шофёр",
      ka: "VIP შოფერი",
    },
    desc: {
      en: "A discreet driver on call for a full day of meetings, several stops, or whatever your schedule needs.",
      ru: "Сдержанный водитель на связи на весь день встреч, нескольких точек — под ваш график.",
      ka: "დისკრეტული მძღოლი კავშირზეა მთელი დღის შეხვედრებისთვის — თქვენი გრაფიკით.",
    },
    stops: {
      en: ["Pick a start time", "As many stops as you need", "Same driver all day"],
      ru: ["Выбираете время начала", "Сколько угодно остановок", "Один водитель на весь день"],
      ka: ["აირჩიეთ დაწყების დრო", "რამდენი გაჩერებაც გჭირდებათ", "ერთი მძღოლი მთელი დღე"],
    },
  },
  {
    id: "svaneti",
    category: "excursion",
    image: "/images/gallery/svaneti.jpg",
    duration: "2–3 days",
    priceFrom: 120,
    priceUnit: { en: "/ person", ru: "/ чел.", ka: "/ მგზავრი" },
    badge: { en: "MULTI-DAY", ru: "МНОГОДНЕВНЫЙ", ka: "მრავალდღიანი" },
    title: {
      en: "Svaneti", ru: "Сванети", ka: "სვანეთი",
    },
    desc: {
      en: "Medieval stone towers, high mountain villages and the road to Ushguli with an overnight stay.",
      ru: "Средневековые каменные башни, высокогорные сёла и дорога на Ушгули с ночёвкой.",
      ka: "შუა საუკუნეების ქვის კოშკები, მაღალმთიანი სოფლები და გზა უშგულამდე ღამისთევით.",
    },
    stops: {
      en: ["Mestia", "Ushguli", "Enguri dam", "1–2 overnight stays"],
      ru: ["Местиа", "Ушгули", "Ингурская ГЭС", "1–2 ночёвки"],
      ka: ["მესტია", "უშგული", "ენგურის კაშხალი", "1–2 ღამე"],
    },
  },
  {
    id: "kazbegi",
    category: "excursion",
    image: "/images/gallery/kazbegi.jpg",
    duration: "2 days",
    priceFrom: 90,
    priceUnit: { en: "/ person", ru: "/ чел.", ka: "/ მგზავრი" },
    title: {
      en: "Kazbegi", ru: "Казбеги", ka: "ყაზბეგი",
    },
    desc: {
      en: "The Georgian Military Highway, Jvari Pass and the Gergeti Trinity Church beneath Mount Kazbek.",
      ru: "Военно-Грузинская дорога, Крестовый перевал и храм Гергети у подножия Казбека.",
      ka: "საქართველოს სამხედრო გზა, ჯვრის უღელტეხილი და გერგეტის სამება ყაზბეგის ძირას.",
    },
    stops: {
      en: ["Ananuri fortress", "Jvari Pass, 2 395 m", "Gergeti Trinity Church"],
      ru: ["Крепость Ананури", "Крестовый перевал, 2395 м", "Храм Гергети"],
      ka: ["ანანურის ციხე", "ჯვრის უღელტეხილი, 2395 მ", "გერგეტის სამება"],
    },
  },
  {
    id: "borjomi",
    category: "excursion",
    image: "/images/gallery/borjomi.jpg",
    duration: "1 day",
    priceFrom: 45,
    priceUnit: { en: "/ person", ru: "/ чел.", ka: "/ მგზავრი" },
    title: {
      en: "Borjomi & Vardzia", ru: "Боржоми и Вардзиа", ka: "ბორჯომი და ვარძია",
    },
    desc: {
      en: "The spa-town park, the cable car, and the cave monastery of Vardzia carved into a cliff.",
      ru: "Парк курортного города, канатная дорога и пещерный монастырь Вардзиа в скале.",
      ka: "საკურორტო პარკი, საბაგირო და კლდეში გამოკვეთილი ვარძიის სამონასტრო კომპლექსი.",
    },
    stops: {
      en: ["Borjomi Central Park", "Rabati fortress", "Vardzia cave monastery"],
      ru: ["Центральный парк Боржоми", "Крепость Рабати", "Пещерный монастырь Вардзиа"],
      ka: ["ბორჯომის ცენტრალური პარკი", "რაბათის ციხე", "ვარძიის სამონასტრო კომპლექსი"],
    },
  },
  {
    id: "martvili",
    category: "excursion",
    image: "/images/gallery/martvili.jpg",
    duration: "1 day",
    priceFrom: 40,
    priceUnit: { en: "/ person", ru: "/ чел.", ka: "/ მგზავრი" },
    title: {
      en: "Martvili Canyon", ru: "Каньон Мартвили", ka: "მარტვილის კანიონი",
    },
    desc: {
      en: "A boat ride through a turquoise canyon in Imereti, with the Prometheus cave on the way back.",
      ru: "Лодка по бирюзовому каньону в Имерети, на обратном пути — пещера Прометея.",
      ka: "ნავით ფირუზისფერ კანიონში იმერეთში, უკან გზაზე — პრომეთეს მღვიმე.",
    },
    stops: {
      en: ["Martvili Canyon boat ride", "Prometheus cave", "Kutaisi old town"],
      ru: ["Лодка по каньону Мартвили", "Пещера Прометея", "Старый Кутаиси"],
      ka: ["მარტვილის კანიონში ნავით გასეირნება", "პრომეთეს მღვიმე", "ძველი ქუთაისი"],
    },
  },
  {
    id: "kakheti",
    category: "excursion",
    image: "/images/gallery/sighnaghi.jpg",
    duration: "1 day",
    priceFrom: 50,
    priceUnit: { en: "/ person", ru: "/ чел.", ka: "/ მგზავრი" },
    title: {
      en: "Kakheti wine day", ru: "Винный день в Кахетии", ka: "ღვინის დღე კახეთში",
    },
    desc: {
      en: "The city of love, a wine cellar tasting, and the view over Alazani valley from Sighnaghi's walls.",
      ru: "«Город любви», дегустация в винном погребе и вид на долину Алазани со стен Сигнахи.",
      ka: "სიყვარულის ქალაქი, ღვინის მარნის დეგუსტაცია და ალაზნის ველის ხედი სიღნაღის კედლებიდან.",
    },
    stops: {
      en: ["Sighnaghi old town", "Wine cellar tasting", "Alazani valley viewpoint"],
      ru: ["Старый город Сигнахи", "Дегустация в винном погребе", "Смотровая на долину Алазани"],
      ka: ["სიღნაღის ძველი ქალაქი", "ღვინის მარნის დეგუსტაცია", "ალაზნის ველის სანახაობა"],
    },
  },
];

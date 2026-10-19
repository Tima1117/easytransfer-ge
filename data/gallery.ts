import type { Lang } from "./content";

export type GalleryItem = {
  id: string;
  src: string;
  credit: string;
  name: Record<Lang, string>;
  caption: Record<Lang, string>;
};

export const GALLERY: GalleryItem[] = [
  {
    id: "batumi",
    src: "/images/gallery/batumi.jpg",
    credit: "Dalibor Z. Chvatal, CC BY 3.0",
    name: { en: "Batumi", ru: "Батуми", ka: "ბათუმი" },
    caption: {
      en: "Black Sea boulevard — airport transfers start and end here",
      ru: "Набережная Чёрного моря — отсюда начинаются и заканчиваются трансферы",
      ka: "შავი ზღვის ბულვარი — აქედან იწყება და მთავრდება ტრანსფერები",
    },
  },
  {
    id: "svaneti",
    src: "/images/gallery/svaneti.jpg",
    credit: "Florian Pinel, CC BY-SA 3.0",
    name: { en: "Svaneti · Ushguli", ru: "Сванети · Ушгули", ka: "სვანეთი · უშგული" },
    caption: {
      en: "Medieval stone towers, 2–3 day excursion",
      ru: "Средневековые каменные башни, экскурсия на 2–3 дня",
      ka: "შუა საუკუნეების ქვის კოშკები, 2–3 დღიანი ექსკურსია",
    },
  },
  {
    id: "borjomi",
    src: "/images/gallery/borjomi.jpg",
    credit: "Kober, CC0",
    name: { en: "Borjomi", ru: "Боржоми", ka: "ბორჯომი" },
    caption: {
      en: "Spa-town park, part of the Borjomi–Vardzia route",
      ru: "Парк курортного города, часть маршрута Боржоми–Вардзиа",
      ka: "საკურორტო ქალაქის პარკი, ბორჯომი–ვარძიას მარშრუტის ნაწილი",
    },
  },
  {
    id: "martvili",
    src: "/images/gallery/martvili.jpg",
    credit: "AlexandreAssatiani, CC BY 4.0",
    name: { en: "Martvili Canyon", ru: "Каньон Мартвили", ka: "მარტვილის კანიონი" },
    caption: {
      en: "Turquoise canyon in Imereti, a popular day trip",
      ru: "Бирюзовый каньон в Имерети, популярная однодневная поездка",
      ka: "ფირუზისფერი კანიონი იმერეთში, პოპულარული ერთდღიანი ტური",
    },
  },
  {
    id: "kazbegi",
    src: "/images/gallery/kazbegi.jpg",
    credit: "Braveheart, CC BY-SA 4.0",
    name: { en: "Kazbegi · Gergeti Trinity", ru: "Казбеги · Гергети", ka: "ყაზბეგი · გერგეტი" },
    caption: {
      en: "The church beneath Mount Kazbek, 2-day excursion",
      ru: "Храм у подножия горы Казбек, экскурсия на 2 дня",
      ka: "ეკლესია ყაზბეგის ძირას, 2 დღიანი ექსკურსია",
    },
  },
  {
    id: "sighnaghi",
    src: "/images/gallery/sighnaghi.jpg",
    credit: "Sergey Sebelev, CC BY-SA 4.0",
    name: { en: "Sighnaghi, Kakheti", ru: "Сигнахи, Кахетия", ka: "სიღნაღი, კახეთი" },
    caption: {
      en: "The city of love, heart of the wine region",
      ru: "«Город любви», сердце винного региона",
      ka: "სიყვარულის ქალაქი, ღვინის რეგიონის გული",
    },
  },
  {
    id: "tbilisi",
    src: "/images/gallery/tbilisi.jpg",
    credit: "Andrew Milligan sumo, CC BY 2.0",
    name: { en: "Tbilisi Old Town", ru: "Старый Тбилиси", ka: "ძველი თბილისი" },
    caption: {
      en: "Narikala fortress over the old town, Batumi–Tbilisi route",
      ru: "Крепость Нарикала над старым городом, маршрут Батуми–Тбилиси",
      ka: "ნარიყალას ციხე ძველ ქალაქზე, ბათუმი–თბილისის მარშრუტი",
    },
  },
  {
    id: "jvari",
    src: "/images/gallery/jvari.jpg",
    credit: "Mursten, CC BY-SA 4.0",
    name: { en: "Jvari Pass, 2 395 m", ru: "Крестовый перевал, 2395 м", ka: "ჯვრის უღელტეხილი, 2395 მ" },
    caption: {
      en: "The road to Kazbegi crosses the Greater Caucasus here",
      ru: "Здесь дорога на Казбеги пересекает Большой Кавказ",
      ka: "აქ ყაზბეგისკენ მიმავალი გზა დიდ კავკასიონს კვეთს",
    },
  },
];

import type { Lang } from "./content";

export type Review = {
  id: string;
  author: string;
  monthsAgo: number;
  source: "google" | "site";
  route?: Record<Lang, string>;
  text: Record<Lang, string>;
};

export const REVIEWS: Review[] = [
  {
    id: "be-luke",
    author: "Be Luke",
    monthsAgo: 4,
    source: "google",
    route: { en: "Batumi → Tbilisi", ru: "Батуми → Тбилиси", ka: "ბათუმი → თბილისი" },
    text: {
      en: "I traveled from Batumi to Tbilisi and the transfer was excellent. The car was a Lexus RX — very clean, comfortable, and smooth for a long trip. The ride was calm and the driver professional.",
      ru: "Ехал из Батуми в Тбилиси, и трансфер был отличным. Машина — Lexus RX, очень чистая и комфортная, дальняя дорога прошла гладко. Было спокойно, водитель — профессионал.",
      ka: "ბათუმიდან თბილისამდე ვიმგზავრე და ტრანსფერი შესანიშნავი იყო. მანქანა იყო Lexus RX — ძალიან სუფთა და კომფორტული, გრძელი გზა გლუვად ჩაიარა. მძღოლი იყო პროფესიონალი.",
    },
  },
  {
    id: "olga",
    author: "Волянська Ольга",
    monthsAgo: 4,
    source: "google",
    route: { en: "Tbilisi → Borjomi", ru: "Тбилиси → Боржоми", ka: "თბილისი → ბორჯომი" },
    text: {
      en: "A huge thank you to David for a wonderful tour from Tbilisi to Borjomi! The trip was easy, fun and memorable. He showed us beautiful places and told us a lot about Georgia.",
      ru: "Огромное спасибо Давиду за прекрасную экскурсию из Тбилиси в Боржоми! Поездка была лёгкой, весёлой и запомнилась надолго. Давид показал нам красивые места и рассказал много интересного о Грузии.",
      ka: "დიდი მადლობა დავითს თბილისიდან ბორჯომამდე შესანიშნავი ტურისთვის! მოგზაურობა იყო მარტივი, მხიარული და დასამახსოვრებელი. მან გვაჩვენა ლამაზი ადგილები და ბევრი რამ გვიამბო საქართველოზე.",
    },
  },
  {
    id: "nazym",
    author: "Nazym Satybaldy",
    monthsAgo: 3,
    source: "google",
    text: {
      en: "Our driver Georgi — thank you so much for the comfortable ride and great mood. He told stories the whole way and was responsive and polite.",
      ru: "Наш водитель Георгий — спасибо большое за комфортное вождение и отличное настроение. Рассказывал истории всю дорогу, был отзывчивым и вежливым.",
      ka: "ჩვენი მძღოლი გიორგი — დიდი მადლობა კომფორტული სვლისა და შესანიშნავი განწყობისთვის. მთელი გზა ამბებს გვიყვებოდა, იყო გულისხმიერი და თავაზიანი.",
    },
  },
  {
    id: "kobi",
    author: "Kobi Shaul",
    monthsAgo: 2,
    source: "site",
    text: {
      en: "Excellent service! The driver was very polite and professional, the car comfortable and well maintained. He kindly stopped for us so we could exchange money.",
      ru: "Отличный сервис! Водитель был очень вежливым и профессиональным, машина — комфортной и ухоженной. Он любезно остановился, чтобы мы могли обменять деньги.",
      ka: "შესანიშნავი სერვისი! მძღოლი იყო ძალიან თავაზიანი და პროფესიონალი, მანქანა — კომფორტული და მოვლილი. ის ლმობიერად გაჩერდა, რომ ვალუტის გადაცვლა შეგვძლებოდა.",
    },
  },
  {
    id: "yt",
    author: "Y T",
    monthsAgo: 4,
    source: "google",
    text: {
      en: "The service was professional, reliable, and very comfortable from start to finish. The driver arrived on time, the vehicle was clean, and the whole trip felt safe and stress-free.",
      ru: "Сервис был профессиональным, надёжным и очень комфортным от начала до конца. Водитель приехал вовремя, машина была чистой, а поездка прошла безопасно и без стресса.",
      ka: "სერვისი იყო პროფესიონალური, საიმედო და ძალიან კომფორტული დასაწყისიდან ბოლომდე. მძღოლი დროულად მოვიდა, მანქანა იყო სუფთა, მოგზაურობა კი — უსაფრთხო და სტრესის გარეშე.",
    },
  },
  {
    id: "ekaterina",
    author: "Екатерина Зеленцова",
    monthsAgo: 4,
    source: "google",
    route: { en: "Svaneti excursion", ru: "Экскурсия в Сванети", ka: "ექსკურსია სვანეთში" },
    text: {
      en: "My friends and I visited Svaneti, one of the most beautiful regions of Georgia. We were truly amazed by your service — honestly the best. Thank you for everything!",
      ru: "С подругами посетили Сванети — один из самых красивых регионов Грузии. Мы в восторге от вашего сервиса, настолько довольны, что хочется сказать это вслух. Спасибо за всё!",
      ka: "მეგობრებთან ერთად ვეწვიეთ სვანეთს — საქართველოს ერთ-ერთ ულამაზეს რეგიონს. აღფრთოვანებული ვართ თქვენი სერვისით. დიდი მადლობა ყველაფრისთვის!",
    },
  },
  {
    id: "monaco",
    author: "Monaco Buggati",
    monthsAgo: 4,
    source: "site",
    route: { en: "Kutaisi → Batumi", ru: "Кутаиси → Батуми", ka: "ქუთაისი → ბათუმი" },
    text: {
      en: "A wonderful trip from Kutaisi to Batumi. Smooth, safe, very comfortable. Traveling in a Lexus RX made the whole journey feel easy and stress-free. Truly a 5-star experience.",
      ru: "Прекрасная поездка из Кутаиси в Батуми. Плавно, безопасно, очень комфортно. Путешествие на Lexus RX сделало весь путь лёгким и без стресса. Настоящие пять звёзд.",
      ka: "შესანიშნავი მოგზაურობა ქუთაისიდან ბათუმამდე. გლუვი, უსაფრთხო, ძალიან კომფორტული. Lexus RX-ით მგზავრობამ მთელი გზა მარტივი გახადა. ნამდვილად 5-ვარსკვლავიანი გამოცდილება.",
    },
  },
  {
    id: "agata",
    author: "Agata Karpovič",
    monthsAgo: 5,
    source: "google",
    route: { en: "Private excursion", ru: "Приватная экскурсия", ka: "პირადი ექსკურსია" },
    text: {
      en: "Highly recommend! Great value for money. We had a private excursion and the driver stopped wherever we asked. Very polite, cheerful, and easy to get along with.",
      ru: "Рекомендую! Соотношение цены и качества — просто отличное! У нас была приватная экскурсия, водитель останавливался везде, где мы просили. Очень вежливый и весёлый.",
      ka: "გირჩევთ! ფასისა და ხარისხის თანაფარდობა შესანიშნავია! გვქონდა პირადი ექსკურსია, მძღოლი ჩერდებოდა ყველგან, სადაც ვთხოვდით. ძალიან თავაზიანი და მხიარული.",
    },
  },
  {
    id: "vladimir",
    author: "Vladimir Trikulis",
    monthsAgo: 4,
    source: "google",
    text: {
      en: "Only the best driver. You provide the best service imaginable — I can say that openly and without hesitation.",
      ru: "Только лучший водитель. Вы предоставляете лучший сервис, который можно представить — говорю это открыто и без колебаний.",
      ka: "მხოლოდ საუკეთესო მძღოლი. თქვენ გთავაზობთ საუკეთესო სერვისს — ამას ღიად და ყოყმანის გარეშე ვამბობ.",
    },
  },
  {
    id: "alina",
    author: "Аліна Симонюк",
    monthsAgo: 4,
    source: "google",
    text: {
      en: "A wonderful guide and a great trip! Comfortable transfer, pleasant atmosphere and engaging conversation the whole way. He even took us horseback riding at a beautiful spot.",
      ru: "Великолепный гид и отличная поездка! Комфортный трансфер, приятная атмосфера и увлекательное общение на протяжении всего тура. Ещё завёз нас покататься на лошадях.",
      ka: "შესანიშნავი გიდი და მშვენიერი მოგზაურობა! კომფორტული ტრანსფერი, სასიამოვნო ატმოსფერო და საინტერესო საუბარი მთელი ტურის განმავლობაში. ცხენოსნობაზეც წაგვიყვანა.",
    },
  },
];

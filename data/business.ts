export const BUSINESS = {
  name: "EasyTransfer Georgia",
  phoneDisplay: "+995 555 43 73 39",
  phoneTel: "+995555437339",
  whatsappNumber: "995555437339",
  address: "32 Noneshvili Street, Batumi 6100, Georgia",
  addressRu: "ул. Noneshvili 32, Батуми 6100, Грузия",
  addressKa: "ნონეშვილის ქ. 32, ბათუმი 6100",
  lat: 41.646939,
  lng: 41.667971,
  googleReviewsUrl:
    "https://www.google.com/maps/place/EasyTransfer+Georgia/@41.646939,41.667971,17z/data=!4m8!3m7!1s0x8b1f749c612fd1e3:0xe6827e4d9cefa00a!8m2!3d41.646939!4d41.667971!9m1!1b1",
  instagram: "https://www.instagram.com/easytransfer.georgia/",
};

export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`;
}

export const osmEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${BUSINESS.lng - 0.01}%2C${BUSINESS.lat - 0.007}%2C${BUSINESS.lng + 0.01}%2C${BUSINESS.lat + 0.007}&layer=mapnik&marker=${BUSINESS.lat}%2C${BUSINESS.lng}`;

export const osmLink = `https://www.openstreetmap.org/?mlat=${BUSINESS.lat}&mlon=${BUSINESS.lng}#map=16/${BUSINESS.lat}/${BUSINESS.lng}`;

export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.lat},${BUSINESS.lng}`;

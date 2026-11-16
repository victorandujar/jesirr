/**
 * Dades publicades per Construccions Metàl·liques Jesirr al directori d'empreses
 * de l'Ajuntament de Cabrera de Mar i a la seva fitxa de Xarxa Industrial.
 * La web jesirr.com ja no existeix (el domini no resol).
 */
export const empresa = {
  name: 'Jesirr',
  legalName: 'Construcciones Metálicas Jesirr, S.L.',
  since: 1991,
  street: 'C/ Torrent de Can Boba, 13',
  postalCode: '08349',
  city: 'Cabrera de Mar',
  region: 'Barcelona',
  phone: { display: '937 90 70 70', e164: '+34937907070' },
  mobile: { display: '679 61 38 16', e164: '+34679613816' },
  email: 'cmjesirr@gmail.com',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=41.529559%2C2.41903',
  geo: { lat: 41.529559, lng: 2.41903 },
} as const;

export const telUrl = `tel:${empresa.phone.e164}`;
export const movilUrl = `tel:${empresa.mobile.e164}`;
export const mailUrl = (asunto: string, cos = '') =>
  `mailto:${empresa.email}?subject=${encodeURIComponent(asunto)}${cos ? `&body=${encodeURIComponent(cos)}` : ''}`;

/** Retalls dels seus collages (fotos de treballs reals). */
export const treballs = {
  balcones: ['balcon-forja-curvo', 'balcon-forja-decorado', 'balcon-inox-vistas', 'balcon-ondulado', 'venecianas-balcon'],
  barandillas: ['barandilla-forja-roja', 'barandilla-forja-hojas', 'barandilla-barrotes-bolas', 'barandilla-inox-tubos'],
  puertas: ['puerta-reja', 'puerta-doble', 'verja-jardin'],
  escaleras: ['escalera-exterior', 'escalera-barrotes', 'rampa'],
} as const;
export const artesania = ['perchero-arbol', 'mesa-forja', 'cartel-herrero', 'cabecero'] as const;

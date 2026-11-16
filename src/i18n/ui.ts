/** Textos en castellà (per defecte, a /) i català (a /ca). */
export type Lang = 'es' | 'ca';
export const home = (lang: Lang) => (lang === 'ca' ? '/ca' : '/');
export const legalPath = (lang: Lang, k: 'avis' | 'priv') =>
  lang === 'ca' ? (k === 'avis' ? '/ca/avis-legal' : '/ca/privacitat') : k === 'avis' ? '/aviso-legal' : '/privacidad';

export const ui = {
  es: {
    meta: {
      title: 'Jesirr · Cerrajería, hierro e inoxidable en Cabrera de Mar',
      description: 'Construcciones Metálicas Jesirr: balcones, barandillas, puertas, rejas, escaleras y rampas en hierro y acero inoxidable en Cabrera de Mar y el Maresme desde 1991. Tel. 937 90 70 70.',
    },
    skip: 'Saltar al contenido', demo: 'Propuesta de diseño no oficial', demoBy: 'Preparada por Ammavaroo para',
    tagline: 'Cerrajería · Hierro · Inoxidable',
    nav: { trabajos: 'Trabajos', configurador: 'Diseña tu barandilla', historia: 'Quiénes somos', contacto: 'Contacto', principal: 'Principal', idioma: 'Idioma' },
    hero: {
      eyebrow: 'Empresa familiar · Maresme · desde 1991',
      t1: 'Hierro e inoxidable,', t2: 'a la medida de tu casa.',
      text: 'Balcones, barandillas, puertas, rejas, escaleras y rampas. Lo fabricamos en nuestro taller de Cabrera de Mar y lo colocamos nosotros.',
      cta: 'Pide presupuesto', trabajos: 'Ver trabajos',
    },
    conf: {
      label: 'Diseña tu barandilla', title: 'Elige y mira cómo quedaría.',
      estil: 'Estilo', color: 'Color', ample: 'Ancho aproximado', m: 'm',
      estils: { barrotes: 'Barrotes', forja: 'Forja', inox: 'Inox con tubos', vidrio: 'Inox y vidrio' },
      colors: { negro: 'Negro', grafito: 'Grafito', blanco: 'Blanco', verde: 'Verde' },
      inox: 'Acero inoxidable',
      nota: 'Dibujo orientativo. Cada barandilla se mide y se diseña en obra.',
      cta: 'Pedir presupuesto de esta barandilla',
      mail: (e: string, c: string, m: string) => `Hola, me interesa una barandilla de estilo ${e}, en ${c}, de unos ${m} metros. ¿Me podéis dar presupuesto?`,
      asunto: 'Presupuesto de barandilla',
      aria: 'Dibujo de la barandilla elegida',
    },
    trabajos: {
      label: 'Trabajos', title: 'Lo que sale de nuestro taller.',
      text: 'Una muestra de los trabajos que hemos hecho a lo largo de los años, en el Maresme y alrededores.',
      cats: { balcones: 'Balcones', barandillas: 'Barandillas', puertas: 'Puertas, rejas y verjas', escaleras: 'Escaleras y rampas' },
    },
    servicios: {
      label: 'Qué hacemos', title: 'Todo tipo de trabajos en hierro y acero inoxidable.',
      items: ['Balcones', 'Barandillas', 'Escaleras y rampas', 'Puertas', 'Rejas', 'Vallas', 'Venecianas de acero galvanizado', 'Sombreretes de chimenea'],
      text: 'Para interiores y exteriores. Trabajamos sobre todo el hierro y el acero inoxidable, y también los combinamos con aluminio, vidrio o Prodema.',
    },
    artesania: {
      label: 'Línea de decoración', title: 'Hierro hecho a mano, también para decorar.',
      text: 'Tenemos una línea propia de decoración en hierro y acero inoxidable, con modelos de perchas de diseño propio patentados. Hacemos también cabeceros, soportes, mesas, carteles y directorios de empresa, y colaboraciones artísticas combinando el metal con cerámica y otros materiales.',
      piezas: { perchero: 'Perchero', mesa: 'Mesa', cartel: 'Cartel', cabecero: 'Cabecero' },
    },
    historia: {
      label: 'Quiénes somos', title: 'Más de 30 años de oficio.',
      hitos: [
        ['1991', 'Nacemos en Mataró el 6 de marzo, como pequeña empresa familiar: Construcciones Metálicas Roque.'],
        ['1995', 'Nos convertimos en sociedad limitada con el nombre actual, Construcciones Metálicas Jesirr.'],
        ['Hoy', 'Desde Cabrera de Mar trabajamos en todo el Maresme, con una línea propia de decoración en hierro.'],
      ],
      valores: 'Acabados de calidad, asesoramiento y trato directo con cada cliente. Y la base de siempre: honradez y mucho esfuerzo.',
    },
    contacto: { label: 'Contacto', title: 'Cuéntanos qué necesitas.', text: 'Llámanos o escríbenos y te preparamos presupuesto. Si hace falta, vamos a tomar medidas.', fijo: 'Teléfono', movil: 'Móvil', email: 'Email', llegar: 'Cómo llegar', asunto: 'Presupuesto' },
    bar: { aria: 'Acciones rápidas', email: 'Escribir', llamar: 'Llamar' },
    footer: { avis: 'Aviso legal', priv: 'Privacidad' },
    ver: 'Ver grande', cerrar: 'Cerrar',
  },
  ca: {
    meta: {
      title: 'Jesirr · Serralleria, ferro i inoxidable a Cabrera de Mar',
      description: 'Construccions Metàl·liques Jesirr: balcons, baranes, portes, reixes, escales i rampes en ferro i acer inoxidable a Cabrera de Mar i al Maresme des de 1991. Tel. 937 90 70 70.',
    },
    skip: 'Salta al contingut', demo: 'Proposta de disseny no oficial', demoBy: 'Preparada per Ammavaroo per a',
    tagline: 'Serralleria · Ferro · Inoxidable',
    nav: { trabajos: 'Treballs', configurador: 'Dissenya la barana', historia: 'Qui som', contacto: 'Contacte', principal: 'Principal', idioma: 'Idioma' },
    hero: {
      eyebrow: 'Empresa familiar · Maresme · des de 1991',
      t1: 'Ferro i inoxidable,', t2: 'a la mida de casa teva.',
      text: 'Balcons, baranes, portes, reixes, escales i rampes. Ho fabriquem al nostre taller de Cabrera de Mar i ho col·loquem nosaltres.',
      cta: 'Demana pressupost', trabajos: 'Veure treballs',
    },
    conf: {
      label: 'Dissenya la barana', title: 'Tria i mira com quedaria.',
      estil: 'Estil', color: 'Color', ample: 'Amplada aproximada', m: 'm',
      estils: { barrotes: 'Barrots', forja: 'Forja', inox: 'Inox amb tubs', vidrio: 'Inox i vidre' },
      colors: { negro: 'Negre', grafito: 'Grafit', blanco: 'Blanc', verde: 'Verd' },
      inox: 'Acer inoxidable',
      nota: 'Dibuix orientatiu. Cada barana es mesura i es dissenya a l’obra.',
      cta: 'Demanar pressupost d’aquesta barana',
      mail: (e: string, c: string, m: string) => `Hola, m’interessa una barana d’estil ${e}, en ${c}, d’uns ${m} metres. Em podeu passar pressupost?`,
      asunto: 'Pressupost de barana',
      aria: 'Dibuix de la barana triada',
    },
    trabajos: {
      label: 'Treballs', title: 'El que surt del nostre taller.',
      text: 'Una mostra dels treballs que hem fet al llarg dels anys, al Maresme i als voltants.',
      cats: { balcones: 'Balcons', barandillas: 'Baranes', puertas: 'Portes, reixes i tanques', escaleras: 'Escales i rampes' },
    },
    servicios: {
      label: 'Què fem', title: 'Tota mena de treballs en ferro i acer inoxidable.',
      items: ['Balcons', 'Baranes', 'Escales i rampes', 'Portes', 'Reixes', 'Tanques', 'Persianes venecianes d’acer galvanitzat', 'Barrets de xemeneia'],
      text: 'Per a interiors i exteriors. Treballem sobretot el ferro i l’acer inoxidable, i també els combinem amb alumini, vidre o Prodema.',
    },
    artesania: {
      label: 'Línia de decoració', title: 'Ferro fet a mà, també per decorar.',
      text: 'Tenim una línia pròpia de decoració en ferro i acer inoxidable, amb models de penjadors de disseny propi patentats. També fem capçals, suports, taules, cartells i directoris d’empresa, i col·laboracions artístiques combinant el metall amb ceràmica i altres materials.',
      piezas: { perchero: 'Penjador', mesa: 'Taula', cartel: 'Cartell', cabecero: 'Capçal' },
    },
    historia: {
      label: 'Qui som', title: 'Més de 30 anys d’ofici.',
      hitos: [
        ['1991', 'Naixem a Mataró el 6 de març, com a petita empresa familiar: Construccions Metàl·liques Roque.'],
        ['1995', 'Ens convertim en societat limitada amb el nom actual, Construccions Metàl·liques Jesirr.'],
        ['Avui', 'Des de Cabrera de Mar treballem a tot el Maresme, amb una línia pròpia de decoració en ferro.'],
      ],
      valores: 'Acabats de qualitat, assessorament i tracte directe amb cada client. I la base de sempre: honradesa i molt d’esforç.',
    },
    contacto: { label: 'Contacte', title: 'Explica’ns què necessites.', text: 'Truca’ns o escriu-nos i et preparem pressupost. Si cal, venim a prendre mides.', fijo: 'Telèfon', movil: 'Mòbil', email: 'Correu', llegar: 'Com arribar-hi', asunto: 'Pressupost' },
    bar: { aria: 'Accions ràpides', email: 'Escriure', llamar: 'Trucar' },
    footer: { avis: 'Avís legal', priv: 'Privacitat' },
    ver: 'Veure gran', cerrar: 'Tancar',
  },
} as const;

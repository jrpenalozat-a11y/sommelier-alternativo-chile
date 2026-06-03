// ════════════════════════════════════════════════════════════════
//  OVERLAY DE TRADUCCIÓN AL INGLÉS para vinas-alternativas-datos.js
//  Solo se traduce la prosa. Los nombres propios (viñas, cepas,
//  vinos destacados, valles) se comparten desde el origen en español.
//  Se fusiona en runtime desde src/i18n.js -> getDatos('en').
// ════════════════════════════════════════════════════════════════

// Regiones: nombre visible + descripción
export const REGIONES_EN = {
  atacama: {
    nombre: 'Atacama',
    descripcion: 'Extreme far-northern vineyards. Small projects working heat-resilient grapes.',
  },
  coquimbo: {
    nombre: 'Coquimbo',
    descripcion: 'Elqui, Limarí, Choapa. A hub of biodynamic experimentation and mountain wines.',
  },
  aconcagua: {
    nombre: 'Aconcagua',
    descripcion: 'Coastal valleys producing additive-free, organic and low-impact wines.',
  },
  'valle-central': {
    nombre: 'Central Valley',
    descripcion: 'The heart of the alternative scene: old vineyards of Carignan, Cinsault and País.',
  },
  sur: {
    nombre: 'South',
    descripcion: 'Itata, Biobío, Malleco. Cradle of the País grape and the heritage-revival movement.',
  },
  austral: {
    nombre: 'Southern Patagonia',
    descripcion: 'Aysén and Magallanes. Experimental vineyards under extreme conditions, low intervention.',
  },
};

// Notas de cepas (el nombre y la etiqueta de tipo los maneja la UI)
export const CEPAS_EN = {
  'País': "Chile's oldest grape (16th century). Light, fresh wines with a rustic character and natural acidity. The backbone of the heritage-revival movement.",
  'Cinsault': 'A Mediterranean variety that in Itata and Maule yields floral, soft and very drinkable wines. Ideal for natural, sulfite-free wines.',
  'Carignan': "A French variety that found old vineyards (80+ years) in Maule's dry-farmed interior. Powerful, tannic wines with great acidity.",
  'Moscatel de Alejandría': 'An aromatic grape used in clay amphorae. Dry or sweet whites with floral and citrus notes, very fresh.',
  'Corinto': 'A minority variety revived in Coquimbo. Produces light, spicy and very rare wines.',
  'Syrah sin sulfitos': 'A minimalist take on Syrah: spontaneous fermentation and bottling with no additives, preserving pure fruit.',
  'Chardonnay natural': 'Chardonnay fermented with indigenous yeasts, no oak or sulfites, seeking freshness and soil expression.',
  'Pinot Noir sin filtro': 'Pinot Noir from cool vineyards, bottled unfined and unfiltered, keeping all its texture and vibrancy.',
  'Gewürztraminer austral': 'Rare in Chile. Yields exotic wines with lychee and rose notes, ideal for cold climates like Osorno and Magallanes.',
  'Riesling natural': 'In southern zones it achieves vibrant acidity, citrus notes and ageing potential without sulfites.',
  'Carménère natural': "An oak-free, additive-free version: pure fruit and soft tannins, seeking the grape's most authentic expression.",
  'Semillón': 'Uncommon in Chile but revived in small Maule projects, with ageing potential.',
  'Trousseau': "An ancestral grape from France's Jura, recently introduced in Itata with light, floral wines.",
};

// Diccionario de estilos (vocabulario controlado)
export const ESTILO_EN = {
  'minimal intervention': 'minimal intervention',
  'orgánico': 'organic',
  'baja intervención': 'low intervention',
  'sin sulfitos': 'no added sulfites',
  'tinajas de greda': 'clay amphorae (tinajas)',
  'orgánico certificado': 'certified organic',
  'fermentación espontánea': 'spontaneous fermentation',
  'biodinámico': 'biodynamic',
  'tinajas de barro': 'clay amphorae',
  'ancestral': 'ancestral',
  'orgánico biodinámico': 'organic & biodynamic',
  'tinajas': 'clay amphorae (tinajas)',
  'natural': 'natural',
  'terroirista': 'terroir-driven',
  'garage wine, baja intervención': 'garage wine, low intervention',
  'rescate de cepas': 'heritage variety revival',
  'sin aditivos': 'additive-free',
  'vinos de terroir': 'terroir wines',
  'rescate': 'heritage revival',
  'cero sulfitos': 'zero sulfites',
  'natural extremo': 'extreme natural',
};

// Diccionario de segmentos (vocabulario controlado)
export const SEGMENTO_EN = {
  'Natural': 'Natural',
  'Pequeña escala': 'Small scale',
  'Rescate norteño': 'Northern revival',
  'Experimental': 'Experimental',
  'Rescate': 'Heritage revival',
  'Premium natural': 'Natural premium',
  'Vino vivo': 'Living wine',
  'Premium': 'Premium',
  'Patrimonial': 'Heritage',
  'Pequeño productor': 'Small producer',
  'Alta gama natural': 'Natural high-end',
  'Alta gama': 'High-end',
  'Natural costero': 'Coastal natural',
  'Gran escala natural': 'Large-scale natural',
  'Ultra premium natural': 'Ultra-premium natural',
  'Natural extremo': 'Extreme natural',
  'Pequeño proyecto': 'Small project',
  'Boutique extremo': 'Extreme boutique',
  'Boutique natural': 'Natural boutique',
  'Vigno (Carignan viejos)': 'Vigno (old Carignan)',
  'Vigno': 'Vigno',
  'Cooperativa': 'Cooperative',
  'Comercio justo': 'Fair trade',
  'Movimiento social': 'Social movement',
  'Natural accesible': 'Accessible natural',
  'Rescate patrimonial': 'Heritage revival',
  'Accesible natural': 'Accessible natural',
  'Rescate mapuche': 'Mapuche heritage',
  'Experimental austral': 'Southern experimental',
  'Experimental patagonia': 'Patagonian experimental',
  'Experimental extremo': 'Extreme experimental',
  'Alta gama austral': 'Southern high-end',
};

// ════════════════════════════════════════════════════════════════
//  OVERLAY DE TRADUCCIÓN AL INGLÉS para vinas-alternativas-datos.js
//  Solo se traduce la prosa. Los nombres propios (viñas, cepas,
//  vinos destacados, valles) se comparten desde el origen en español.
//  Se fusiona en runtime desde src/i18n.js -> getDatos('en').
// ════════════════════════════════════════════════════════════════

// Regiones: nombre visible + descripción
export const REGIONES_EN = {
  coquimbo: {
    nombre: 'Coquimbo',
    descripcion: 'Elqui and Limarí. Mountain and coastal wines, with organic and biodynamic experimentation in extreme climates.',
  },
  aconcagua: {
    nombre: 'Aconcagua',
    descripcion: 'Casablanca and San Antonio–Leyda. Cool coastal valleys: vibrant whites and low-intervention Pinots.',
  },
  'valle-central': {
    nombre: 'Central Valley',
    descripcion: 'Maipo, Cachapoal, Colchagua, Curicó and Maule. The heart of the movement: biodynamics, dry farming and the revival of Carignan, País and Cinsault.',
  },
  sur: {
    nombre: 'South',
    descripcion: 'Itata, Biobío and Malleco. Cradle of the País grape and heritage natural wine, with clay amphorae and century-old ungrafted vines.',
  },
};

// Notas de cepas (el nombre y la etiqueta de tipo los maneja la UI)
export const CEPAS_EN = {
  'País': "Chile's oldest grape (16th century). Light, fresh, rustic reds; the backbone of the heritage revival in Itata, Maule and Biobío.",
  'Cinsault': 'A Mediterranean variety that in Itata and Maule yields floral, soft and very drinkable reds. The queen of Chilean natural wine.',
  'Carignan': 'Found old vineyards (80+ years) in Maule’s dry-farmed interior. Powerful, tannic, high-acid wines; the soul of the VIGNO seal.',
  'Moscatel de Alejandría': 'An aromatic grape of the southern dry-farmed zone, vinified in clay amphorae. Dry or orange whites, floral and very fresh.',
  'Syrah': 'Versatile: powerful and spicy in warm climates, fresh and floral on the coast and in the mountains (Elqui, Casablanca).',
  'Carménère': "Chile's emblematic grape. In low-intervention versions it shows pure fruit, bell pepper and soft tannins.",
  'Cabernet Sauvignon': 'The most planted grape in the country. In Maipo and the dry-farmed interior it gives structured, age-worthy reds.',
  'Chardonnay': 'In cool climates (Limarí, Malleco) it achieves tension and minerality; fermented with native yeasts in the natural projects.',
  'Pinot Noir': 'A cool-climate grape; in Casablanca, Leyda and Malleco it gives fine, fresh reds with a silky texture.',
  'Sauvignon Blanc': 'The star white of the coastal valleys (Casablanca, Leyda). Citrus and herbaceous, with great maritime salinity.',
  'Garnacha': 'Rare in Chile; in upper Elqui it brings freshness and spice to high-altitude wines.',
  'Malbec': 'Found in mountain and dry-farmed vineyards; intense fruit and gentle tannins in low-intervention hands.',
  'Semillón': 'A historic grape revived in the Maule dry-farmed interior; whites with body, texture and ageing potential.',
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
  'Natural premium': 'Natural premium',
};

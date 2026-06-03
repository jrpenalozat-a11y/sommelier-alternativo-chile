// ============================================================
// vinas-alternativas-datos.js
// Catálogo de viñas alternativas REALES de Chile:
// naturales, biodinámicas, orgánicas y de rescate patrimonial.
// Cada viña incluye coordenadas reales (nivel localidad / valle).
// ============================================================

export const REGIONES = [
  { id: 'coquimbo', nombre: 'Coquimbo', descripcion: 'Elqui y Limarí. Vinos de montaña y de costa, con experimentación orgánica y biodinámica en climas extremos.', valles: ['Elqui', 'Limarí'] },
  { id: 'aconcagua', nombre: 'Aconcagua', descripcion: 'Casablanca y San Antonio–Leyda. Valles costeros fríos: blancos vibrantes y pinots de baja intervención.', valles: ['Casablanca', 'San Antonio / Leyda'] },
  { id: 'valle-central', nombre: 'Valle Central', descripcion: 'Maipo, Cachapoal, Colchagua, Curicó y Maule. El corazón del movimiento: biodinámica, secano y rescate de Carignan, País y Cinsault.', valles: ['Maipo', 'Cachapoal', 'Colchagua', 'Curicó', 'Maule'] },
  { id: 'sur', nombre: 'Zona Sur', descripcion: 'Itata, Biobío y Malleco. Cuna de la uva País y el vino natural patrimonial, con tinajas de greda y viñas centenarias de pie franco.', valles: ['Itata', 'Biobío', 'Malleco'] },
];

export const VINAS = [
  // ========== COQUIMBO – ELQUI ==========
  { nombre: 'Viñedos de Alcohuaz', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Garnacha', 'Malbec'], estilo: 'orgánico', segmento: 'Alta gama', terruno: 'Alto Elqui, 1.700–2.200 msnm; granito y pizarra, vendimia manual', destacados: ['Grus', 'Rhu', 'Tococo'], coords: { lat: -30.187, lng: -70.298 } },
  { nombre: 'Viña Falernia', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Carménère'], estilo: 'orgánico', segmento: 'Premium', terruno: 'Valle de Elqui (Vicuña); clima desértico de montaña', destacados: ['Falernia Syrah Reserva', 'Carménère Gran Reserva'], coords: { lat: -30.034, lng: -70.708 } },

  // ========== COQUIMBO – LIMARÍ ==========
  { nombre: 'Viña Tabalí', region: 'coquimbo', valle: 'Limarí', cepas: ['Chardonnay', 'Pinot Noir', 'Syrah'], estilo: 'orgánico', segmento: 'Alta gama', terruno: 'Talinay; suelos calcáreos de origen marino, influencia costera', destacados: ['Talinay Chardonnay', 'Talinay Pinot Noir'], coords: { lat: -30.601, lng: -71.339 } },

  // ========== ACONCAGUA – CASABLANCA ==========
  { nombre: 'Viña Veramonte (Ritual)', region: 'aconcagua', valle: 'Casablanca', cepas: ['Sauvignon Blanc', 'Pinot Noir', 'Chardonnay'], estilo: 'orgánico certificado', segmento: 'Premium', terruno: 'Casablanca; suelos graníticos, influencia del Pacífico', destacados: ['Ritual Sauvignon Blanc', 'Ritual Pinot Noir'], coords: { lat: -33.296, lng: -71.345 } },
  { nombre: 'Viña Montsecano', region: 'aconcagua', valle: 'Casablanca', cepas: ['Pinot Noir'], estilo: 'biodinámico', segmento: 'Alta gama natural', terruno: 'Casablanca; laderas graníticas, proyecto de André Ostertag', destacados: ['Montsecano Pinot Noir', 'Refugio'], coords: { lat: -33.272, lng: -71.358 } },

  // ========== ACONCAGUA – SAN ANTONIO / LEYDA ==========
  { nombre: 'Viña Matetic', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Syrah', 'Pinot Noir', 'Sauvignon Blanc'], estilo: 'biodinámico', segmento: 'Ultra premium natural', terruno: 'Valle de Rosario; certificado Demeter', destacados: ['EQ Syrah', 'EQ Coastal Sauvignon Blanc'], coords: { lat: -33.561, lng: -71.487 } },
  { nombre: 'Viña Casa Marín', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Sauvignon Blanc', 'Pinot Noir'], estilo: 'orgánico', segmento: 'Natural costero', terruno: 'Lo Abarca; a 4 km del mar, suelos arcillosos', destacados: ['Cipreses Sauvignon Blanc', 'Lo Abarca Hills Pinot Noir'], coords: { lat: -33.503, lng: -71.620 } },

  // ========== VALLE CENTRAL – MAIPO ==========
  { nombre: 'Viña Antiyal', region: 'valle-central', valle: 'Maipo', cepas: ['Carménère', 'Syrah', 'Cabernet Sauvignon'], estilo: 'biodinámico', segmento: 'Alta gama natural', terruno: 'Alto Jahuel (Buin); biodinámica, Álvaro Espinoza', destacados: ['Antiyal', 'Kuyén'], coords: { lat: -33.792, lng: -70.726 } },
  { nombre: 'Viña De Martino', region: 'valle-central', valle: 'Maipo', cepas: ['Cinsault', 'País', 'Moscatel de Alejandría'], estilo: 'tinajas de greda', segmento: 'Patrimonial', terruno: 'Isla de Maipo; uvas patrimoniales de Itata, Choapa y Maule en tinaja', destacados: ['Viejas Tinajas Cinsault', 'Viejas Tinajas Muscat'], coords: { lat: -33.752, lng: -70.898 } },
  { nombre: 'Viña Odfjell', region: 'valle-central', valle: 'Maipo', cepas: ['Carignan', 'Carménère', 'Malbec'], estilo: 'orgánico biodinámico', segmento: 'Premium', terruno: 'Padre Hurtado; viñedos orgánicos y de secano (Maule)', destacados: ['Orzada Carignan', 'Armador Carménère'], coords: { lat: -33.565, lng: -70.815 } },
  { nombre: 'Viña Undurraga (T.H. Terroir Hunter)', region: 'valle-central', valle: 'Maipo', cepas: ['País', 'Carignan', 'Carménère'], estilo: 'rescate de cepas', segmento: 'Patrimonial', terruno: 'Línea que rescata cepas y terroirs de todo Chile', destacados: ['T.H. País', 'T.H. Carignan'], coords: { lat: -33.700, lng: -70.920 } },

  // ========== VALLE CENTRAL – CACHAPOAL ==========
  { nombre: 'Viña Tipaume', region: 'valle-central', valle: 'Cachapoal', cepas: ['Carménère', 'Cabernet Sauvignon', 'Carignan'], estilo: 'orgánico', segmento: 'Natural', terruno: 'Requínoa; agricultura orgánica familiar de pequeña escala', destacados: ['Tipaume Carménère', 'Tipaume Tinto'], coords: { lat: -34.283, lng: -70.812 } },
  { nombre: 'Viña Clos des Fous', region: 'valle-central', valle: 'Cachapoal', cepas: ['Cabernet Sauvignon', 'Syrah', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Boutique natural', terruno: 'Terroirs extremos (Alto Cachapoal, Aconcagua, Malleco)', destacados: ['Subsollum', 'Grillos Cantores'], coords: { lat: -34.300, lng: -70.600 } },

  // ========== VALLE CENTRAL – COLCHAGUA ==========
  { nombre: 'Viña Emiliana', region: 'valle-central', valle: 'Colchagua', cepas: ['Syrah', 'Carménère', 'Cabernet Sauvignon'], estilo: 'orgánico biodinámico', segmento: 'Premium natural', terruno: 'Los Robles, Colchagua; certificado Demeter', destacados: ['Coyam', 'Gê'], coords: { lat: -34.630, lng: -71.280 } },
  { nombre: 'Viña Koyle', region: 'valle-central', valle: 'Colchagua', cepas: ['Carménère', 'Syrah', 'Carignan'], estilo: 'biodinámico', segmento: 'Premium', terruno: 'Los Lingues; faldas andinas, certificado Demeter', destacados: ['Koyle Royale Syrah', 'Koyle Costa'], coords: { lat: -34.550, lng: -70.930 } },
  { nombre: 'Viña Villalobos', region: 'valle-central', valle: 'Colchagua', cepas: ['Carignan', 'País', 'Cabernet Sauvignon'], estilo: 'natural', segmento: 'Natural', terruno: 'Apalta; viñas de pie franco entre el bosque nativo', destacados: ['Villalobos Carignan', 'Villalobos Tinto'], coords: { lat: -34.645, lng: -71.130 } },
  { nombre: 'Viña Casa Lapostolle', region: 'valle-central', valle: 'Colchagua', cepas: ['Carménère', 'Cabernet Sauvignon', 'Syrah'], estilo: 'biodinámico', segmento: 'Ultra premium natural', terruno: 'Clos Apalta, Apalta; biodinámica certificada Demeter', destacados: ['Clos Apalta', 'Cuvée Alexandre'], coords: { lat: -34.645, lng: -71.140 } },

  // ========== VALLE CENTRAL – CURICÓ ==========
  { nombre: 'Viña Miguel Torres (Estelado)', region: 'valle-central', valle: 'Curicó', cepas: ['País', 'Cabernet Sauvignon'], estilo: 'orgánico', segmento: 'Patrimonial', terruno: 'Curicó; espumante de País del secano, pionero del rescate', destacados: ['Estelado Rosé', 'Santa Digna Estelado'], coords: { lat: -34.990, lng: -71.270 } },
  { nombre: 'Attilio & Mochi', region: 'valle-central', valle: 'Curicó', cepas: ['País', 'Cinsault', 'Malbec'], estilo: 'natural', segmento: 'Natural', terruno: 'Sagrada Familia; vinos naturales de pequeños viñedos', destacados: ['Pipeño', 'Naranjo'], coords: { lat: -34.960, lng: -71.390 } },
  { nombre: 'Viña Echeverría', region: 'valle-central', valle: 'Curicó', cepas: ['País', 'Cabernet Sauvignon'], estilo: 'rescate de cepas', segmento: 'Patrimonial', terruno: 'Molina; rescate de País de viñas viejas', destacados: ['No Es Pituko País', 'Reserva Cabernet'], coords: { lat: -35.060, lng: -71.290 } },

  // ========== VALLE CENTRAL – MAULE ==========
  { nombre: 'Viña Garage Wine Co.', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'País', 'Cabernet Sauvignon'], estilo: 'garage wine, baja intervención', segmento: 'Natural premium', terruno: 'Truquilemu (Sauzal); viñedos viejos de Carignan en secano', destacados: ['Truquilemu Carignan', 'Old Vine Pale'], coords: { lat: -35.920, lng: -72.420 } },
  { nombre: 'Louis-Antoine Luyt', region: 'valle-central', valle: 'Maule', cepas: ['País', 'Cinsault', 'Moscatel de Alejandría'], estilo: 'sin sulfitos', segmento: 'Vino vivo', terruno: 'Maule e Itata; País de pie franco, sin aditivos', destacados: ['Pipeño Carignan', 'El Pueblo País'], coords: { lat: -35.780, lng: -72.050 } },
  { nombre: 'Viña J. Bouchon', region: 'valle-central', valle: 'Maule', cepas: ['País', 'Cabernet Sauvignon', 'Semillón'], estilo: 'rescate de cepas', segmento: 'Patrimonial', terruno: 'Mingre; País Salvaje que trepa los árboles del bosque', destacados: ['País Salvaje', 'Las Mercedes Granito'], coords: { lat: -35.550, lng: -72.050 } },
  { nombre: 'Viña González Bastías', region: 'valle-central', valle: 'Maule', cepas: ['País', 'Moscatel de Alejandría', 'Semillón'], estilo: 'tinajas de greda', segmento: 'Patrimonial', terruno: 'Secano de Loncomilla; viñas centenarias junto al río Maule', destacados: ['Naranjo', 'A Quatro Manos'], coords: { lat: -35.550, lng: -71.850 } },
  { nombre: 'El Viejo Almacén de Sauzal', region: 'valle-central', valle: 'Maule', cepas: ['País', 'Cinsault'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Sauzal; País de más de 200 años, Renán Cancino', destacados: ['Huaso de Sauzal', 'Tinaja'], coords: { lat: -35.850, lng: -72.100 } },
  { nombre: 'Viña Gillmore', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'Cinsault', 'Cabernet Sauvignon'], estilo: 'baja intervención', segmento: 'Vigno (Carignan viejos)', terruno: 'Loncomilla (San Javier); viñedos de secano', destacados: ['Hacedor de Mundos Carignan', 'Vigno'], coords: { lat: -35.620, lng: -71.720 } },
  { nombre: 'Viña Meli', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'Sauvignon Blanc'], estilo: 'orgánico', segmento: 'Vigno', terruno: 'Cauquenes; Carignan de secano', destacados: ['Meli Carignan', 'Marima'], coords: { lat: -35.970, lng: -72.310 } },
  { nombre: 'García + Schwaderer', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'País'], estilo: 'baja intervención', segmento: 'Vigno', terruno: 'Secano de Maule; proyecto de enólogos', destacados: ['Bravado Carignan', 'Cacharro País'], coords: { lat: -35.700, lng: -71.950 } },
  { nombre: 'Viña Maitia', region: 'valle-central', valle: 'Maule', cepas: ['Cinsault', 'País', 'Moscatel de Alejandría'], estilo: 'natural', segmento: 'Natural', terruno: 'Maule; viñas de secano, vinos de baja intervención', destacados: ['Aupa Pipeño', 'Weon Naranjo'], coords: { lat: -35.600, lng: -71.800 } },

  // ========== SUR – ITATA ==========
  { nombre: 'A Los Viñateros Bravos', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault', 'Moscatel de Alejandría'], estilo: 'sin sulfitos', segmento: 'Vino vivo', terruno: 'Guarilihue; granito, pie franco, Leonardo Erazo', destacados: ['Granítico País', 'Volcánico Cinsault'], coords: { lat: -36.620, lng: -72.660 } },
  { nombre: 'Rogue Vine', region: 'sur', valle: 'Itata', cepas: ['Cinsault', 'País'], estilo: 'natural', segmento: 'Natural', terruno: 'Itata; Justin Decker y Daniel Bañados', destacados: ['Grand Itata Tinto', 'Super Itata Blanco'], coords: { lat: -36.610, lng: -72.640 } },
  { nombre: 'Pedro Parra y Familia', region: 'sur', valle: 'Itata', cepas: ['Cinsault'], estilo: 'terroirista', segmento: 'Alta gama natural', terruno: 'Guarilihue; Cinsault de suelos graníticos por parcela', destacados: ['Hirsute', 'Imaginador'], coords: { lat: -36.622, lng: -72.668 } },
  { nombre: 'Roberto Henríquez', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault', 'Moscatel de Alejandría'], estilo: 'sin sulfitos', segmento: 'Vino vivo', terruno: 'Itata y Bío Bío; viñas patrimoniales de secano', destacados: ['Santa Juana País', 'Naranjo'], coords: { lat: -36.550, lng: -72.550 } },
  { nombre: 'Macatho', region: 'sur', valle: 'Itata', cepas: ['Moscatel de Alejandría', 'País', 'Cinsault'], estilo: 'fermentación espontánea', segmento: 'Natural', terruno: 'Coelemu; pequeños viñedos patrimoniales', destacados: ['Macatho Moscatel', 'Macatho País'], coords: { lat: -36.490, lng: -72.700 } },

  // ========== SUR – BIOBÍO ==========
  { nombre: 'Viña Cacique Maravilla', region: 'sur', valle: 'Biobío', cepas: ['País', 'Moscatel de Alejandría', 'Cinsault'], estilo: 'fermentación espontánea', segmento: 'Patrimonial', terruno: 'Yumbel; viñas centenarias, familia Moraga', destacados: ['Pipeño', 'Gutiño País'], coords: { lat: -37.100, lng: -72.560 } },
  { nombre: 'Pandolfi Price', region: 'sur', valle: 'Biobío', cepas: ['Pinot Noir', 'Chardonnay', 'Sauvignon Blanc'], estilo: 'orgánico', segmento: 'Premium', terruno: 'Bío Bío; clima frío, suelos volcánicos', destacados: ['Los Patricios Pinot Noir', 'Anpta Sauvignon Blanc'], coords: { lat: -37.050, lng: -72.450 } },

  // ========== SUR – MALLECO ==========
  { nombre: 'Viña Aquitania (Sol de Sol)', region: 'sur', valle: 'Malleco', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Alta gama', terruno: 'Traiguén; clima frío extremo, suelos rojos volcánicos', destacados: ['Sol de Sol Chardonnay', 'Sol de Sol Pinot Noir'], coords: { lat: -38.250, lng: -72.670 } },
];

export const CEPAS = [
  { nombre: 'País', tipo: 'tinta', nota: 'La uva más antigua de Chile (siglo XVI). Vinos livianos, frescos y rústicos; base del rescate patrimonial en Itata, Maule y Biobío.' },
  { nombre: 'Cinsault', tipo: 'tinta', nota: 'Cepa mediterránea que en Itata y Maule da tintos florales, suaves y muy bebibles. Reina del vino natural chileno.' },
  { nombre: 'Carignan', tipo: 'tinta', nota: 'En el secano de Maule encontró viñedos viejos (80+ años). Vinos potentes, tánicos y de gran acidez; alma del sello VIGNO.' },
  { nombre: 'Moscatel de Alejandría', tipo: 'blanca', nota: 'Uva aromática del secano sur, vinificada en tinajas de greda. Blancos secos o naranjos, florales y muy frescos.' },
  { nombre: 'Syrah', tipo: 'tinta', nota: 'Versátil: potente y especiada en climas cálidos, fresca y floral en costa y montaña (Elqui, Casablanca).' },
  { nombre: 'Carménère', tipo: 'tinta', nota: 'La cepa emblema de Chile. En versiones de baja intervención muestra fruta pura, pimentón y taninos suaves.' },
  { nombre: 'Cabernet Sauvignon', tipo: 'tinta', nota: 'La más plantada del país. En el Maipo y el secano da tintos estructurados de larga guarda.' },
  { nombre: 'Chardonnay', tipo: 'blanca', nota: 'En climas fríos (Limarí, Malleco) logra tensión y mineralidad; fermentado con levaduras nativas en los proyectos naturales.' },
  { nombre: 'Pinot Noir', tipo: 'tinta', nota: 'Cepa de clima frío; en Casablanca, Leyda y Malleco da tintos finos, frescos y de textura sedosa.' },
  { nombre: 'Sauvignon Blanc', tipo: 'blanca', nota: 'La estrella blanca de los valles costeros (Casablanca, Leyda). Cítrico y herbáceo, con gran salinidad marina.' },
  { nombre: 'Garnacha', tipo: 'tinta', nota: 'Rara en Chile; en el alto Elqui aporta frescura y especias a vinos de gran altitud.' },
  { nombre: 'Malbec', tipo: 'tinta', nota: 'Presente en viñas de montaña y secano; fruta intensa y taninos amables en manos de bajo intervención.' },
  { nombre: 'Semillón', tipo: 'blanca', nota: 'Cepa histórica rescatada en el secano de Maule; blancos con cuerpo, textura y potencial de guarda.' },
];

export const VALLE_COORDS = {
  'Elqui': { lat: -30.03, lng: -70.71 },
  'Limarí': { lat: -30.60, lng: -71.30 },
  'Casablanca': { lat: -33.30, lng: -71.41 },
  'San Antonio / Leyda': { lat: -33.55, lng: -71.50 },
  'Maipo': { lat: -33.70, lng: -70.85 },
  'Cachapoal': { lat: -34.28, lng: -70.80 },
  'Colchagua': { lat: -34.64, lng: -71.13 },
  'Curicó': { lat: -35.00, lng: -71.30 },
  'Maule': { lat: -35.70, lng: -71.90 },
  'Itata': { lat: -36.60, lng: -72.65 },
  'Biobío': { lat: -37.05, lng: -72.50 },
  'Malleco': { lat: -38.25, lng: -72.67 },
};

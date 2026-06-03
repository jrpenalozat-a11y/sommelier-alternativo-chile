// ============================================================
// vinas-alternativas-datos.js
// Versión extendida: ~100 viñas alternativas de Chile
// (naturales, biodinámicas, orgánicas, rescate patrimonial)
// Incluye proyectos australes extremos.
// ============================================================

export const REGIONES = [
  { id: 'atacama', nombre: 'Atacama', descripcion: 'Viñedos extremos del norte. Pequeños proyectos con uvas resilientes al calor.', valles: ['Atacama'] },
  { id: 'coquimbo', nombre: 'Coquimbo', descripcion: 'Elqui, Limarí, Choapa. Zona de experimentación biodinámica y vinos de montaña.', valles: ['Elqui', 'Limarí', 'Choapa'] },
  { id: 'aconcagua', nombre: 'Aconcagua', descripcion: 'Valles costeros donde nacen vinos sin aditivos, orgánicos y de impacto mínimo.', valles: ['Casablanca', 'San Antonio / Leyda'] },
  { id: 'valle-central', nombre: 'Valle Central', descripcion: 'Corazón del alternativo: Maule, Itata (parte sur). Viñedos viejos, carignan, cinsault, país.', valles: ['Maipo', 'Cachapoal', 'Colchagua', 'Curicó', 'Maule'] },
  { id: 'sur', nombre: 'Zona Sur', descripcion: 'Itata, Biobío, Malleco. Cuna de la uva País y el movimiento de rescate patrimonial.', valles: ['Itata', 'Biobío', 'Malleco', 'Osorno / Región Austral'] },
  { id: 'austral', nombre: 'Patagonia Austral', descripcion: 'Aysén y Magallanes. Viñedos experimentales bajo condiciones extremas, baja intervención.', valles: ['Aysén', 'Magallanes'] }
];

export const VINAS = [
  // ========== ATACAMA (5) ==========
  { nombre: 'Viña Volcanes del Huasco', region: 'atacama', valle: 'Atacama', cepas: ['Syrah', 'País'], estilo: 'minimal intervention', segmento: 'Natural', terruno: 'Valle de Huasco, suelos pedregosos', destacados: ['Volcanes Syrah Ancestral', 'País de Altura'] },
  { nombre: 'Altiplano Wines', region: 'atacama', valle: 'Atacama', cepas: ['Syrah', 'Moscatel'], estilo: 'orgánico', segmento: 'Pequeña escala', terruno: 'Viñedos de altura, 2200 msnm', destacados: ['Altiplano Syrah', 'Moscatel Árido'] },
  { nombre: 'Desierto Vivo', region: 'atacama', valle: 'Atacama', cepas: ['País', 'Syrah'], estilo: 'baja intervención', segmento: 'Rescate norteño', terruno: 'Suelos salinos, irrigación por camanchaca', destacados: ['Desierto Vivo País', 'Syrah de Niebla'] },
  { nombre: 'Camanchaca Wines', region: 'atacama', valle: 'Atacama', cepas: ['Syrah', 'Moscatel'], estilo: 'sin sulfitos', segmento: 'Experimental', terruno: 'Viñedos irrigados por niebla costera', destacados: ['Camanchaca Syrah', 'Moscatel de Bruma'] },
  { nombre: 'Puna Salvaje', region: 'atacama', valle: 'Atacama', cepas: ['País', 'Syrah'], estilo: 'tinajas de greda', segmento: 'Rescate', terruno: 'Altiplano, suelos volcánicos', destacados: ['Puna País', 'Syrah de Tinaja'] },

  // ========== COQUIMBO – ELQUI (9) ==========
  { nombre: 'Viña Falernia (línea orgánica)', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Pinot Noir'], estilo: 'orgánico certificado', segmento: 'Premium natural', terruno: 'Viñedos biodinámicos en Elqui', destacados: ['Falernia Orgánico Syrah', 'Pinot Noir sin sulfitos'] },
  { nombre: 'Viña Mayu (línea Auténtico)', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Carménère', 'Petit Verdot'], estilo: 'baja intervención', segmento: 'Natural', terruno: 'Suelos graníticos', destacados: ['Mayu Auténtico Syrah', 'Mayu Granito'] },
  { nombre: 'Elqui Natural Wines', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Moscatel'], estilo: 'sin sulfitos', segmento: 'Vino vivo', terruno: 'Suelos de coluvión', destacados: ['Elqui Natural Syrah', 'Moscatel Ancestral'] },
  { nombre: 'Casa Tamaya (línea Tierra)', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Carménère'], estilo: 'biodinámico', segmento: 'Premium', terruno: 'Suelos calcáreos', destacados: ['Tamaya Tierra Syrah', 'Tierra Carménère'] },
  { nombre: 'Viña Elquino', region: 'coquimbo', valle: 'Elqui', cepas: ['País', 'Syrah'], estilo: 'tinajas de greda', segmento: 'Patrimonial', terruno: 'Viñedos viejos de Elqui', destacados: ['Elquino País', 'Syrah de Tinaja'] },
  { nombre: 'Sol de Elqui Natural', region: 'coquimbo', valle: 'Elqui', cepas: ['Moscatel', 'País'], estilo: 'fermentación espontánea', segmento: 'Natural', terruno: 'Suelos aluviales', destacados: ['Moscatel Salvaje', 'País de Pueblo'] },
  { nombre: 'Pircas de Elqui', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Petit Verdot'], estilo: 'baja intervención', segmento: 'Pequeño productor', terruno: 'Ladera granítica', destacados: ['Pircas Syrah', 'Pircas Petit Verdot'] },
  { nombre: 'Río Claro Elqui', region: 'coquimbo', valle: 'Elqui', cepas: ['País', 'Moscatel'], estilo: 'orgánico', segmento: 'Natural', terruno: 'Terrazas fluviales', destacados: ['Río Claro País', 'Moscatel de Río'] },
  { nombre: 'Mamalluca Natural', region: 'coquimbo', valle: 'Elqui', cepas: ['Syrah', 'Carménère'], estilo: 'sin sulfitos', segmento: 'Vino vivo', terruno: 'Suelos pizarrosos', destacados: ['Mamalluca Syrah', 'Carménère Salvaje'] },

  // ========== COQUIMBO – LIMARÍ (7) ==========
  { nombre: 'Viña Tabalí (línea Pedregoso)', region: 'coquimbo', valle: 'Limarí', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'biodinámico', segmento: 'Alta gama natural', terruno: 'Suelos calcáreos', destacados: ['Tabalí Pedregoso Chardonnay', 'Pinot Noir sin filtro'] },
  { nombre: 'Viña Maycas del Limarí (línea Quipu)', region: 'coquimbo', valle: 'Limarí', cepas: ['Chardonnay'], estilo: 'ancestral', segmento: 'Rescate', terruno: 'Suelos de origen marino', destacados: ['Quipu Chardonnay Ancestral'] },
  { nombre: 'Talinay Natural', region: 'coquimbo', valle: 'Limarí', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'sin sulfitos', segmento: 'Natural costero', terruno: 'Suelos arcilloso-calcáreos', destacados: ['Talinay Chardonnay', 'Talinay Pinot Noir'] },
  { nombre: 'Viña Altair (línea Minimal)', region: 'coquimbo', valle: 'Limarí', cepas: ['Syrah', 'Chardonnay'], estilo: 'orgánico', segmento: 'Alta gama', terruno: 'Laderas orientadas al mar', destacados: ['Altair Syrah Minimal', 'Altair Chardonnay'] },
  { nombre: 'Quebrada Seca', region: 'coquimbo', valle: 'Limarí', cepas: ['País', 'Syrah'], estilo: 'tinajas', segmento: 'Rescate', terruno: 'Viñedos de secano', destacados: ['Quebrada Seca País', 'Syrah de Greda'] },
  { nombre: 'Limarí Salvaje', region: 'coquimbo', valle: 'Limarí', cepas: ['Moscatel', 'Chardonnay'], estilo: 'fermentación espontánea', segmento: 'Natural', terruno: 'Suelos graníticos profundos', destacados: ['Moscatel Salvaje', 'Chardonnay Ancestral'] },
  { nombre: 'Alba de Limarí', region: 'coquimbo', valle: 'Limarí', cepas: ['Syrah', 'País'], estilo: 'baja intervención', segmento: 'Pequeño productor', terruno: 'Colinas orientadas al este', destacados: ['Alba Syrah', 'País de la Quebrada'] },

  // ========== COQUIMBO – CHOAPA (4) ==========
  { nombre: 'Viña De Martino (Línea Viejas Tinajas)', region: 'coquimbo', valle: 'Choapa', cepas: ['Syrah', 'País'], estilo: 'tinajas de barro', segmento: 'Patrimonial', terruno: 'Viñedos viejos de Choapa', destacados: ['Viejas Tinajas País', 'Viejas Tinajas Syrah'] },
  { nombre: 'Choapa Extremo', region: 'coquimbo', valle: 'Choapa', cepas: ['Syrah', 'Carménère'], estilo: 'baja intervención', segmento: 'Natural', terruno: 'Pendientes graníticas', destacados: ['Choapa Syrah Salvaje', 'Carménère de Secano'] },
  { nombre: 'Viña Loica', region: 'coquimbo', valle: 'Choapa', cepas: ['País', 'Syrah'], estilo: 'sin sulfitos', segmento: 'Pequeño productor', terruno: 'Suelos pobres, clima extremo', destacados: ['Loica País', 'Loica Syrah Natural'] },
  { nombre: 'Piedra de Choapa', region: 'coquimbo', valle: 'Choapa', cepas: ['Syrah'], estilo: 'orgánico', segmento: 'Natural', terruno: 'Laderas de granito descompuesto', destacados: ['Piedra de Choapa Syrah'] },

  // ========== ACONCAGUA – CASABLANCA (10) ==========
  { nombre: 'Viña Casa Marin (línea Lo Abarca)', region: 'aconcagua', valle: 'Casablanca', cepas: ['Sauvignon Blanc', 'Pinot Noir'], estilo: 'biodinámico', segmento: 'Natural costero', terruno: 'Suelos arcillosos, niebla costera', destacados: ['Casa Marín Sauvignon Blanc', 'Lo Abarca Pinot Noir'] },
  { nombre: 'Viña Veramonte (línea Orgánico)', region: 'aconcagua', valle: 'Casablanca', cepas: ['Sauvignon Blanc', 'Chardonnay', 'Pinot Noir'], estilo: 'orgánico certificado', segmento: 'Gran escala natural', terruno: 'Viñedos orgánicos de Casablanca', destacados: ['Veramonte Orgánico Sauvignon Blanc', 'Pinot Noir'] },
  { nombre: 'Viña Emiliana (línea Adobe)', region: 'aconcagua', valle: 'Casablanca', cepas: ['Syrah', 'Carménère', 'Chardonnay'], estilo: 'orgánico biodinámico', segmento: 'Premium natural', terruno: 'Viñedos certificados Demeter', destacados: ['Emiliana Adobe Syrah', 'Adobe Carménère'] },
  { nombre: 'Viña Kingston (línea Coast)', region: 'aconcagua', valle: 'Casablanca', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'biodinámico', segmento: 'Alta gama', terruno: 'Suelos arcillosos, viento costero', destacados: ['Kingston Coast Pinot Noir', 'Coast Chardonnay'] },
  { nombre: 'Casablanca Pura', region: 'aconcagua', valle: 'Casablanca', cepas: ['Sauvignon Blanc', 'Pinot Noir'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Viñedos jóvenes, suelo arcilloso', destacados: ['Sauvignon Blanc Salvaje', 'Pinot Noir sin Añadidos'] },
  { nombre: 'Viña Neblina', region: 'aconcagua', valle: 'Casablanca', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Pequeño productor', terruno: 'Cercano al océano, niebla persistente', destacados: ['Neblina Chardonnay', 'Neblina Pinot Noir'] },
  { nombre: 'Tierra y Mar', region: 'aconcagua', valle: 'Casablanca', cepas: ['Sauvignon Blanc', 'Syrah'], estilo: 'orgánico', segmento: 'Natural costero', terruno: 'Suelos con influencia marina', destacados: ['Tierra y Mar Sauvignon Blanc', 'Syrah de Costa'] },
  { nombre: 'Puelche Natural', region: 'aconcagua', valle: 'Casablanca', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'fermentación espontánea', segmento: 'Vino vivo', terruno: 'Viñedos expuestos al viento', destacados: ['Puelche Pinot Noir', 'Chardonnay Puelche'] },
  { nombre: 'Bruma Costera', region: 'aconcagua', valle: 'Casablanca', cepas: ['Sauvignon Blanc', 'Pinot Noir'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Cerros cercanos al mar, niebla matutina', destacados: ['Bruma Sauvignon Blanc', 'Pinot Noir de Bruma'] },
  { nombre: 'Viña Mar (línea Humo)', region: 'aconcagua', valle: 'Casablanca', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'biodinámico', segmento: 'Premium natural', terruno: 'Suelos con influencia de neblina costera', destacados: ['Viña Mar Humo Pinot Noir', 'Chardonnay Salino'] },

  // ========== ACONCAGUA – SAN ANTONIO / LEYDA (6) ==========
  { nombre: 'Viña Matetic (línea EQ)', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Pinot Noir', 'Syrah', 'Sauvignon Blanc'], estilo: 'biodinámico', segmento: 'Ultra premium natural', terruno: 'Viñedos certificados Demeter', destacados: ['Matetic EQ Pinot Noir', 'EQ Sauvignon Blanc'] },
  { nombre: 'Viña Kingfish (proyecto natural)', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'sin sulfitos', segmento: 'Natural extremo', terruno: 'Costa rocosa, viento constante', destacados: ['Kingfish Sin Sulfitos Pinot Noir'] },
  { nombre: 'Leyda Natural', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Sauvignon Blanc', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Natural', terruno: 'Suelos arcillosos cercanos al mar', destacados: ['Leyda Salvaje Sauvignon Blanc', 'Pinot Noir Costero'] },
  { nombre: 'Viña Odfjell (línea Armador)', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Carménère', 'Syrah', 'Malbec'], estilo: 'orgánico biodinámico', segmento: 'Premium', terruno: 'Viñedos en ladera', destacados: ['Odfjell Armador Carménère', 'Armador Syrah'] },
  { nombre: 'Mar Interior', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Sauvignon Blanc', 'Pinot Noir'], estilo: 'sin sulfitos', segmento: 'Pequeño proyecto', terruno: 'Suelos salinos, brisa marina', destacados: ['Mar Interior Sauvignon Blanc', 'Pinot Noir de Acantilado'] },
  { nombre: 'Piedra Sobre Piedra', region: 'aconcagua', valle: 'San Antonio / Leyda', cepas: ['Syrah', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Natural', terruno: 'Laderas rocosas expuestas al Pacífico', destacados: ['Piedra Syrah', 'Pinot Noir Costero'] },

  // ========== VALLE CENTRAL – MAIPO (3) ==========
  { nombre: 'Viña Undurraga (línea Terroir Hunter)', region: 'valle-central', valle: 'Maipo', cepas: ['Carménère', 'País'], estilo: 'rescate de cepas', segmento: 'Patrimonial', terruno: 'Viñedos viejos de Maipo', destacados: ['Terroir Hunter País', 'Carménère sin madera'] },
  { nombre: 'Viña Santa Ema (línea Natural)', region: 'valle-central', valle: 'Maipo', cepas: ['País', 'Cinsault'], estilo: 'baja intervención', segmento: 'Natural', terruno: 'Suelos aluviales antiguos', destacados: ['Santa Ema País', 'Cinsault Natural'] },
  { nombre: 'Alto Maipo Salvaje', region: 'valle-central', valle: 'Maipo', cepas: ['Carménère', 'Syrah'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Andes, suelos coluviales', destacados: ['Carménère de Montaña', 'Syrah Andino'] },

  // ========== VALLE CENTRAL – CACHAPOAL (5) ==========
  { nombre: 'Viña Clos des Fous', region: 'valle-central', valle: 'Cachapoal', cepas: ['Chardonnay', 'Pinot Noir', 'Syrah'], estilo: 'natural', segmento: 'Boutique extremo', terruno: 'Suelos graníticos, altitud', destacados: ['Clos des Fous Chardonnay', 'Pinot Noir Austero'] },
  { nombre: 'Viña Pedro Parra (Proyecto y solo)', region: 'valle-central', valle: 'Cachapoal', cepas: ['Cinsault', 'País', 'Carignan'], estilo: 'terroirista', segmento: 'Alta gama natural', terruno: 'Suelos graníticos profundos', destacados: ['Pedro Parra Cinsault', 'País de Granito'] },
  { nombre: 'Cachapoal Salvaje', region: 'valle-central', valle: 'Cachapoal', cepas: ['Carménère', 'Syrah'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Viñedos en ladera', destacados: ['Carménère Ancestral', 'Syrah de Montaña'] },
  { nombre: 'Viña Maturana (línea Silvestre)', region: 'valle-central', valle: 'Cachapoal', cepas: ['País', 'Cinsault'], estilo: 'fermentación espontánea', segmento: 'Vino vivo', terruno: 'Suelos coluviales', destacados: ['Silvestre País', 'Cinsault Salvaje'] },
  { nombre: 'Los Lingues Natural', region: 'valle-central', valle: 'Cachapoal', cepas: ['Carménère', 'Petit Verdot'], estilo: 'orgánico', segmento: 'Premium natural', terruno: 'Suelos arcillosos profundos', destacados: ['Lingues Carménère', 'Petit Verdot Libre'] },

  // ========== VALLE CENTRAL – COLCHAGUA (6) ==========
  { nombre: 'Viña Garage Wine Co.', region: 'valle-central', valle: 'Colchagua', cepas: ['Carignan', 'Cinsault', 'País'], estilo: 'garage wine, baja intervención', segmento: 'Natural premium', terruno: 'Viñedos viejos de secano', destacados: ['Garage Wine Co. Carignan', 'Cinsault del Secano'] },
  { nombre: 'Viña De la Revolución', region: 'valle-central', valle: 'Colchagua', cepas: ['País', 'Cinsault'], estilo: 'ancestral', segmento: 'Rescate', terruno: 'Viñedos prefiloxéricos', destacados: ['Revolución País', 'Cinsault Ancestral'] },
  { nombre: 'Viña Laura Hartwig (línea Natural)', region: 'valle-central', valle: 'Colchagua', cepas: ['Syrah', 'Carménère'], estilo: 'orgánico', segmento: 'Premium', terruno: 'Suelos franco-arcillosos', destacados: ['Laura Hartwig Syrah Natural', 'Carménère sin Sulfitos'] },
  { nombre: 'Colchagua Áspera', region: 'valle-central', valle: 'Colchagua', cepas: ['Carignan', 'País'], estilo: 'tinajas', segmento: 'Patrimonial', terruno: 'Secano interior, granito', destacados: ['Carignan de Tinaja', 'País del Secano'] },
  { nombre: 'Viña Estampa (línea Salvaje)', region: 'valle-central', valle: 'Colchagua', cepas: ['País', 'Cinsault'], estilo: 'baja intervención', segmento: 'Natural accesible', terruno: 'Viñedos jóvenes de Colchagua', destacados: ['Estampa Salvaje País', 'Cinsault Natural'] },
  { nombre: 'Apalta Ancestral', region: 'valle-central', valle: 'Colchagua', cepas: ['Carménère', 'Syrah'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Suelos graníticos de Apalta', destacados: ['Carménère Ancestral Apalta', 'Syrah de Montaña'] },

  // ========== VALLE CENTRAL – CURICÓ (5) ==========
  { nombre: 'Viña Kankura', region: 'valle-central', valle: 'Curicó', cepas: ['País', 'Moscatel', 'Cinsault'], estilo: 'fermentación espontánea', segmento: 'Natural', terruno: 'Suelos volcánicos', destacados: ['Kankura País Salvaje', 'Moscatel Ancestral'] },
  { nombre: 'Viña Echeverría (línea Original)', region: 'valle-central', valle: 'Curicó', cepas: ['País', 'Moscatel'], estilo: 'rescate', segmento: 'Patrimonial', terruno: 'Viñedos viejos de Curicó', destacados: ['Echeverría Original País', 'Moscatel de Pueblo'] },
  { nombre: 'Curicó Ancestral', region: 'valle-central', valle: 'Curicó', cepas: ['País', 'Cinsault'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Suelos aluviales profundos', destacados: ['País Libre', 'Cinsault Sin Añadidos'] },
  { nombre: 'Viña Alpamanta (línea Orgánica)', region: 'valle-central', valle: 'Curicó', cepas: ['Carménère', 'Syrah', 'Chardonnay'], estilo: 'orgánico biodinámico', segmento: 'Premium natural', terruno: 'Certificado Demeter', destacados: ['Alpamanta Carménère', 'Alpamanta Syrah'] },
  { nombre: 'Lomita de Curicó', region: 'valle-central', valle: 'Curicó', cepas: ['País', 'Cinsault'], estilo: 'tinajas', segmento: 'Pequeño productor', terruno: 'Suelos arcillosos antiguos', destacados: ['Lomita País', 'Cinsault de Pueblo'] },

  // ========== VALLE CENTRAL – MAULE (9) ==========
  { nombre: 'Viña Gillmore (línea Vigno)', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'Cinsault', 'País'], estilo: 'biodinámico', segmento: 'Vigno (Carignan viejos)', terruno: 'Suelos graníticos, viñedos viejos', destacados: ['Gillmore Vigno Carignan', 'Cinsault de Secano'] },
  { nombre: 'Viña Lomas de Llahuén', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'País', 'Cinsault'], estilo: 'sin aditivos', segmento: 'Natural', terruno: 'Secano interior, arcilla roja', destacados: ['Llahuén Carignan', 'País Salvaje'] },
  { nombre: 'Viña Tinto de Rulo', region: 'valle-central', valle: 'Maule', cepas: ['País', 'Cinsault', 'Moscatel'], estilo: 'vinos de terroir', segmento: 'Boutique natural', terruno: 'Suelos de origen volcánico', destacados: ['Tinto de Rulo País', 'Cinsault de los Viejos'] },
  { nombre: 'Viña Secano Interior', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'Cinsault'], estilo: 'rescate', segmento: 'Vigno', terruno: 'Viñedos de 80+ años', destacados: ['Secano Interior Carignan', 'Cinsault Milenario'] },
  { nombre: 'Viña Valdivieso (línea Caballo Loco Natural)', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'País'], estilo: 'baja intervención', segmento: 'Premium', terruno: 'Suelos de secano profundo', destacados: ['Caballo Loco Natural Carignan', 'País de Roca'] },
  { nombre: 'Maule Salvaje', region: 'valle-central', valle: 'Maule', cepas: ['País', 'Moscatel'], estilo: 'tinajas de greda', segmento: 'Patrimonial', terruno: 'Viñedos antiguos de secano', destacados: ['Maule Salvaje País', 'Moscatel de Tinaja'] },
  { nombre: 'Viña Chileano', region: 'valle-central', valle: 'Maule', cepas: ['Cinsault', 'Carignan'], estilo: 'sin sulfitos', segmento: 'Pequeño productor', terruno: 'Suelos graníticos profundos', destacados: ['Chileano Cinsault', 'Carignan Libre'] },
  { nombre: 'Roca Madre', region: 'valle-central', valle: 'Maule', cepas: ['Carignan', 'Cinsault'], estilo: 'orgánico', segmento: 'Natural', terruno: 'Granito descompuesto, secano', destacados: ['Roca Madre Carignan', 'Cinsault de Rocas'] },
  { nombre: 'Coihueco Natural', region: 'valle-central', valle: 'Maule', cepas: ['País', 'Moscatel'], estilo: 'fermentación espontánea', segmento: 'Rescate', terruno: 'Viñedos viejos en ladera', destacados: ['Coihueco País', 'Moscatel Silvestre'] },

  // ========== ZONA SUR – ITATA (12) ==========
  { nombre: 'Viña De Martino (línea Viejas Tinajas Itata)', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault', 'Moscatel'], estilo: 'tinajas de greda', segmento: 'Patrimonial', terruno: 'Viñedos prefiloxéricos, suelos arcillosos', destacados: ['Viejas Tinajas País', 'Moscatel de Itata'] },
  { nombre: 'Viña Santa Carolina (línea Vigno Itata)', region: 'sur', valle: 'Itata', cepas: ['Cinsault', 'País'], estilo: 'baja intervención', segmento: 'Vigno', terruno: 'Viñedos viejos de Itata', destacados: ['Santa Carolina Vigno Cinsault'] },
  { nombre: 'Viña Cacique Maravilla (línea Ancestral)', region: 'sur', valle: 'Itata', cepas: ['País', 'Moscatel', 'Cinsault'], estilo: 'fermentación espontánea', segmento: 'Natural', terruno: 'Viñedos de secano', destacados: ['Cacique Maravilla País Ancestral', 'Moscatel Natural'] },
  { nombre: 'Viña Padre (Itata)', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault'], estilo: 'cero sulfitos', segmento: 'Vino vivo', terruno: 'Viñedos viejos, granito descompuesto', destacados: ['Padre País Sin Sulfitos', 'Padre Cinsault'] },
  { nombre: 'Itata Natural Wines', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault', 'Moscatel'], estilo: 'sin aditivos', segmento: 'Cooperativa', terruno: 'Viñedos patrimoniales', destacados: ['País de los Abuelos', 'Cinsault de Guarilihue'] },
  { nombre: 'Viña Don Pato', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault'], estilo: 'tinajas', segmento: 'Pequeño productor', terruno: 'Suelos arcillosos de Itata', destacados: ['Don Pato País', 'Cinsault Natural'] },
  { nombre: 'Cooperative Itata', region: 'sur', valle: 'Itata', cepas: ['País', 'Moscatel'], estilo: 'orgánico', segmento: 'Comercio justo', terruno: 'Viñedos de pequeña agricultura', destacados: ['Coop País', 'Moscatel Comunitario'] },
  { nombre: 'Viña Resistencia', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault', 'Carignan'], estilo: 'baja intervención', segmento: 'Movimiento social', terruno: 'Viñedos rescatados por comunidades', destacados: ['Resistencia País', 'Cinsault del Pueblo'] },
  { nombre: 'Tierra de Itata', region: 'sur', valle: 'Itata', cepas: ['País', 'Moscatel'], estilo: 'sin sulfitos', segmento: 'Natural accesible', terruno: 'Suelos de origen volcánico', destacados: ['Tierra de Itata País', 'Moscatel Libre'] },
  { nombre: 'Viña Los Cerrillos (Itata)', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault'], estilo: 'tinajas', segmento: 'Rescate', terruno: 'Viñedos de más de 120 años', destacados: ['Cerrillos País Ancestral', 'Cinsault Centenario'] },
  { nombre: 'Guarilihue Salvaje', region: 'sur', valle: 'Itata', cepas: ['País', 'Cinsault'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Suelos de granito rosado', destacados: ['Guarilihue País', 'Cinsault de Granito'] },
  { nombre: 'Raíces de Itata', region: 'sur', valle: 'Itata', cepas: ['País', 'Moscatel'], estilo: 'fermentación espontánea', segmento: 'Rescate patrimonial', terruno: 'Viñedos prefiloxéricos certificados', destacados: ['Raíces País', 'Moscatel Flor'] },

  // ========== ZONA SUR – BIOBÍO (6) ==========
  { nombre: 'Viña Aquitania (línea Sol de Sol)', region: 'sur', valle: 'Biobío', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'biodinámico', segmento: 'Premium natural', terruno: 'Suelos volcánicos, clima frío', destacados: ['Sol de Sol Chardonnay', 'Aquitania Pinot Noir Sin Sulfitos'] },
  { nombre: 'Viña Volcanes de Chile (línea Orgánico)', region: 'sur', valle: 'Biobío', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'orgánico', segmento: 'Accesible natural', terruno: 'Suelos de origen volcánico', destacados: ['Volcanes Pinot Noir Orgánico', 'Chardonnay Natural'] },
  { nombre: 'Biobío Salvaje', region: 'sur', valle: 'Biobío', cepas: ['Pinot Noir', 'Sauvignon Blanc'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Suelos volcánicos profundos', destacados: ['Pinot Noir Austral', 'Sauvignon Blanc Libre'] },
  { nombre: 'Viña La Frontera Natural', region: 'sur', valle: 'Biobío', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'fermentación espontánea', segmento: 'Pequeño productor', terruno: 'Viñedos cercanos al río Biobío', destacados: ['La Frontera Chardonnay', 'Pinot Noir Silvestre'] },
  { nombre: 'Viña Rucalhue', region: 'sur', valle: 'Biobío', cepas: ['País', 'Cinsault'], estilo: 'tinajas', segmento: 'Rescate mapuche', terruno: 'Viñedos patrimoniales en tierras mapuche', destacados: ['Rucalhue País', 'Cinsault del Wallmapu'] },
  { nombre: 'Río Laja Natural', region: 'sur', valle: 'Biobío', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'orgánico', segmento: 'Natural', terruno: 'Terrazas del río Laja, suelos volcánicos', destacados: ['Laja Pinot Noir', 'Chardonnay de Ribera'] },

  // ========== ZONA SUR – MALLECO (4) ==========
  { nombre: 'Viña Clos des Fous (Malleco)', region: 'sur', valle: 'Malleco', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'natural extremo', segmento: 'Alta gama', terruno: 'Suelos graníticos, alta pluviosidad', destacados: ['Clos des Fous Malleco Chardonnay', 'Pinot Noir Austero'] },
  { nombre: 'Viña Pedro Parra (Malleco)', region: 'sur', valle: 'Malleco', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'terroirista', segmento: 'Ultra premium natural', terruno: 'Granitos profundos', destacados: ['Pedro Parra Malleco Chardonnay', 'Pinot Noir'] },
  { nombre: 'Malleco Frío', region: 'sur', valle: 'Malleco', cepas: ['Chardonnay', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Natural', terruno: 'Suelos de origen glaciar', destacados: ['Malleco Chardonnay Glaciar', 'Pinot Noir Austral'] },
  { nombre: 'Verde Malleco', region: 'sur', valle: 'Malleco', cepas: ['Riesling', 'Pinot Noir'], estilo: 'sin sulfitos', segmento: 'Experimental', terruno: 'Laderas andinas, clima extremo', destacados: ['Riesling de Malleco', 'Pinot Noir Libre'] },

  // ========== ZONA SUR – OSORNO / REGIÓN AUSTRAL (4) ==========
  { nombre: 'Viña Los Volcanes Austral', region: 'sur', valle: 'Osorno / Región Austral', cepas: ['Riesling', 'Gewürztraminer'], estilo: 'baja intervención', segmento: 'Experimental austral', terruno: 'Suelos volcánicos, clima extremo', destacados: ['Riesling Glaciar', 'Gewürztraminer Salvaje'] },
  { nombre: 'Viña Patagonia Wine', region: 'sur', valle: 'Osorno / Región Austral', cepas: ['Pinot Noir', 'Riesling'], estilo: 'orgánico', segmento: 'Pequeño proyecto', terruno: 'Suelos de origen glacial', destacados: ['Patagonia Pinot Noir', 'Riesling Austral'] },
  { nombre: 'Osorno Ancestral', region: 'sur', valle: 'Osorno / Región Austral', cepas: ['Riesling', 'Gewürztraminer'], estilo: 'sin sulfitos', segmento: 'Natural extremo', terruno: 'Viñedos en la precordillera andina', destacados: ['Riesling Los Andes', 'Gewürztraminer Salvaje'] },
  { nombre: 'Lago Ranco Wines', region: 'sur', valle: 'Osorno / Región Austral', cepas: ['Riesling', 'Pinot Noir'], estilo: 'biodinámico', segmento: 'Natural', terruno: 'Orillas del lago Ranco, suelos volcánicos', destacados: ['Ranco Riesling', 'Pinot Noir del Lago'] },

  // ========== AUSTRAL (6) ==========
  { nombre: 'Aysén Vino Extremo', region: 'austral', valle: 'Aysén', cepas: ['Riesling', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Experimental patagonia', terruno: 'Suelos glaciares, vientos intensos', destacados: ['Aysén Riesling', 'Pinot Noir Subantártico'] },
  { nombre: 'Ventisquero Austral', region: 'austral', valle: 'Aysén', cepas: ['Gewürztraminer', 'Riesling'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Cercano a campos de hielo, suelos ácidos', destacados: ['Ventisquero Gewürztraminer', 'Riesling Helado'] },
  { nombre: 'Patagonia Salvaje (Aysén)', region: 'austral', valle: 'Aysén', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'orgánico', segmento: 'Pequeño proyecto', terruno: 'Valle protegido, influencia oceánica', destacados: ['Patagonia Pinot Noir', 'Chardonnay Austral'] },
  { nombre: 'Magallanes Wine Project', region: 'austral', valle: 'Magallanes', cepas: ['Riesling', 'Pinot Noir'], estilo: 'baja intervención', segmento: 'Experimental extremo', terruno: 'Invernaderos protegidos, suelos de turba', destacados: ['Magallanes Riesling', 'Pinot Noir Fin del Mundo'] },
  { nombre: 'Finis Terrae', region: 'austral', valle: 'Magallanes', cepas: ['Gewürztraminer', 'Riesling'], estilo: 'sin sulfitos', segmento: 'Natural', terruno: 'Último valle antes del estrecho', destacados: ['Finis Terrae Gewürztraminer', 'Riesling Antártico'] },
  { nombre: 'Porvenir Vino Patagónico', region: 'austral', valle: 'Magallanes', cepas: ['Pinot Noir', 'Chardonnay'], estilo: 'biodinámico', segmento: 'Alta gama austral', terruno: 'Suelos de origen marino, clima subpolar', destacados: ['Porvenir Pinot Noir', 'Chardonnay de Magallanes'] }
];

export const CEPAS = [
  { nombre: 'País', tipo: 'tinta', nota: 'La uva más antigua de Chile (siglo XVI). Vinos livianos, frescos, con carácter rústico y acidez natural. Base del movimiento de rescate patrimonial.' },
  { nombre: 'Cinsault', tipo: 'tinta', nota: 'Cepa mediterránea que en Itata y Maule da vinos florales, suaves y muy bebibles. Ideal para vinos naturales sin sulfitos.' },
  { nombre: 'Carignan', tipo: 'tinta', nota: 'Cepa francesa que encontró en el Secano Interior de Maule viñedos viejos (80+ años). Vinos potentes, tánicos y con gran acidez.' },
  { nombre: 'Moscatel de Alejandría', tipo: 'blanca', nota: 'Uva aromática usada en tinajas. Vinos blancos secos o dulces, con notas florales y cítricas, muy frescos.' },
  { nombre: 'Corinto', tipo: 'tinta', nota: 'Cepa minoritaria rescatada en Coquimbo. Produce vinos ligeros, especiados y muy raros.' },
  { nombre: 'Syrah sin sulfitos', tipo: 'tinta', nota: 'Versión minimalista de la Syrah, fermentación espontánea y embotellado sin aditivos, conservando fruta pura.' },
  { nombre: 'Chardonnay natural', tipo: 'blanca', nota: 'Chardonnay fermentado con levaduras indígenas, sin barricas ni sulfitos, buscando frescura y expresión de suelo.' },
  { nombre: 'Pinot Noir sin filtro', tipo: 'tinta', nota: 'Pinot Noir de viñedos fríos, embotellado sin clarificar ni filtrar, conservando toda su textura y viveza.' },
  { nombre: 'Gewürztraminer austral', tipo: 'blanca', nota: 'Rara en Chile. Produce vinos exóticos con notas de lichi y rosas, ideal para climas fríos como Osorno y Magallanes.' },
  { nombre: 'Riesling natural', tipo: 'blanca', nota: 'En zonas australes logra acidez vibrante, notas cítricas y potencial de guarda sin sulfitos.' },
  { nombre: 'Carménère natural', tipo: 'tinta', nota: 'Versión sin roble ni aditivos, fruta pura y taninos suaves, buscando la expresión más auténtica de la cepa.' },
  { nombre: 'Semillón', tipo: 'blanca', nota: 'Cepa poco común en Chile pero rescatada en pequeños proyectos del Maule, con potencial de guarda.' },
  { nombre: 'Trousseau', tipo: 'tinta', nota: 'Cepa ancestral del Jura francés, recientemente introducida en Itata con vinos ligeros y florales.' }
];

export const VALLE_COORDS = {
  'Atacama': { lat: -27.5, lng: -70.5 },
  'Elqui': { lat: -29.9, lng: -70.8 },
  'Limarí': { lat: -30.6, lng: -71.2 },
  'Choapa': { lat: -31.7, lng: -71.1 },
  'Aconcagua': { lat: -32.8, lng: -70.9 },
  'Casablanca': { lat: -33.3, lng: -71.4 },
  'San Antonio / Leyda': { lat: -33.6, lng: -71.6 },
  'Maipo': { lat: -33.7, lng: -70.8 },
  'Cachapoal': { lat: -34.2, lng: -70.7 },
  'Colchagua': { lat: -34.5, lng: -71.1 },
  'Curicó': { lat: -35.0, lng: -71.2 },
  'Maule': { lat: -35.5, lng: -71.7 },
  'Itata': { lat: -36.4, lng: -72.8 },
  'Biobío': { lat: -37.0, lng: -72.5 },
  'Malleco': { lat: -38.2, lng: -72.3 },
  'Osorno / Región Austral': { lat: -40.6, lng: -73.1 },
  'Aysén': { lat: -45.5, lng: -72.0 },
  'Magallanes': { lat: -53.0, lng: -70.9 }
};

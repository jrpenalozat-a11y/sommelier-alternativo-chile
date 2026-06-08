import { useIdioma } from './context/IdiomaContext';
import { REGIONES, VINAS, CEPAS } from './data/vinas-alternativas-datos.js';
import { REGIONES_EN, CEPAS_EN, ESTILO_EN, SEGMENTO_EN } from './data/vinas-alternativas-datos.en.js';

// ───────── Cadenas de interfaz (ES / EN) ─────────
export const T = {
  es: {
    lema: 'Viñas naturales · Biodinámicas · Rescate de cepas',
    explorar: 'Explorar', cepas: 'Cepas',
    creadoPor: 'Creado por',
    buscarPlaceholder: 'Buscar viña, cepa o valle…',
    resultadosPara: (q) => `Resultados para “${q}”`,
    vinasEncontradas: (n) => `${n} ${n === 1 ? 'viña encontrada' : 'viñas encontradas'}`,
    mapa: 'Mapa',
    vinasDe: (v) => `Viñas de ${v}`,
    vinasCount: (n) => `${n} ${n === 1 ? 'viña' : 'viñas'}`,
    introSelecciona: 'Selecciona una región en el mapa para explorar sus valles y viñas alternativas.',
    sinVinas: 'No hay viñas para mostrar.',
    filtrarPorCepa: '🍇 Filtrar por cepa',
    limpiarFiltros: 'Limpiar filtros',
    terruno: 'Terruño', grapes: 'Cepas', vinosDestacados: 'Vinos destacados',
    fichaDescFallback: 'Viña alternativa chilena de baja intervención.',
    fichaTerrunoFallback: 'Suelos variados del valle.',
    cepasDeChile: 'Cepas del mundo alternativo',
    cepasIntro: 'Las variedades históricas y de baja intervención que definen el vino alternativo chileno. Toca una cepa para ver qué viñas la trabajan.',
    verVinasCon: (c) => `Ver viñas con ${c} →`,
    misFavoritas: 'Mis viñas favoritas',
    vinasGuardadas: (n) => `${n} ${n === 1 ? 'viña guardada' : 'viñas guardadas'}`,
    favVacio: 'No tienes viñas favoritas aún. Haz clic en el corazón ❤️ en cualquier viña para agregarla.',
    tipo: { tinta: 'Tinta', blanca: 'Blanca' },
    mapaTitulo: 'Viñas Alternativas de Chile',
    mapaSub: '· De norte a sur ·',
    mapaHint: 'Toca una zona para ver sus valles · toca un pin para ir al valle',
    mapaCargando: 'Cargando mapa de Chile…',
    mapaError: 'No se pudo cargar el mapa.',
    zonas: { atacama: 'Atacama', coquimbo: 'Coquimbo', aconcagua: 'Aconcagua', 'valle-central': 'Valle Central', sur: 'Sur', austral: 'Austral' },
    estilo: 'Estilo', segmento: 'Segmento',
    frasesEco: [
      '🌱 Vino que respeta la tierra',
      '🍃 Viñas vivas, suelos vivos',
      '♻️ Menos intervención, más expresión',
      '🌿 Biodinámica: la viña como un todo',
      '💧 Secano: cada gota cuenta',
      '🐞 Sin químicos, con biodiversidad',
      '🌎 Del terruño a la copa, sustentable',
      '🍇 Cepas patrimoniales que renacen',
    ],
    compartir: 'Compartir',
    masApps: 'Más de la familia',
    compartirTexto: 'Descubre las viñas alternativas de Chile 🌿',
    enlaceCopiado: 'Enlace copiado ✓',
    instalar: 'Instalar app',
    instalarAyuda: 'Para instalarla, abre el menú de tu navegador y elige «Agregar a pantalla de inicio» o «Instalar app».',
  },
  en: {
    lema: 'Natural · Biodynamic · Heritage-revival wineries',
    explorar: 'Explore', cepas: 'Grapes',
    creadoPor: 'Created by',
    buscarPlaceholder: 'Search winery, grape or valley…',
    resultadosPara: (q) => `Results for “${q}”`,
    vinasEncontradas: (n) => `${n} ${n === 1 ? 'winery found' : 'wineries found'}`,
    mapa: 'Map',
    vinasDe: (v) => `Wineries of ${v}`,
    vinasCount: (n) => `${n} ${n === 1 ? 'winery' : 'wineries'}`,
    introSelecciona: 'Select a region on the map to explore its valleys and alternative wineries.',
    sinVinas: 'No wineries to show.',
    filtrarPorCepa: '🍇 Filter by grape',
    limpiarFiltros: 'Clear filters',
    terruno: 'Terroir', grapes: 'Grapes', vinosDestacados: 'Flagship wines',
    fichaDescFallback: 'A Chilean low-intervention alternative winery.',
    fichaTerrunoFallback: 'Varied valley soils.',
    cepasDeChile: 'Grapes of the alternative world',
    cepasIntro: 'The historic, low-intervention varieties that define Chilean alternative wine. Tap a grape to see which wineries work with it.',
    verVinasCon: (c) => `See wineries with ${c} →`,
    misFavoritas: 'My favorite wineries',
    vinasGuardadas: (n) => `${n} ${n === 1 ? 'saved winery' : 'saved wineries'}`,
    favVacio: "You don't have any favorite wineries yet. Click the heart ❤️ on any winery to add it.",
    tipo: { tinta: 'Red', blanca: 'White' },
    mapaTitulo: 'Alternative Wineries of Chile',
    mapaSub: '· North to South ·',
    mapaHint: 'Tap a zone to see its valleys · tap a pin to go to the valley',
    mapaCargando: 'Loading map of Chile…',
    mapaError: 'Could not load the map.',
    zonas: { atacama: 'Atacama', coquimbo: 'Coquimbo', aconcagua: 'Aconcagua', 'valle-central': 'Central Valley', sur: 'South', austral: 'Austral' },
    estilo: 'Style', segmento: 'Segment',
    frasesEco: [
      '🌱 Wine that respects the land',
      '🍃 Living vines, living soils',
      '♻️ Less intervention, more expression',
      '🌿 Biodynamics: the vineyard as a whole',
      '💧 Dry-farmed: every drop counts',
      '🐞 No chemicals, full biodiversity',
      '🌎 From terroir to glass, sustainable',
      '🍇 Heritage grapes reborn',
    ],
    compartir: 'Share',
    masApps: 'More from the family',
    compartirTexto: "Discover Chile's alternative wineries 🌿",
    enlaceCopiado: 'Link copied ✓',
    instalar: 'Install app',
    instalarAyuda: 'To install it, open your browser menu and choose “Add to Home Screen” or “Install app”.',
  },
};

// Hook: cadenas de interfaz según el idioma activo (es por defecto)
export function useT() {
  const { idioma } = useIdioma();
  return T[idioma === 'en' ? 'en' : 'es'];
}

// Fusiona los datos base (español) con el overlay en inglés
export function getDatos(idioma) {
  if (idioma !== 'en') return { REGIONES, VINAS, CEPAS };
  return {
    REGIONES: REGIONES.map((r) => ({ ...r, ...(REGIONES_EN[r.id] || {}) })),
    VINAS: VINAS.map((v) => ({
      ...v,
      estilo: ESTILO_EN[v.estilo] || v.estilo,
      segmento: SEGMENTO_EN[v.segmento] || v.segmento,
    })),
    CEPAS: CEPAS.map((c) => ({ ...c, nota: CEPAS_EN[c.nombre] || c.nota })),
  };
}

// Hook: datos en el idioma activo
export function useDatos() {
  const { idioma } = useIdioma();
  return getDatos(idioma);
}

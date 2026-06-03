import React, { useMemo, useState } from 'react';
import { VINAS, REGIONES } from '../data/vinas-alternativas-datos';
import TarjetaVina from '../components/TarjetaVina';

function ExplorarPage({ onVerVina }) {
  const [busqueda, setBusqueda] = useState('');
  const [regionActiva, setRegionActiva] = useState('todas');

  const cepasUnicas = useMemo(() => {
    const set = new Set();
    VINAS.forEach(v => v.cepas.forEach(c => set.add(c)));
    return ['todas', ...[...set].sort()];
  }, []);
  const [cepaActiva, setCepaActiva] = useState('todas');

  const resultados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return VINAS.filter(v => {
      if (regionActiva !== 'todas' && v.region !== regionActiva) return false;
      if (cepaActiva !== 'todas' && !v.cepas.includes(cepaActiva)) return false;
      if (!q) return true;
      return (
        v.nombre.toLowerCase().includes(q) ||
        v.valle.toLowerCase().includes(q) ||
        v.estilo.toLowerCase().includes(q) ||
        v.cepas.some(c => c.toLowerCase().includes(q)) ||
        v.destacados.some(d => d.toLowerCase().includes(q))
      );
    });
  }, [busqueda, regionActiva, cepaActiva]);

  return (
    <main className="contenido">
      <section className="filtros">
        <input
          className="filtro-busqueda"
          type="search"
          placeholder="Buscar viña, cepa, valle o estilo…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="filtro-regiones">
          <button
            className={`region-chip ${regionActiva === 'todas' ? 'activo' : ''}`}
            onClick={() => setRegionActiva('todas')}
          >
            Todas las regiones
          </button>
          {REGIONES.map((r) => (
            <button
              key={r.id}
              className={`region-chip ${regionActiva === r.id ? 'activo' : ''}`}
              onClick={() => setRegionActiva(r.id)}
            >
              {r.nombre}
            </button>
          ))}
        </div>

        <div className="filtro-cepa">
          <label>Cepa:&nbsp;</label>
          <select value={cepaActiva} onChange={(e) => setCepaActiva(e.target.value)}>
            {cepasUnicas.map((c) => (
              <option key={c} value={c}>{c === 'todas' ? 'Todas las cepas' : c}</option>
            ))}
          </select>
        </div>
      </section>

      <p className="resultados-contador">
        {resultados.length} {resultados.length === 1 ? 'viña' : 'viñas'}
      </p>

      {resultados.length === 0 ? (
        <p className="vacio">No hay viñas que coincidan con tu búsqueda. 🍇</p>
      ) : (
        <div className="grid-vinas">
          {resultados.map((v) => (
            <TarjetaVina key={v.nombre} vina={v} onVerVina={onVerVina} />
          ))}
        </div>
      )}
    </main>
  );
}

export default ExplorarPage;

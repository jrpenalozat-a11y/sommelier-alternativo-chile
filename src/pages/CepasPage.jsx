import React from 'react';
import { CEPAS, VINAS } from '../data/vinas-alternativas-datos';

const contarVinas = (nombreCepa) =>
  VINAS.filter(v => v.cepas.some(c => c === nombreCepa || c.includes(nombreCepa.split(' ')[0]))).length;

function CepasPage() {
  return (
    <main className="contenido">
      <div className="intro-cepas">
        <h2>Cepas del mundo alternativo</h2>
        <p>
          Las viñas naturales, biodinámicas y de rescate patrimonial chilenas se apoyan en
          cepas históricas y de baja intervención. Estas son las protagonistas.
        </p>
      </div>

      <div className="grid-cepas">
        {CEPAS.map((cepa) => (
          <article key={cepa.nombre} className={`tarjeta-cepa tipo-${cepa.tipo}`}>
            <div className="tarjeta-cepa-cabecera">
              <span className="cepa-bolita" aria-hidden="true" />
              <h3>{cepa.nombre}</h3>
              <span className="cepa-tipo">{cepa.tipo}</span>
            </div>
            <p className="cepa-nota">{cepa.nota}</p>
            <p className="cepa-conteo">{contarVinas(cepa.nombre)} viñas la trabajan</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default CepasPage;

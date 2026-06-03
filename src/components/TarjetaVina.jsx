import React from 'react';
import { REGIONES } from '../data/vinas-alternativas-datos';
import { useFavoritos } from '../context/FavoritosContext';

const nombreRegion = (id) => REGIONES.find(r => r.id === id)?.nombre || id;

function TarjetaVina({ vina, onVerVina }) {
  const { favoritos, toggleFavorito } = useFavoritos();
  const esFavorita = favoritos.includes(vina.nombre);

  return (
    <article className="tarjeta" onClick={() => onVerVina(vina)} tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onVerVina(vina); }}>
      <button
        className={`tarjeta-fav ${esFavorita ? 'activa' : ''}`}
        aria-label={esFavorita ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        onClick={(e) => { e.stopPropagation(); toggleFavorito(vina.nombre); }}
      >
        {esFavorita ? '❤️' : '🤍'}
      </button>

      <span className="tarjeta-segmento">{vina.segmento}</span>
      <h3 className="tarjeta-nombre">{vina.nombre}</h3>
      <p className="tarjeta-lugar">{vina.valle} · {nombreRegion(vina.region)}</p>
      <p className="tarjeta-estilo">{vina.estilo}</p>

      <div className="tarjeta-cepas">
        {vina.cepas.map((c) => <span key={c} className="cepa-chip">{c}</span>)}
      </div>
    </article>
  );
}

export default TarjetaVina;

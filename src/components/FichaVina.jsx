import React, { useEffect } from 'react';
import { REGIONES } from '../data/vinas-alternativas-datos';
import { useFavoritos } from '../context/FavoritosContext';

const nombreRegion = (id) => REGIONES.find(r => r.id === id)?.nombre || id;

function FichaVina({ vina, onClose }) {
  const { favoritos, toggleFavorito } = useFavoritos();
  const esFavorita = favoritos.includes(vina.nombre);

  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <div className="ficha-overlay" onClick={onClose}>
      <div className="ficha" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="ficha-cerrar" onClick={onClose} aria-label="Cerrar">✕</button>

        <span className="ficha-segmento">{vina.segmento}</span>
        <h2 className="ficha-nombre">{vina.nombre}</h2>
        <p className="ficha-lugar">📍 {vina.valle} · {nombreRegion(vina.region)}</p>

        <button
          className={`ficha-fav ${esFavorita ? 'activa' : ''}`}
          onClick={() => toggleFavorito(vina.nombre)}
        >
          {esFavorita ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
        </button>

        <div className="ficha-bloque">
          <h4>Estilo</h4>
          <p>{vina.estilo}</p>
        </div>

        <div className="ficha-bloque">
          <h4>Terruño</h4>
          <p>{vina.terruno}</p>
        </div>

        <div className="ficha-bloque">
          <h4>Cepas</h4>
          <div className="tarjeta-cepas">
            {vina.cepas.map((c) => <span key={c} className="cepa-chip">{c}</span>)}
          </div>
        </div>

        <div className="ficha-bloque">
          <h4>Vinos destacados</h4>
          <ul className="ficha-destacados">
            {vina.destacados.map((d) => <li key={d}>🍷 {d}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FichaVina;

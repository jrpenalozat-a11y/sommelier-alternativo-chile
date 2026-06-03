import React from 'react';
import { VINAS } from '../data/vinas-alternativas-datos';
import { useFavoritos } from '../context/FavoritosContext';
import TarjetaVina from '../components/TarjetaVina';

function FavoritosPage({ onVerVina }) {
  const { favoritos } = useFavoritos();
  const guardadas = VINAS.filter((v) => favoritos.includes(v.nombre));

  return (
    <main className="contenido">
      <div className="intro-cepas">
        <h2>Mis favoritas ❤️</h2>
        <p>Las viñas que marcaste se guardan en este navegador.</p>
      </div>

      {guardadas.length === 0 ? (
        <p className="vacio">
          Aún no tienes viñas guardadas. Explora el catálogo y toca el corazón 🤍 para añadirlas.
        </p>
      ) : (
        <div className="grid-vinas">
          {guardadas.map((v) => (
            <TarjetaVina key={v.nombre} vina={v} onVerVina={onVerVina} />
          ))}
        </div>
      )}
    </main>
  );
}

export default FavoritosPage;

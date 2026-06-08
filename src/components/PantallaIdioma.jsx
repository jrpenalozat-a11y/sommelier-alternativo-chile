import React from 'react';
import { useIdioma } from '../context/IdiomaContext';
import HojaParra from './HojaParra';

// Pantalla inicial: elegir idioma (se muestra solo si aún no hay idioma guardado)
export default function PantallaIdioma() {
  const { setIdioma } = useIdioma();
  return (
    <div className="idioma-pantalla">
      <div className="idioma-card">
        <span className="idioma-copa" aria-hidden="true"><HojaParra size={54} /></span>
        <h1 className="idioma-titulo">Sommelier Alternativo de Chile</h1>
        <p className="idioma-sub">Elige tu idioma · Choose your language</p>
        <div className="idioma-botones">
          <button className="idioma-btn" onClick={() => setIdioma('es')}>
            <span className="idioma-bandera" aria-hidden="true">🇪🇸</span> Español
          </button>
          <button className="idioma-btn" onClick={() => setIdioma('en')}>
            <span className="idioma-bandera" aria-hidden="true">🇬🇧</span> English
          </button>
        </div>
      </div>
    </div>
  );
}

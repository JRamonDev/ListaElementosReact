import React from 'react';
import './App.css';
import { useState } from 'react';
window.document.title ='Lista'
//Crea una lista de elementos que se puedan agregar a través de un formulario.

export default function Lista() {
  
  const [elementos, setElementos] = useState([]);
  const [nuevoElemento, setNuevoElemento] = useState('');

  const agregarElemento = (event) => {
    event.preventDefault();
    setElementos([...elementos, nuevoElemento]);
    setNuevoElemento('');
  };

  const Cambio = (event) => {
    setNuevoElemento(event.target.value);
  };

  return (
    <div>
      <h2>Lista de elementos:</h2>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
      <form onSubmit={agregarElemento}>
        <label>
          Nuevo elemento:
          <input type="text" value={nuevoElemento} onChange={Cambio} />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

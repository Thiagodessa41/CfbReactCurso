import React, { useState } from 'react';
import Car from './components/Car';


export default function App() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [ligado, setLigado] = useState(false);

  return (
    <>
      <Car ligado={ligado} setLigado={setLigado}/>
      <a>
        CFB Cursos
      </a>
    </>
  );
}

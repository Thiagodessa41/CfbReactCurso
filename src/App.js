import React from 'react';



export default function App() {

  const carros = ['HRV','GOLF','FOCUS','CRUZE','ARGO']
    const listaCarro=carros.map(
      (c,i)=>
      <li key={i}>{i}-{c}</li>
    )

  return (
    <>
      <ul>{listaCarro}</ul>
    </>
  );
}

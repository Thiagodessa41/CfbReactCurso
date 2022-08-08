
import React  from 'react';
import Carro from './imgs/car-card.png'
import About from './imgs/about.png'


export default function Car(props) {
 

  return (
    <>
      <img style={{width:'150px'}} src={props.ligado?About:Carro}/>
      <button onClick={()=>props.setLigado(!props.ligado)}>
      {props.ligado?'Car':'About'}</button>
    </>
  );
}

import React from 'react';

function Numero(props) {
    return (
        <div>
            <p>Você clicou em numero {props.count} vezes</p>
            <button onClick={() =>props.setCount  (props.count + 1)}>
                Adiciona 1
            </button>
        </div>
    );
}

export default Numero;
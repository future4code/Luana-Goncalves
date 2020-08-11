import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <p>{ props.email }</p>
            <div>
                <img src={ props.imgem}/>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;
import React from 'react';
import './CardQuadrado.css'

function CardQuadrado(props) {
    return (
        <div className="card-quadrado-container">
            <div>
                <h4>{ props.valor }</h4>
            </div>
            <img src={ props.imagem } />
        </div>
    )
}

export default CardQuadrado;
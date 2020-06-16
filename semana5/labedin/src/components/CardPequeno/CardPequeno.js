import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <span><b>{props.titulo}: </b></span> &nbsp;
            <span>{props.valor}</span>
        </div>
    )
}

export default CardPequeno;
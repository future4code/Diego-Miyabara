import React from 'react'

export default function PerguntaFechada(props) {
    return (
        <div>
            <p>{props.pergunta}</p>
            <select>
                {props.opcoes.map ((option) =>{
                  return (
                    <option value={option}>
                      {option}
                    </option>  
                )})}
            </select>
        </div>       
    )
}
import React from 'react'
import {CardContainer, CardImage} from './Style'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';


function HomePage () {
    const history = useHistory();

    const goToApplicationFormPage = () => {
        history.push("/formulario")
    }
    return(
        <div>
            <Header />
            <CardContainer>
                <p>Bem vindos à LabeX, o portal onde você poderá encontrar as melhores viagens espaciais!</p>
            </CardContainer>
            <CardImage />
            <CardContainer>
                <p>Se você sempre teve aquela vontade de fazer uma viagem espacial, clique no botão abaixo e nos conte um pouco sobre você e vamos embarcar nesta aventura intergaláctica!</p>
            </CardContainer>
            <button onClick={goToApplicationFormPage}>INSCREVA-SE</button>
        </div>
    )
}

export default HomePage
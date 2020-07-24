import React from 'react'
import {CardContainer, CardImage} from './Style'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';


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
            <Button color="violet" size="lg" onClick={goToApplicationFormPage}>CLIQUE AQUI PARA SE INSCREVER!!!</Button>
        </div>
    )
}

export default HomePage
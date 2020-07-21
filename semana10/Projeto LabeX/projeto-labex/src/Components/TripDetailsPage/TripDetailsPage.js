import React from 'react'
import Header from '../Header/Header'
import { useHistory } from "react-router-dom";

function TripDetailsPage () {
    const history = useHistory();
    const goToListTripPage = () => {
        history.push("/list-trip")
    }
    return (
        <div>
            <Header />
            <h1>Detalhes da Viagem</h1>
            <button onClick={goToListTripPage}>Voltar</button> 
        </div>
    )
}

export default TripDetailsPage
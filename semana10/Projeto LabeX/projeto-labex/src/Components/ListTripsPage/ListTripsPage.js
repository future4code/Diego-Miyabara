import React from 'react'
import Header from '../Header/Header'
import {ContainerViagens, CardViagem} from "./Style"
import useRequestData from '../../Hooks/useRequestData'
import { useHistory } from "react-router-dom";

function ListTripPage () {
    const trips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/trips', [], "trips")
    const history = useHistory();

    const goToTripDetailsPage = (tripId) => {
        history.push(`/trip-details/${tripId}`)
    }
    const goToCreateTripPage = () => {
        history.push("/create-trip")
    }

    return (
        <div>
            <Header />
            <button onClick={goToCreateTripPage}>Criar Nova Viagem</button>
            <h1>Lista de Viagens</h1>
            <ContainerViagens>
                {trips.map((trip) => {
                    return(
                        <CardViagem key={trip.id}>
                            <h2>{trip.name}</h2>
                            <p>Planeta: {trip.planet}</p>
                            <p>{trip.description}</p>
                            <p>Data: {trip.date}</p>
                            <p>Duração: {trip.durationInDays} dias</p>
                            <button onClick={() => goToTripDetailsPage(trip.id)}>Detalhes da Viagem</button>
                        </CardViagem>
                    )
                })}
               
            </ContainerViagens>
            
        </div>
    )
}

export default ListTripPage
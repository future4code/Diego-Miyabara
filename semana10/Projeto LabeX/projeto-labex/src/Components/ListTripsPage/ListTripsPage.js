import React from 'react'
import Header from '../Header/Header'
import {ContainerViagens, StyledPaper, ListTitle, StyledButton} from "./Style"
import useRequestData from '../../Hooks/useRequestData'
import { useHistory } from "react-router-dom";
import { Button } from 'rsuite';


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
            <StyledButton color="violet" onClick={goToCreateTripPage}>Criar Nova Viagem</StyledButton>
            <StyledButton color="violet" onClick={goToCreateTripPage}>Criar Novo Usuário</StyledButton>
            <StyledButton color="violet" onClick={goToCreateTripPage}>Deletar Viagem</StyledButton>
            <ListTitle>Lista de Viagens</ListTitle>
            <ContainerViagens>
                {trips.map((trip) => {
                    return(
                        <StyledPaper key={trip.id}>
                            <h3>{trip.name}</h3>
                            <p>Planeta: {trip.planet}</p>
                            <p>{trip.description}</p>
                            <p>Data: {trip.date}</p>
                            <p>Duração: {trip.durationInDays} dias</p>
                            <Button color="violet" onClick={() => goToTripDetailsPage(trip.id)}>Detalhes da Viagem</Button>
                        </StyledPaper>
                    )
                })}
               
            </ContainerViagens>
            
        </div>
    )
}

export default ListTripPage
import React, {useEffect} from 'react'
import Header from '../Header/Header'
import {ContainerViagens, StyledPaper, ListTitle, StyledButton} from "./Style"
import useRequestData from '../../Hooks/useRequestData'
import { useHistory } from "react-router-dom";
import { Button, Alert } from 'rsuite';
import Axios from 'axios';


function ListTripPage () {
    const trips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/trips', [], "trips")
    const history = useHistory();

    const goToTripDetailsPage = (tripId) => {
        history.push(`/trip-details/${tripId}`)
    }
    const goToCreateTripPage = () => {
        history.push("/create-trip")
    }
    const goToNewUserPage = () => {
        history.push("/create-new-user")
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
    }, [history])
    const handleDelete = (tripId) => {
        if(window.confirm("Tem certeza que deseja deletar esta viagem?")){ 
            Axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/trips/${tripId}`)
        .then(() => {
            Alert.success("Viagem deletada com sucesso!")
            history.push("/login")      
        })
        .catch((err) => {
            Alert.warning("Não foi possível apagar a viagem!")
            console.log(err)
        })  
    }}

    
    return (
        <div>
            <Header />
            <StyledButton color="violet" onClick={goToCreateTripPage}>Criar Nova Viagem</StyledButton>
            <StyledButton color="violet" onClick={goToNewUserPage}>Criar Novo Usuário</StyledButton>
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
                            <Button color="red" onClick={() => handleDelete(trip.id)}>Deletar Viagem</Button>
                        </StyledPaper>
                    )
                })}
               
            </ContainerViagens>
            
        </div>
    )
}

export default ListTripPage
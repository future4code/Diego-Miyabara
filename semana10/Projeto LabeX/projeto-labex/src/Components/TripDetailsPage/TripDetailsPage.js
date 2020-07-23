import React from 'react'
import Header from '../Header/Header'
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components'
import useRequestData from '../../Hooks/useRequestData'

const CardCandidates = styled.div`
    background-color: #FFF;
    border-radius: 20px;
`

const ContainerCandidates = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #FFF;
    margin: 0 50px;
`

function TripDetailsPage () {
    const history = useHistory();
    const params = useParams();
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing"
    const trips = useRequestData(`${baseUrl}/trip/${params.tripId}`, [], "trip")

    const goToListTripPage = () => {
        history.push("/list-trip")
    }
    
    return (
        <div>
            <Header />
                <h1>Detalhes da Viagem</h1>
                <h2>{trips.name}</h2>
                <h3>Planeta: {trips.planet}</h3>
                <p>Descrição: {trips.description}</p>
                <p>Data: {trips.date}</p>
                <p>Duração: {trips.durationInDays} </p>
                <h2>Candidatos: </h2>
                <ContainerCandidates>
                    {trips.candidates && trips.candidates.map((candidate) => {
                    return (
                        <CardCandidates key={candidate.id}>
                            <p>Nome: {candidate.name}</p>
                            <p>Idade: {candidate.age}</p>
                            <p>Profissão: {candidate.profession}</p>
                            <p>País: {candidate.country}</p>
                            <p>{candidate.applicationText}</p>
                        </CardCandidates>
                    )
                })}
                </ContainerCandidates>
            <button onClick={goToListTripPage}>Voltar</button> 
        </div>
    )
}

export default TripDetailsPage
import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'

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
    const [tripDetail, setTripDetail] = useState("")
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing"
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
        axios.get(`${baseUrl}/trip/${params.tripId}`, {
            headers: {
                auth: token
            }
        })
        .then(response => {
            setTripDetail(response.data.trip)
        })
        .catch(err => {
            console.log(err.message)
        })
    } ,[history, params] )

    const goToListTripPage = () => {
        history.push("/list-trip")
    }
    
    return (
        <div>
            <Header />
                <h1>Detalhes da Viagem</h1>
                <h2>{tripDetail.name}</h2>
                <h3>Planeta: {tripDetail.planet}</h3>
                <p>Descrição: {tripDetail.description}</p>
                <p>Data: {tripDetail.date}</p>
                <p>Duração: {tripDetail.durationInDays} </p>
                <h2>Candidatos: </h2>
                <ContainerCandidates>{tripDetail && tripDetail.candidates.map((candidate) => {
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
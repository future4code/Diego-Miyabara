import React from 'react'
import Header from '../Header/Header'
import { useHistory, useParams } from "react-router-dom";
import useRequestData from '../../Hooks/useRequestData'
import Axios from 'axios';
import {DetailsPaper, TitleAppr, ContainerCandidates, DetailsTitle, TripTitle, ContainerApproved, MainContainer, CandidatePaper, ContainerButton, CandidateTitle} from "./style"
import { Button } from 'rsuite';


function TripDetailsPage () {
    const history = useHistory();
    const params = useParams();
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing"
    const trips = useRequestData(`${baseUrl}/trip/${params.tripId}`, [], "trip")

    const goToListTripPage = () => {
        history.push("/list-trip")
    }

    const handleAproveCandidate = (candidateId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            "approve": true
        }
        Axios.put(`${baseUrl}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token
            }
        })
        .then(() => {
            alert("Candidato aprovado com sucesso!")
            window.location.reload()
        })
        .catch(() => {
            alert("Não foi possível aprovar este candidato.")
        })
    }

    const handleReproveCandidate = (candidateId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            "approve": false
        }
        Axios.put(`${baseUrl}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token
            }})
        .then(() => {
            alert("Candidato foi reprovado!")
            window.location.reload()
        })
        .catch(() => {
            alert("Não foi possível reprovar este candidato.")
        })
    }
    
    return (
        <div>
            <Header />
                <DetailsTitle>Detalhes da Viagem</DetailsTitle>
                <DetailsPaper>
                    <TripTitle>{trips.name}</TripTitle>
                    <h3>Planeta: {trips.planet}</h3>
                    <p>Descrição: {trips.description}</p>
                    <p>Data: {trips.date}</p>
                    <p>Duração: {trips.durationInDays} dias. </p>
                </DetailsPaper>
                <CandidateTitle>Candidatos: </CandidateTitle>
                <MainContainer>
                    <ContainerApproved>
                        <TitleAppr>Aprovados</TitleAppr>
                        <ContainerCandidates>
                            {trips.approved && trips.approved.map((candidate) => {
                            return (
                                <CandidatePaper key={candidate.id}>
                                    <p>Nome: {candidate.name}</p>
                                    <p>Idade: {candidate.age}</p>
                                    <p>Profissão: {candidate.profession}</p>
                                    <p>País: {candidate.country}</p>
                                    <p>{candidate.applicationText}</p>
                                </CandidatePaper>
                            )
                        })}
                        </ContainerCandidates>
                    </ContainerApproved>
                    <ContainerApproved>
                        <TitleAppr>Aguardando Autorização</TitleAppr>
                        <ContainerCandidates>
                            {trips.candidates && trips.candidates.map((candidate) => {
                            return (
                                <CandidatePaper key={candidate.id}>
                                    <p>Nome: {candidate.name}</p>
                                    <p>Idade: {candidate.age}</p>
                                    <p>Profissão: {candidate.profession}</p>
                                    <p>País: {candidate.country}</p>
                                    <p>{candidate.applicationText}</p>
                                    <ContainerButton>
                                        <Button color="green" onClick={() => handleAproveCandidate(candidate.id)}>Aprovar Candidato</Button>
                                        <Button color="red" onClick={() => handleReproveCandidate(candidate.id)}>Reprovar Candidato</Button>
                                    </ContainerButton>
                                </CandidatePaper>
                            )
                        })}
                        </ContainerCandidates>
                    </ContainerApproved>
                </MainContainer>
            <Button color="violet" size="lg" onClick={goToListTripPage}>VOLTAR</Button> 
        </div>
    )
}

export default TripDetailsPage
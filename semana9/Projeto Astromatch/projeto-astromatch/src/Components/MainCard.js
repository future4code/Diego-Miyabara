import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import axios from 'axios'
import CardMatches from './CardMatches'

const ContainerCard = styled.div`
border: 1px solid #696969;
border-radius: 10px;
width: 500px;
height: 700px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #FFF;
`

const ContainerCarregamento = styled.div`
    display: inline-block;
    transform: translateZ(1px);
`

const Carregamento = styled.div`
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #32BCC7;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    @keyframes lds-circle {
    0%, 100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
        transform: rotateY(3600deg);
    }
    }
`

export default function MainCard () {
    const [profiles, setProfiles] = useState({})
    const [renderMatches, setRenderMatches] = useState(false)

    const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-miyabara-turing"

    const getProfiles = () => {
        axios.get(`${baseURL}/person`)
        .then((response) => {
            setProfiles(response.data.profile)
        })
    }

    useEffect (() => {
        getProfiles()
    }, [])

    const onClickMatch = () => {
        const body = {
            "id": profiles.id,
            "choice": true 
        }
        axios.post(`${baseURL}/choose-person`, body)
        .then(() => {
            alert("Você deu match!")
            getProfiles()
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const onClickReject = () => {
        const body = {
            "id": profiles.id,
            "choice": false 
        }
        axios.post(`${baseURL}/choose-person`, body)
        .then(() => {
            alert("Você deu um Reject!")
            getProfiles()
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        window.addEventListener("keydown", onKeyPressed);
        return () => {
            window.removeEventListener("keydown", onKeyPressed) 
        }
        function onKeyPressed (event) {
            if(event.code === "ArrowRight"){
                onClickMatch()
            }else if (event.code === "ArrowLeft") {
                onClickReject()
            }
        }
    }, );
    
    const onClickRender = () => {
        setRenderMatches(!renderMatches)
    }

    const renderBody = () => {
        if(renderMatches === false){
            return(
                <ContainerCard>
                    <CardHeader onClickRender={onClickRender}/>
                    {profiles ? <CardBody name={profiles.name} age={profiles.age} bio={profiles.bio} photo={profiles.photo}/> : <ContainerCarregamento><Carregamento></Carregamento></ContainerCarregamento>}
                    <CardFooter profiles={profiles} onClickMatch={onClickMatch} onClickReject={onClickReject}/>
                </ContainerCard>
            )
        } else if (renderMatches === true){
            return(
                <ContainerCard >
                    <CardHeader onClickRender={onClickRender}/>
                    <CardMatches baseURL={baseURL}/>
                </ContainerCard>
            )
        }
    }

    return (
        renderBody()
    )
}

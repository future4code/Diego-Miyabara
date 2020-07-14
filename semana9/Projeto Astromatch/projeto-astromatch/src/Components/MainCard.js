import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import axios from 'axios'

const ContainerCard = styled.div`
border: 1px solid black;
border-radius: 10px;
width: 30vw;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #FFF;
`

export default function MainCard () {
    const [profiles, setProfiles] = useState({})

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

    return (
        <ContainerCard>
           <CardHeader />
           <CardBody name={profiles.name} age={profiles.age} bio={profiles.bio} photo={profiles.photo}/>
           <CardFooter onClickMatch={onClickMatch} onClickReject={onClickReject}/>
        </ContainerCard>
    )
}

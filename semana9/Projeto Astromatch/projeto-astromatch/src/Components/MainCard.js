import React from 'react'
import styled from 'styled-components'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

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
    return (
        <ContainerCard>
           <CardHeader />
           <CardBody />
           <CardFooter />
        </ContainerCard>
    )
}

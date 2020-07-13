import React from 'react'
import styled from 'styled-components'

const ContainerBody = styled.div`
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/800px-Buzz_Aldrin.jpg");
    background-size: cover;
    color: #FFF;
    width: 90%;
    height: 100%;
    margin: 16px;
    display: flex;
    flex-direction: column-reverse;
    text-align: start;
`

const H1Body = styled.h1`
    margin: 0 16px;
    padding: 0;
`
const PBody = styled.p`
    margin: 16px 16px;
    padding: 0;
`
const ImgBody = styled.img`
    margin: 0 auto;
`

export default function CardBody () {
    return (
        <ContainerBody>
            <PBody>Descrição bla bla bla</PBody>
            <H1Body>Nome, idade</H1Body>
            
        </ContainerBody>
    )
}

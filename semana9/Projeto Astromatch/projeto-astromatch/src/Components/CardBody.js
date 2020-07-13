import React from 'react'
import styled from 'styled-components'

const ContainerBody = styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
    color: #FFF;
    width: 90%;
    height: 100%;
    margin: 16px;
    display: flex;
    flex-direction: column-reverse;
    text-align: start;
`

const H1Body = styled.h1`
    margin: 0 32px;
    padding: 0;
`
const PBody = styled.p`
    margin: 16px 32px;
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

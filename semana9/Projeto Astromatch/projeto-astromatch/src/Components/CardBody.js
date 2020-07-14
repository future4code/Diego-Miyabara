import React from 'react'
import styled from 'styled-components'

const ContainerBody = styled.div`
    background-image: url(${props => props.photo});
    background-size: cover;
    background-position: center;
    color: #FFF;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #696969;
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


export default function CardBody (props) {
    const photo = props.photo
    return (
        <ContainerBody photo={photo}>
            <PBody>{props.bio}</PBody>
            <H1Body>{props.name}, {props.age}</H1Body>
        </ContainerBody>
    )
}

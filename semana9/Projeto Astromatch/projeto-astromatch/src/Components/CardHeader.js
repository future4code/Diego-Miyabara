import React from 'react'
import styled from 'styled-components'
import matchIcon from '../Images/matchIcon.png'

const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding-left: 30px;
border-bottom: 1px solid #E5E5E5;
box-sizing: border-box;
height: 70px;
`

const SpanHeader = styled.span`
    color: ${props => props.color};
    opacity: 70%;
`

const H1Header = styled.h1`
    padding:0;
    padding-left:30px;
    margin: 10px auto;
`

const ButtonHeader = styled.button`
    margin: 10px 0;
    margin-right: 25px;
    border: none;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    background-color: #FFF;
`

export default function CardHeader (props) {
    return (
        <ContainerHeader>
            <H1Header><SpanHeader color="red">astro</SpanHeader><SpanHeader color="blue">match</SpanHeader></H1Header>
            <ButtonHeader onClick={props.onClickRender}><img src={matchIcon} height="30px" alt="Match Icon"/></ButtonHeader>
        </ContainerHeader>
    )
}

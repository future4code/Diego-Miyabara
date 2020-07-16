import React from 'react'
import styled from 'styled-components'
import likeIcon from '../Images/likeIcon.png'

const ContainerFooter = styled.div`
    height: 120px;
    border-top: 1px solid #E5E5E5;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ButtonFooter = styled.button`
    font-size: 40px;
    color: #FFF;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;
    background-color: ${props => props.backGroundColor};
    outline: none;
    cursor: pointer;
    width: 70px;
    height: 70px;
    justify-content: center;
    transform: 1s;
    opacity: 0.75;
    :hover{
        transform: scale(1.1);
        opacity: 1;
    }
`

export default function CardFooter (props) {
    return (
        <ContainerFooter>
            {props.profile ? 
            <ButtonFooter onClick={props.onClickReject} backGroundColor="red" borderColor="red">X</ButtonFooter> : 
            <ButtonFooter backGroundColor="red" borderColor="red">X</ButtonFooter>}
            {props.profile ? 
            <ButtonFooter onClick={props.onClickMatch} backGroundColor="#00ff80" borderColor="#00ff80"><img src={likeIcon} width="50px" height="50px" alt="Like Icon"/></ButtonFooter> : 
            <ButtonFooter backGroundColor="#00ff80" borderColor="#00ff80"><img src={likeIcon} width="50px" height="50px" alt="Like Icon"/></ButtonFooter>}
        </ContainerFooter>
    )
}

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerMatches = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    overflow: auto;
`

const ContainerMatch = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    margin: 0 10px;
    :hover {
        background-color: #E5E5E5; 
    }
`

const ImgMatch = styled.img`
    border-radius: 100%;
    height: 45px;
    width: 45px;
    align-self:center;
    overflow: hidden;
`

const ButtonLimpar = styled.button`
    width: 50%;
    margin: 5px auto;
    border-radius: 4px;
    background-color: #f4511e;
    order: none;
    color: #FFFFFF;
    text-align: center;
    padding: 10px;
    transition: all 0.5s;
    cursor: pointer;
    border: none;
    opacity: 90%;
    transform: 1s;
    :hover{
        transform: scale(1.1);
        opacity: 100%;
    }
`

const AllMatches = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
`
const getMatches = async (baseURL) => {
    const response = await
    axios.get(`${baseURL}/matches`)
    return response.data.matches;
}

export default function CardMatches (props) {
    const [matches, setMatches] = useState([])
    
    useEffect (() => {
        getMatches(props.baseURL).then (matches => {
            setMatches(matches)
        })
    }, [ props.baseURL])

    const clearMatches = () => {
        const body = {
            "id": "PatusZf4mHH6UoZfYC8I"
        }
        if(window.confirm('Você deseja realmente limpar seus matchs?')) {
            axios.put(`${props.baseURL}/clear`, body)
            .then(() => {
            setMatches([])
        }).catch((err) => {
            console.log(err)
        })}
    }

    return (
        <ContainerMatches>
            <AllMatches>    
                <p><strong>Matches:</strong></p>
                {matches.length === 0 ? <div>Você não possui nenhum match!</div> :
                matches.map((match) => {
                    return(
                        <ContainerMatch key={match.id}>
                            <ImgMatch src={match.photo} />
                            <span><strong>{match.name},</strong> {match.age} anos.</span>
                        </ContainerMatch>
                    )
                }) }
            </AllMatches>
            <ButtonLimpar onClick={clearMatches}>Limpar Matches</ButtonLimpar>
        </ContainerMatches>
    )
}

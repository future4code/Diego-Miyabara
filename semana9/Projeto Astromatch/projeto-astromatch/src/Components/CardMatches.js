import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerMatches = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    justify-content: space-between;
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
`

export default function CardMatches (props) {
    const [matches, setMatches] = useState([])
    
    const getMatches = () => {
        axios.get(`${props.baseURL}/matches`)
        .then((response) => {
            setMatches(response.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect (() => {
        getMatches()
    }, [])

    const clearMatches = () => {
        const body = {
            "id": "PatusZf4mHH6UoZfYC8I"
        }
        if(window.confirm('Você deseja realmente limpar seus matchs?')) {
            axios.put(`${props.baseURL}/clear`, body)
            .then(() => {
            alert('Seus matchs foram limpos')
            getMatches()
        }).catch((err) => {
            console.log(err)
        })}
    }
    return (
        <ContainerMatches>
            <div>    
                <p><strong>Matches:</strong></p>
                {matches === [] ? <div>Você não tem matches!</div> : matches.map((match) => {
                    return(
                        <ContainerMatch key={match.id}>
                            <ImgMatch src={match.photo} />
                            <span><strong>{match.name},</strong> {match.age} anos.</span>
                        </ContainerMatch>
                    )
                })}
            </div>
            <ButtonLimpar onClick={clearMatches}>Limpar Matches</ButtonLimpar>
        </ContainerMatches>
    )
}

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import background from '../images/background-character.jpg'

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const H1Titulo = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  color:#FFF;
  background: #111;
  border: 1px solid #FFF;
  border-radius: 10px;
  margin: 16px;
  width: 30%;
`

const ContainerPersonagens = styled.div`
display: grid;
gap: 8px;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 8px;
margin: 8px;
`

const Personagem = styled.div`
border: 1px solid white;
box-sizing: border-box;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
background-image: url(${background});
background-size: cover;
color: #FFF;
width: 85%;
margin: 0 auto;
`

class Personagens extends React.Component {
    state = {
        personagens: []
    }

    componentDidMount = () => {
        axios
        .get('https://www.potterapi.com/v1/characters?key=$2a$10$KiuMtO5DIseqVmx0E2rQ1eLgiLhIUlwHv5hnoi2G3Kl0JxV1v8EUe')
        .then(response => {
            this.setState({personagens: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        return(
            <ContainerApp>
                <H1Titulo>Personagens</H1Titulo>
                <ContainerPersonagens>
                {this.state.personagens.map ((personagem) => {
                    return (
                        <Personagem key={personagem._id}>
                            <p><strong>Nome: </strong>{personagem.name}</p>
                            {personagem.house && (<p><strong>Casa: </strong>{personagem.house}</p>)}
                            <p><strong>Linhagem: </strong>{personagem.bloodStatus}</p>
                            {personagem.role && (<p><strong>Papel: </strong>{personagem.role}</p>)}
                        </Personagem>
                    )
                })}
                </ContainerPersonagens>
            </ContainerApp>
        )
    }
}

export default Personagens;
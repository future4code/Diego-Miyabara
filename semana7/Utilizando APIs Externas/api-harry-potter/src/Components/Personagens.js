import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const H1Titulo = styled.h1`
  margin: 0;
  padding: 0 0 5px 0;
  text-align: center;
  color:#FFF;
  border: 1px solid #FFF;
  border-radius: 20px;
  margin: 16px;
  width: 30%;
`

const ContainerPersonagens = styled.div`
border-radius: 15px;
border: 1px solid white;
display: grid;
gap: 8px;
grid-template-columns: 1fr 1fr 1fr 1fr;
background-color: #0D0638;
color: #FFF;
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
    }
    render(){
        console.log(this.state.personagens)
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
                            <p><strong>Papel: </strong>{personagem.role}</p>
                        </Personagem>
                    )
                })}
                </ContainerPersonagens>
            </ContainerApp>
        )
    }
}

export default Personagens;
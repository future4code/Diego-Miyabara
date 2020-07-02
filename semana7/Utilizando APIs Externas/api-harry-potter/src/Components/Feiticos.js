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
  padding: 0;
  text-align: center;
  color:#FFF;
  background: #111;
  border: 1px solid #FFF;
  border-radius: 10px;
  margin: 16px;
  width: 30%;
`

const ContainerFeiticos = styled.div`
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 8px;
    margin: 8px;
`

const Feitico = styled.div`
    background-color: #851307;  
    color: #FFF; 
    width: 70%;
    margin: 0 auto; 
    border-radius: 15px;
`

class Feiticos extends React.Component {
    state = {
        feiticos: []
    }

    componentDidMount = () => {
        axios
        .get('https://www.potterapi.com/v1/spells?key=$2a$10$KiuMtO5DIseqVmx0E2rQ1eLgiLhIUlwHv5hnoi2G3Kl0JxV1v8EUe')
        .then(response => {
            this.setState({feiticos: response.data})
        })
        .catch(error => {
            console.log(error.data)
        })
    }
    render(){
        return(
            <ContainerApp>
                <H1Titulo>Feitiços</H1Titulo>
                <ContainerFeiticos>
                {this.state.feiticos.map((feitico) => {
                    return (
                        <Feitico key={feitico._id}>
                            <p><strong>Feitiço: </strong>{feitico.spell}</p>
                            <p><strong>Tipo: </strong>{feitico.type}</p>
                            <p><strong>Efeito: </strong>{feitico.effect}</p>
                        </Feitico>
                    )
                })}
                </ContainerFeiticos>
            </ContainerApp>
        )
    }
}

export default Feiticos;
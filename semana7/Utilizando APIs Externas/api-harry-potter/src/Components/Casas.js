import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerCasas = styled.div`
    background-color: #CC6104;
    color: #381700;
    width: 30vw;
    margin: 8px auto;
    border-radius: 30px;
    padding: 4px;
`

const H1Titulo = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  color:#FFF;
  border: 1px solid #FFF;
  border-radius: 20px;
  margin: 16px;
  width: 30%;
`

const H1Casa = styled.h1`
margin: 0;
padding: 0;
`

const PCasa = styled.p`
margin: 8px;
padding: 0;
`

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 97vh;
`

class Casas extends React.Component {
    state = {
        houses: []
    }

    componentDidMount = () => {
        axios
        .get('https://www.potterapi.com/v1/houses?key=$2a$10$KiuMtO5DIseqVmx0E2rQ1eLgiLhIUlwHv5hnoi2G3Kl0JxV1v8EUe')
        .then(response => {
            this.setState({houses: response.data})
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    render(){
        return(
            <ContainerApp>
                <H1Titulo>Casas</H1Titulo>
                {this.state.houses.map((house) => {
                    return (
                        <ContainerCasas key={house._id}>
                            <H1Casa>{house.name}</H1Casa>
                            <PCasa>Fundador(a): {house.founder}</PCasa>
                            <PCasa>Responsável: {house.headOfHouse}</PCasa>
                            <PCasa>Mascote: {house.mascot}</PCasa>
                        </ContainerCasas>
                    )
                })}
            </ContainerApp>
        )
    }
}

export default Casas;
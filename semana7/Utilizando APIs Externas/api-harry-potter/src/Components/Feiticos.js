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
  border: 1px solid #FFF;
  border-radius: 20px;
  margin: 16px;
  width: 30%;
`

class Feiticos extends React.Component {
    render(){
        return(
            <ContainerApp>
                <H1Titulo>Feitiços</H1Titulo>
            </ContainerApp>
        )
    }
}

export default Feiticos;
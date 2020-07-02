import React from 'react';
import styled from 'styled-components';

const H1Titulo = styled.h1`
  margin: 0;
  padding: 0;
  width:60%;
  text-align: center;
  color:#FFF;
  border: 1px solid #FFF;
  border-radius: 20px;
  margin: 16px;
`

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 97vh;
`

class Home extends React.Component {
    render(){
        return(
            <ContainerApp>
                <H1Titulo>Bem vindo ao Wiki do Harry Potter!</H1Titulo>
            </ContainerApp>
        )
    }
}

export default Home;
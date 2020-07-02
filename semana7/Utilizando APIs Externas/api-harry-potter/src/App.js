import React from 'react';
import styled from 'styled-components';
import background from './images/background.jpg';
import Home from './Components/Home';
import Casas from './Components/Casas';
import Personagens from './Components/Personagens';
import Feiticos from './Components/Feiticos'

const ContainerPai = styled.div`
  background-image: url(${background});
  background-size: 100vw;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  text-align:center;
`



class App extends React.Component {
  state = {
    renderiza: 'home',
  }

  onClickHome = () => {
    this.setState({renderiza: 'home'})
  }

  onClickCasas = () => {
    this.setState({renderiza: 'casas'})
  }

  onClickPersonagens = () => {
    this.setState({renderiza: 'personagens'})
  }

  onClickFeiticos = () => {
    this.setState({renderiza: 'feiticos'})
  }

  render(){
    const renderizacao = () => {
      switch(this.state.renderiza){
        case 'home':
          return <Home />
        case 'casas':
          return <Casas />
        case 'personagens':
          return <Personagens />
        case 'feiticos':
          return <Feiticos />
        default:
          return <Home />
      }
    }
    return (
      <ContainerPai>
        <button onClick={this.onClickHome}>Home</button>
        <button onClick={this.onClickCasas}>Casas</button>
        <button onClick={this.onClickPersonagens}>Personagens</button>
        <button onClick={this.onClickFeiticos}>Feitiços</button>
        {renderizacao()}
      </ContainerPai>
    );
  }
  
}

export default App;

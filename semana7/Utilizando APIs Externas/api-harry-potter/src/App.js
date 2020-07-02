import React from 'react';
import styled from 'styled-components';
import background from './images/background.jpg';
import Home from './Components/Home';
import Casas from './Components/Casas';
import Personagens from './Components/Personagens';
import Feiticos from './Components/Feiticos'

const ContainerPai = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  text-align:center;
`

const BotoesAnimados = styled.button`
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  margin: 12px;
  :before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #000
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
  }
  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
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
        <BotoesAnimados onClick={this.onClickHome}>Home</BotoesAnimados>
        <BotoesAnimados onClick={this.onClickCasas}>Casas</BotoesAnimados>
        <BotoesAnimados onClick={this.onClickPersonagens}>Personagens</BotoesAnimados>
        <BotoesAnimados onClick={this.onClickFeiticos}>Feitiços</BotoesAnimados>
        {renderizacao()}
      </ContainerPai>
    );
  }
  
}

export default App;

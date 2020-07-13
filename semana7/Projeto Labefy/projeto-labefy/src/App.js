import React from 'react';
import './App.css';
import styled from 'styled-components'
import Home from './Components/Home'
import CreatePlaylist from './Components/CreatePlaylist'
import Playlists from './Components/Playlists'
import AddTrack from './Components/AddTrack';

const ContainerPai = styled.div`
  text-align: center;
  color:#FFF;
`	

const TituloH1 = styled.h1`
  border: 3px solid green;
  border-radius: 10px;
  display: flex;
  margin: 12px auto;
  padding-bottom: 4px;
  justify-content:center;
  width: 10%;
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
    renderizacao: 'home'
  }

  onClickHome = () => {
    this.setState({renderizacao: 'home'})
  }
  onClickPlaylists = () => {
    this.setState({renderizacao: 'playlists'})
  }
  onClickCreatePlaylist = () => {
    this.setState({renderizacao: 'create-playlist'})
  } 
  onClickAddTrack = () => {
    this.setState({renderizacao: 'addtrack'})
  }   

  render() {
    const renderizar = () => {
      switch(this.state.renderizacao){
        case 'home':
          return <Home />
        case 'create-playlist':
          return <CreatePlaylist />
        case 'playlists':
          return <Playlists />
        case 'addtrack':
          return <AddTrack />
        default:
          return <Home />
      }
    }
    return (
      <ContainerPai>
        <BotoesAnimados onClick={this.onClickHome}>Home</BotoesAnimados>
        <BotoesAnimados onClick={this.onClickCreatePlaylist}>Criar novas Playlists</BotoesAnimados>
        <BotoesAnimados onClick={this.onClickPlaylists}>Minhas Playlists</BotoesAnimados>
        <BotoesAnimados onClick={this.onClickAddTrack}>Adicionar música</BotoesAnimados>
        <TituloH1>Labefy</TituloH1>
        {renderizar()}
      </ContainerPai>
    );
  }
  
}

export default App;

import React from 'react';
import './App.css';
import styled from 'styled-components'
import Home from './Components/Home'
import CreatePlaylist from './Components/CreatePlaylist'
import Playlists from './Components/Playlists'

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

  render() {
    const renderizar = () => {
      switch(this.state.renderizacao){
        case 'home':
          return <Home />
        case 'create-playlist':
          return <CreatePlaylist />
        case 'playlists':
          return <Playlists />
        default:
          return <Home />
      }
    }
    return (
      <ContainerPai>
        <button onClick={this.onClickHome}>Home</button>
        <button onClick={this.onClickCreatePlaylist}>Criar novas Playlists</button>
        <button onClick={this.onClickPlaylists}>Minhas Playlists</button>
        <TituloH1>Labefy</TituloH1>
        {renderizar()}
      </ContainerPai>
    );
  }
  
}

export default App;

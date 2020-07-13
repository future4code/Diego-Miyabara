import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const PlaylistButton = styled.button`
    width: 120px;
    height: 30px;
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

class CreatePlaylist extends React.Component{
    state = {
        playlists: [],
        inputPlaylistName: ''
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputPlaylistName
        }
        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: 'diego-miyabara-turing'
            }
        })
        .then(response => {
            alert("Playlist criada com sucesso!")
            this.setState({inputPlaylistName: ''})
        })
        .catch(err => {
            alert('Não foi possível criar a playlist')
            console.log(err)
        })
    }

    onChangeInputPlaylist = (event) => {
        this.setState({inputPlaylistName:event.target.value})
    }

    render(){
        return(
            <div>
                <label>Nome da Playlist: </label>
                <input value={this.state.inputPlaylistName} onChange={this.onChangeInputPlaylist}></input>
                <PlaylistButton onClick={this.createPlaylist}>Criar Playlist</PlaylistButton>
            </div>
        )
    }
}

export default CreatePlaylist
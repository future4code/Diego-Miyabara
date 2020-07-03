import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

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
                <button onClick={this.createPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}

export default CreatePlaylist
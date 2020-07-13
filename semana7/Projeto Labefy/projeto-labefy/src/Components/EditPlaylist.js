import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

class EditPlaylist extends React.Component{
    state = {
        playlists: [],
        playlistDetail: [],
        selectPlaylist: ''
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'diego-miyabara-turing'
            }
        })
        .then(response => {
            this.setState({playlists: response.data.result.list})
        })
        .catch(error => {
            console.log(error)
        })
    }

    onChangeSelectPlaylist = (event) => {
        this.setState({selectPlaylist: event.target.value})
    }

    renderizaPlaylist = (playlistId) => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, {
            headers: {
                Authorization: 'diego-miyabara-turing'
            }
        })
        .then(response => {
            this.setState({playlistDetail: response.data.result.tracks})
        })
        .catch(err => {
            console.log(err)
        })
    }

    // deleteTrack = (playlistId, trackId) => {
    //     axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`, {
    //         headers: {
    //             Authorization: 'diego-miyabara-turing'
    //         }
    //     })
    //     .then(
    //         this.getAllPlaylists()
    //     )
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    render(){
        console.log(this.state.playlists)
        return(
            <div>
                <h3>Selecione a playlist para editar</h3>
                {this.state.playlists.map((playlist) => {
                    return(
                            <span key={playlist.id}>
                                <button onClick={() => this.renderizaPlaylist(playlist.id)}>{playlist.name}</button> 
                            </span>
                    )
                })}
                <div>
                    <h3>Quantidade de musicas: {this.state.playlistDetail.length}</h3>
                    {this.state.playlistDetail.map((track) => {
                        return (
                            <div key={track.id}>
                                <div>
                                    {track.artist} - {track.name}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default EditPlaylist
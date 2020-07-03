import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

class Playlists extends React.Component{
    state = {
        playlists: [],
        playlistDetail: [],
        addMusic: false,
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
    
    deletePlaylist = (playlistId) => {
        if(window.confirm('Você deseja excluir esta playlist?')){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
                headers: {
                    Authorization: 'diego-miyabara-turing'
                }
            })
            .then(
                this.getAllPlaylists()
            )
            .catch(err => {
                console.log(err)
            }
            )
        }
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


    onClickAddMusic = () => {
        this.setState({addMusic: !this.state.addMusic})
    }

    
    render(){
 
        return(
            <div>
                <h2>Listas de Playlists</h2>
                {this.state.playlists.map((playlist) => {
                    return (
                        <div key={playlist.id}>
                            {playlist.name !== "" 
                            ? <div>
                                <button onClick={() => this.renderizaPlaylist(playlist.id)}>{playlist.name}</button>

                                <button onClick={() => this.deletePlaylist(playlist.id)}>x</button>
                            </div> 
                            : <div>Não existem playlists cadastradas!</div>}
                            
                        </div>
                    )
                })}
                
                {this.state.playlistDetail && (<h3>Músicas da Playlist:</h3>)}
                {this.state.playlistDetail.map((tracks) => {
                    return (
                        <div key={tracks.id}>
                            {tracks.artist} - {tracks.name} 
                            <div><iframe title={tracks.id} width="448" height="252" src={tracks.url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Playlists
import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import AddTrack from './AddTrack';

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
const DeleteButton = styled.button`
    color: red;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
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

const PlaylistContainer = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
margin: 10px auto;
`

const ContainerPlaylists = styled.div`

`

const PlaylistsBox = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

const ContainerTracks = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

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
                <h2>Playlists : {this.state.playlists.length}</h2>
                <PlaylistsBox>{this.state.playlists.map((playlist) => {
                    return (
                        <div key={playlist.id}>
                            {playlist.name !== "" 
                            ? <PlaylistContainer>
                                <PlaylistButton onClick={() => this.renderizaPlaylist(playlist.id)}>{playlist.name}</PlaylistButton>

                                <DeleteButton onClick={() => this.deletePlaylist(playlist.id)}>x</DeleteButton>
                            </PlaylistContainer> 
                            : <div>Não existem playlists cadastradas!</div>}
                            
                        </div>
                    )
                })}
                </PlaylistsBox>
                
                {this.state.playlistDetail && (<h3>Músicas da Playlist: {this.state.playlistDetail.length}</h3>)}
                <ContainerTracks>
                {this.state.playlistDetail.map((tracks) => {
                    return (
                        <div key={tracks.id}>
                            <strong>{tracks.artist}</strong> 
                            <br /> {tracks.name} 
                            <div><iframe title={tracks.id} width="224" height="176" src={tracks.url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                        </div>
                    )
                })}
                </ContainerTracks>
            </div>
        )
    }
}

export default Playlists
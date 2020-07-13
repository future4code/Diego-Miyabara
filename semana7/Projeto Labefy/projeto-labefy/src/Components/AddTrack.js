import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

const ContainerInput = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
margin: 10px auto;
`

const ContainerAddMusic = styled.div`
border: 1px solid green;
width: 500px;
margin: 0 auto;
border-radius: 10px;
`

class AddTrack extends React.Component {
    state = {
        playlists: [],
        playlistDetail: [],
        inputNameTrack: '',
        inputArtistTrack: '',
        inputUrlTrack: '',
        render: true,
        playlistId: ''
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

    addTrackToPlaylist = (playlistId) => {
        const body = {
            "name": this.state.inputNameTrack,
            "artist": this.state.inputArtistTrack,
            "url": this.state.inputUrlTrack
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, {
            headers: {
                Authorization: 'diego-miyabara-turing'
            }
        })
        .then(response => {
            alert('Música adicionada com sucesso!')
            this.setState({inputNameTrack: "", inputArtistTrack: "", inputUrlTrack: ""})
        })
        .catch(err =>
            console.log(err))
            alert("Não foi possível adicionar a música")
            this.setState({inputNameTrack: "", inputArtistTrack: "", inputUrlTrack: ""})
    }

    showRender = (playlistId) => {
        this.setState({render: !this.state.render})
        this.setState({playlistId: playlistId})
    }

    onChangeInputName = (event) => {
        this.setState({inputNameTrack: event.target.value})
    }
    onChangeInputArtist = (event) => {
        this.setState({inputArtistTrack: event.target.value})
    }
    onChangeInputUrl = (event) => {
        this.setState({inputUrlTrack: event.target.value})
    }

    render() {

        const render = () => {
            if (this.state.render){
                return this.state.playlists.map((playlist) => {
                    return (
                        <div key={playlist.id}>
                            <PlaylistButton onClick={() => this.showRender(playlist.id)}>{playlist.name}</PlaylistButton>
                        </div>
                    )
                })
            }
             else {
                return(
                    <ContainerAddMusic>
                        <h3>Adicionar música na playlist</h3>
                        <ContainerInput>   
                            <label>Nome:</label>
                            <input 
                            onChange={this.onChangeInputName} 
                            value={this.state.inputNameTrack} 
                            placeholder="Informe o Nome da Música"/>
                        </ContainerInput> 
                        <ContainerInput>
                            <label>Artista:</label>
                            <input 
                            onChange={this.onChangeInputArtist} 
                            value={this.state.inputArtistTrack}
                            placeholder="Informe o Artista da Música"/>
                        </ContainerInput>
                        <ContainerInput>
                            <label>URL:</label>
                            <input 
                            onChange={this.onChangeInputUrl} 
                            value={this.state.inputUrlTrack}
                            placeholder="Informe a URL da Música"/>
                        </ContainerInput>
                        <PlaylistButton onClick={() => this.addTrackToPlaylist(this.state.playlistId)}>Adicionar Música</PlaylistButton>
                        <PlaylistButton onClick={this.showRender}>Voltar</PlaylistButton>
                    </ContainerAddMusic>
                )
            }
        }
            
        return(
            <div>
                <h3>Selecione a playlist que deseja adicionar a música:</h3>
                <div>
                    {render()}
                </div>
            </div>
        )
    }
}

export default AddTrack
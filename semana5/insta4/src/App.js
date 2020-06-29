import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Header = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-style: italic;
`

const ImgHeader = styled.img`
  width: 20px;
`

const InputPost = styled.input`
  display: block;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`

const NovoPost = styled.div`
  text-align: center;
  margin: 20px;
  background-color: grey;
  color: #fff;
  padding: 30px;
  border-radius: 10px;
`
const NovoPostH3 = styled.h3`
  margin: 0px;
  padding: 0px;
`

const PostButton = styled.button`
  background-color: grey;
  color: #FFF;
  border: 1px solid #fff;
  border-radius: 5px;
`

class App extends React.Component {
  state = {
      posts:[
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'Soter',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/151'
      },
      {
        nomeUsuario:'Severo',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/152'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    const novosPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novosPosts });
    this.setState({valorInputNomeUsuario: "", valorInputFotoUsuario:"", valorInputFotoPost:""})
  };

  onChangeInputNomeUsuario = event => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = event => {
    this.setState({valorInputFotoPost: event.target.value});
  };

  render() {
    const listaDePosts = this.state.posts.map((post => {
      return (
        <Post key={post.nomeUsuario} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/>
      );
    }));

    return (
      <div className={'app-container'}>
        <Header>
          <ImgHeader src="https://cdn.icon-icons.com/icons2/788/PNG/512/photo-camera_icon-icons.com_65001.png" />
          <h2>LabeGram</h2>
          <ImgHeader src="https://cdn.icon-icons.com/icons2/1678/PNG/512/wondicon-ui-free-send_111204.png" />
        </Header>
                
        <NovoPost>
          <NovoPostH3>Adicionar Novo Post</NovoPostH3>
          <InputPost
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />
          <InputPost
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link da foto do usuário"}
          />
          <InputPost
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link da foto do Post"}
          />
          <PostButton onClick={this.adicionaPost}>Adicionar Post</PostButton>
        </NovoPost>
        
        <div>{listaDePosts}</div>
        
      </div> 
    );
    }
}

export default App;

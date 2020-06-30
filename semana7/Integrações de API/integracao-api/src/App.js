import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerDados = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  width:30%;
  margin: 0 auto;
  padding: 24px;
`

const ContainerInput = styled.div`
display: flex;
margin: 8px;
align-self:center;
`

const ButtonSalvar = styled.button`
  background-color: navy;
  color: #FFF;
  width: 50%;
  align-self: center;
  margin-top: 8px;
  border:none;
  border-radius: 10px;
  height: 24px;
`

const ContainerUsuarios = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`

const Usuario = styled.p`
  border-bottom: 1px solid black;
  padding: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ContainerNomes = styled.div`
width: 20%;
display: flex;
flex-direction: column;
justify-content:space-around;
`

class App extends React.Component {
  state = {
    renderizacao: true,
    usuarios: [],
    inputNomeUsuario: '',
    inputEmailUsuario: ''
  }

  componentDidMount = () => {
    this.buscarUsuario();
  };

  clickRenderizacao = () => {
    this.setState({renderizacao: !this.state.renderizacao})
  }

  buscarUsuario = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
        {
          headers: {
            Authorization: "diego-miyabara-turing"
          }
        }
      )
    .then(response => {
      this.setState({usuarios: response.data})
    })
    .catch(error => {
      console.log(error.data)
    })
  }

  criarUsuario = () => {
    const body = {
      name: this.state.inputNomeUsuario,
      email: this.state.inputEmailUsuario
    }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
      body, 
      {
        headers: {
          Authorization: "diego-miyabara-turing"
        }
      }
    )
    .then(response => {
      alert("Usuário criado com sucesso!");
      this.setState({inputNomeUsuario: ""});
      this.setState({inputEmailUsuario: ""});  
      this.buscarUsuario()
    }) .catch(error => {
      alert("Não foi possível cadastrar o usuário!")
      console.log(error.data)
    })
  }

  deletarUsuario = (userId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
      headers: {
        Authorization:'diego-miyabara-turing'
      }
    }).then((response) => {
      this.buscarUsuario()
      alert("Deseja mesmo excluir este usuário?")
    }).catch((error) => {
      console.log(error.data)
    })
  }

  onChangeInputNome = event => {
    this.setState({inputNomeUsuario: event.target.value})
  }

  onChangeInputEmail = event => {
    this.setState({inputEmailUsuario: event.target.value})
  }

  render(){
    const renderizacao = () => {
      if(this.state.renderizacao){
        return(
        <div>
          <button onClick={this.clickRenderizacao}>Ir para a página de lista</button>
          <ContainerDados>
            <ContainerInput>
              <label>Nome: </label>
              <input placeholder="Insira seu nome" onChange={this.onChangeInputNome} />
            </ContainerInput>
            <ContainerInput> 
              <label>E-mail: </label>
              <input placeholder="Insira seu e-mail" onChange={this.onChangeInputEmail}/>
            </ContainerInput> 
            <ButtonSalvar onClick={this.criarUsuario}>Salvar</ButtonSalvar>
          </ContainerDados>
        </div>  
        )
      } else{
        return (
          <div>
            <button onClick={this.clickRenderizacao}>Voltar</button>
            <ContainerUsuarios>
              <h3>Usuários Cadastrados</h3>
              <ContainerNomes>
                {this.state.usuarios.map(usuario => {
                  return <Usuario key={usuario.id}>{usuario.name} <button onClick={() => this.deletarUsuario(usuario.id)}>x</button></Usuario>;
                })}
              </ContainerNomes>
            </ContainerUsuarios>  
          </div>
        )
      }
    }
    return (
      <div>
        {renderizacao()}
      </div>
    );
  }
}

export default App;

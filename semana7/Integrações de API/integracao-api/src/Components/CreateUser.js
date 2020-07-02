import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

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

class CreateUser extends React.Component {
    state = {
        usuarios: [],
        inputNomeUsuario: '',
        inputEmailUsuario: ''
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
          this.setState({inputNomeUsuario: ""});
          this.setState({inputEmailUsuario: ""});  
          alert("Usuário criado com sucesso!");
        }) 
        .catch(error => {
          alert("Não foi possível cadastrar o usuário!")
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
        return(
        <div>
            
            <ContainerDados>
                <ContainerInput>
                <label>Nome: </label>
                <input placeholder="Insira seu nome" value ={this.state.inputNomeUsuario}onChange={this.onChangeInputNome} />
                </ContainerInput>
                <ContainerInput> 
                <label>E-mail: </label>
                <input placeholder="Insira seu e-mail" value={this.state.inputEmailUsuario} onChange={this.onChangeInputEmail}/>
                </ContainerInput> 
                <ButtonSalvar onClick={this.criarUsuario}>Salvar</ButtonSalvar>
            </ContainerDados>
        </div>  
        )
    }
}

export default CreateUser
import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerUsuarios = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`
const Titulo = styled.h3`

`

const Usuario = styled.p`
  border: 1px solid hsl(236, 32%, 26%);
  padding: 12px 24px;
  margin: 8px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  font-weight: 500;
  box-sizing:border-box;
`

const ContainerNomes = styled.div`
width: 25%;
display: flex;
flex-direction: column;
justify-content:space-around;
`

const Carregamento = styled.div`
text-align:center;
`

const BotaoExcluir = styled.button`
    background-color: #E64B2A;
    color: #FFF;
    border: none;
    border-radius: 20%;
`

const BotaoUser = styled.button`
    background-color: #FFF;
    border: none;
`

class UserDetail extends React.Component {
    state = {
        usuarios: [],
        renderizar: false,
        detalheUsuario: {}
    }

    componentDidMount = () => {
        this.buscarTodosUsuarios();
    };

    buscarTodosUsuarios = () => {
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
    
    deletarUsuario = (userId) => {
        if(window.confirm("Você deseja excluir este usuário?")){
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
                headers: {
                    Authorization:'diego-miyabara-turing'
                }
            })
            .then((response) => {
                this.buscarTodosUsuarios()
            })
            .catch((error) => {
                console.log(error.data)
            })
        }

    }

    // buscarUsuario = (userId) => {
    //     axios
    //         .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`), {
    //         headers: {
    //             Authorization: 'diego-miyabara-turing'
    //         }
    //     }.then((response) => {
    //         this.setState({detalheUsuario: response.data})
    //     }).catch((error) => {
    //         console.log(error.data)
    //     })
    // }

    renderizarDetalhe = () => {
        this.setState({renderizar: !this.state.renderizar})
    }

    render(){
        const detalheUsuario = () => {
            if (this.state.renderizar === true){
                return (
                    <div>
                       <div>Nome: {this.state.detalheUsuario.name}</div>
                        <div>Email: {this.state.detalheUsuario.email}</div>
                    </div>
                )
            } else {
                return <div></div>
            }
        }
        return(
            <div>
                <ContainerUsuarios>
                    <Titulo>Usuários Cadastrados</Titulo>
                    <ContainerNomes>
                        {this.state.usuarios.length === 0 && <Carregamento>Carregando usuários</Carregamento>}
                        {this.state.usuarios.map(usuario => {
                        return (
                            <Usuario key={usuario.id}>
                                <BotaoUser onClick={this.renderizarDetalhe}>{usuario.name}</BotaoUser> 
                                <BotaoExcluir onClick={() => this.deletarUsuario(usuario.id)}>x</BotaoExcluir>
                                {detalheUsuario()}
                            </Usuario>)
                        })}
                    </ContainerNomes>
                </ContainerUsuarios>  
            </div>
        )
    }
}

export default UserDetail
import React from 'react';
import styled from 'styled-components';
import CreateUser from './Components/CreateUser';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';

const ContainerApp = styled.div `

`

const ContainerButton = styled.div `
  display: flex;
  justify-content: center;
  margin: 16px;
`

const ButtonMenu = styled.button `
  margin: 0 8px;
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  
  :hover {
  cursor: pointer;
  animation: jelly 0.5s;
  }

  @keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
  }
`

class App extends React.Component {
  state = {
    renderizacao: 'create-user',
  }

  renderizaCreateUser = () => {
     this.setState({renderizacao: 'create-user'})
  }

  renderizaUserList = () => {
    this.setState({renderizacao: 'user-list'})
  }

  renderizaUserDetail = () => {
    this.setState({renderizacao: 'user-detail'})
  }

  render(){
    const renderizacao = () => {
      switch(this.state.renderizacao){
        case 'create-user':
          return <CreateUser />
        case 'user-list':
          return <UserList />
        case 'user-detail':
          return <UserDetail />
        default:
          return <CreateUser />
      }
    } 
    return (
      <ContainerApp>
        <ContainerButton>
          <ButtonMenu onClick={this.renderizaCreateUser}>Criar Usuário</ButtonMenu>
          <ButtonMenu onClick={this.renderizaUserList}> Lista de Usuário</ButtonMenu>
          <ButtonMenu onClick={this.renderizaUserDetail}> Detalhes dos Usuários</ButtonMenu>
        </ContainerButton>
        {renderizacao()}
      </ContainerApp>
    );
  }
  }

export default App;

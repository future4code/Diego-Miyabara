import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import brasaogryffindor from '../images/brasao-griffindor.png'
import brasaohufflepuff from '../images/brasao-hufflepuff.png'
import brasaoslytherin from '../images/brasao-slytherin.png'
import brasaoravenclaw from '../images/brasao-ravenclaw.png'

const H1Titulo = styled.h1`
  margin: 0;
  padding: 8px;
  width:60%;
  text-align: center;
  color:#FFF;
  background: #111;
  border: 1px solid #FFF;
  border-radius: 10px;
  margin: 16px;
`

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 92vh;
    color:#FFF;
`
const BotoesAnimados = styled.button`
  width: 220px;
  height: 50px;
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


class Home extends React.Component {
    state = {
        randomHouse: []
    }

    clickHouse = () => {
        axios
        .get('https://www.potterapi.com/v1/sortingHat')
        .then((response) => {
            this.setState({randomHouse: response.data})
        })
    }
     

    render(){
        const renderizaResultado = () => {
            switch(this.state.randomHouse){
                case 'Gryffindor':
                    return (
                        <div>
                            <h1>Griffindor!</h1>
                            <img src={brasaogryffindor} height="250px" alt="Griffindor"/>
                        </div>
                    )
                case 'Ravenclaw':
                    return (
                        <div>
                            <h1>Ravenclaw!</h1>
                            <img src={brasaoravenclaw} height="250px" alt="Ravenclaw"/>
                        </div>
                    )
                case 'Hufflepuff':
                    return (
                        <div>
                            <h1>Hufflepuff!</h1>
                            <img src={brasaohufflepuff} height="250px" alt="Hufflepuff"/>
                        </div>
                    )
                case 'Slytherin':
                    return (
                        <div>
                            <h1>Slytherin!</h1>
                            <img src={brasaoslytherin} height="250px" alt="Slytherin"/>
                        </div>
                    )   
                default:
                    return <div></div> 
            }
        }   
        
        return(
            <ContainerApp>
                <H1Titulo>Bem vindo ao Wiki do Harry Potter!</H1Titulo>
                <div>
                    <h3>Qual casa você perteceria caso fosse aceito em Hogwards?</h3>
                    <BotoesAnimados onClick={this.clickHouse}>Pergunte ao chapéu seletor!</BotoesAnimados>
                    {renderizaResultado()}
                </div>
            </ContainerApp>
        )
    }
}

export default Home;
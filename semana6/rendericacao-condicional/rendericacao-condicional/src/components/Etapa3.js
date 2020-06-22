import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada'

class Etapa3 extends React.Component {
    state = {
  
    }
    render() {
      return (
        <div className="App">
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <PerguntaAberta pergunta={"7. Porque você não terminou um curso de graduação?"} />
            <PerguntaFechada 
                pergunta={"8. Você fez algum curso complementar?"} 
                opcoes={["Nenhum", "Curso Técnico", "Curso de inglês"]} 
            />
        </div>
      );
    } 
  }
  
  export default Etapa3;
  
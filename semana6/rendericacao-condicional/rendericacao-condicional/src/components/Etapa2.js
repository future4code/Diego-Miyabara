import React from 'react';
import PerguntaAberta from './PerguntaAberta';

class Etapa2 extends React.Component {
    state = {
  
    }
    render() {
      return (
        <div className="App">
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <PerguntaAberta pergunta={"5. Qual curso?"} />
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
        </div>
      );
    } 
  }
  
  export default Etapa2;
  
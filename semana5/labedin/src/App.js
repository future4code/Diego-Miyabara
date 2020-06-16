import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPessoal from './perfil.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEmail from './email.png'
import ImagemEndereco from './endereco.png'
import ImagemAeroclube from './aeroclube.jpg'
import CardQuadrado from './components/CardQuadrado/CardQuadrado';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPessoal}
          nome="Diego Massatoshi Miyabara" 
          descricao="Oi, eu sou o Diego. Sou aluno da Labenu. Estou estudando para me tornar um programador full stack! Sou formado em Administração e Ciências Aeronáuticas e antes de me aventurar como programador fui instrutor de vôo de avião no Aeroclube de Londrina!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno imagem={ImagemEmail} titulo="Email" valor="diego.miyabara@hotmail.com"/>
        <CardPequeno imagem={ImagemEndereco} titulo="Endereço" valor="Rua dos Manicacas, 1013"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemAeroclube} 
          nome="Aeroclube de londrina" 
          descricao="Instrutor de vôo de avião! Função: Ensinar os alunos a não se matarem e não matarem as outras pessoas também! (incluindo o instrutor)" 
        />
        
        <CardGrande 
          imagem="https://irp-cdn.multiscreensite.com/6855274a/dms3rep/multi/logo.jpg" 
          nome="Viaer Soluções Aeronáuticas" 
          descricao="Agente de importação e relações internacionais. Função: Gastar dinheiro de quem não tem onde gastar com avião." 
        />
      </div>

      <div >
        <h2>Objetivos de vida</h2>
        <div className="page-section-container-quadrado">
          <CardQuadrado imagem="https://www.fluentu.com/blog/english-por-br/wp-content/uploads/sites/35/2015/09/english-for-travelers.jpg" valor="Viajar o mundo!"/>
          <CardQuadrado imagem="https://heypeppers.com.br/blog/wp-content/uploads/2016/09/IMG_9640-788x525.jpg" valor="Conhecer culturas!" />
          <CardQuadrado imagem="https://infofeiras.com.br/wp-content/uploads/2018/04/shutterstock_556759903.jpg" valor="Curtir os amigos!"/>
        </div>
        

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

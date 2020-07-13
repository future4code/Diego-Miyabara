import React from 'react';
import './App.css';
import MainCard from './Components/MainCard';
import styled from 'styled-components';

const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

function App() {
  return (
    <MainContainer className="App">
      <MainCard />
    </MainContainer>
  );
}

export default App;

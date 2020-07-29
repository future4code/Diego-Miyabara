import React from 'react';
import './App.css';
import { MainContainer, HeaderContainer} from './styles';
import WeekTasks from './Components/WeekTasks/WeekTasks';
import TaskForm from './Components/TaskForm/TaskForm';

function App() {
  return (
    <MainContainer>
      <HeaderContainer>
        <h1>Weekly Planner</h1>
      </HeaderContainer>
      <TaskForm />
      <WeekTasks />
    </MainContainer>
  );
}

export default App;

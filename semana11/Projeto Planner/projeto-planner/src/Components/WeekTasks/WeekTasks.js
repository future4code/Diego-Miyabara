import React, {useState, useEffect} from 'react';
import { WeekContainer, DayContainer, DayTitle, DeleteButton} from './Style';
import axios from 'axios'

function WeekTasks () {
    const [tasks, setTasks] = useState([])
    const baseUrl= "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara"
  
    useEffect(() => {
      axios.get(baseUrl)
      .then((response) => {
        setTasks(response.data)
      })
    }, [baseUrl])

    const handleDelete = (taskId) => {
      if(window.confirm("Tem certeza que deseja excluir esta tarefa?")){
        axios.delete(`${baseUrl}/${taskId}`)
        .then(() => {
          window.location.reload()
        })
        .catch(() => {
          alert("Não foi possível excluir a tarefa.")
        })
    }}

    return(
        <WeekContainer>   
          <DayContainer>
            <DayTitle>Segunda-feira</DayTitle>
              {tasks.map((task) => {
                  return(task.day === "Segunda" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => handleDelete(task.id)}>X</DeleteButton></p> : <div key={task.id}></div>)
              })}
          </DayContainer>
          <DayContainer>
            <DayTitle>Terça-feira</DayTitle>
              {tasks.map((task) => {
                  return(task.day === "Terca" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)
              })}
          </DayContainer>
          <DayContainer>
            <DayTitle>Quarta-feira</DayTitle>
              {tasks.map((task) => {
                  return(task.day === "Quarta" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => handleDelete(task.id)}>X</DeleteButton></p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer>
            <DayTitle>Quinta-feira</DayTitle>
              {tasks.map((task) => {
                  return(task.day === "Quinta" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer>
            <DayTitle>Sexta-Feira</DayTitle>
              {tasks.map((task) => {
                  return(task.day === "Sexta" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer>
            <DayTitle>Sábado</DayTitle>
              {tasks.map((task) => {
                  return(task.day === "Sabado" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer>
            <DayTitle>Domingo</DayTitle>
              {tasks.map((task) => {
                  return(task.day === "Domingo" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
        </WeekContainer>   
    )
}

export default WeekTasks;
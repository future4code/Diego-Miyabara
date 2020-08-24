import React from 'react';
import { WeekContainer, DayContainer, DayTitle, DeleteButton} from './Style';


function WeekTasks (props) {

    return(
        <WeekContainer title="WeekTasks">   
          <DayContainer title="segunda">
            <DayTitle>Segunda-feira</DayTitle>
              {props.tasks.map((task) => {
                  return(task.day === "Segunda" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => props.handleDelete(task.id)}>X</DeleteButton></p> : <div key={task.id}></div>)
              })}
          </DayContainer>
          <DayContainer title="terca">
            <DayTitle>Terça-feira</DayTitle>
              {props.tasks.map((task) => {
                  return(task.day === "Terca" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => props.handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)
              })}
          </DayContainer>
          <DayContainer title="quarta">
            <DayTitle>Quarta-feira</DayTitle>
              {props.tasks.map((task) => {
                  return(task.day === "Quarta" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => props.handleDelete(task.id)}>X</DeleteButton></p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer title="quinta">
            <DayTitle>Quinta-feira</DayTitle>
              {props.tasks.map((task) => {
                  return(task.day === "Quinta" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => props.handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer title="sexta">
            <DayTitle>Sexta-Feira</DayTitle>
              {props.tasks.map((task) => {
                  return(task.day === "Sexta" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => props.handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer title="sabado">
            <DayTitle>Sábado</DayTitle>
              {props.tasks.map((task) => {
                  return(task.day === "Sabado" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => props.handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
          <DayContainer title="domingo">
            <DayTitle>Domingo</DayTitle>
              {props.tasks.map((task) => {
                  return(task.day === "Domingo" ? <p key={task.id}>{task.text} <DeleteButton onClick={() => props.handleDelete(task.id)}>X</DeleteButton> </p> : <div key={task.id}></div>)                
              })}
          </DayContainer>
        </WeekContainer>   
    )
}

export default WeekTasks;
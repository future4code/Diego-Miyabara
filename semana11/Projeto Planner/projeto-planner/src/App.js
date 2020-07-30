import React, {useState, useEffect} from 'react';
import './App.css';
import { MainContainer, HeaderContainer} from './styles';
import WeekTasks from './Components/WeekTasks/WeekTasks';
import TaskForm from './Components/TaskForm/TaskForm';
import useForm from './Hooks/useForm'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])
  const {form, onChange, resetForm} = useForm({text: "", day: ""})
    const baseUrl= "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara"
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    const getTasks = () => {
      axios.get(baseUrl)
      .then((response) => {
        setTasks(response.data)
      })
    }
    useEffect(() => {
      getTasks()
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const body = {
            text: form.text,
            day: form.day
        }
        if(form.text !== "" && form.day !== ""){
          axios.post(baseUrl, body)
          .then(() => {
            alert("Tarefa Criada com sucesso")
            resetForm()
            getTasks()
        })} else {
          alert("Verifique se todos os campos foram preenchidos!")
        }
    }

    const handleDelete = (taskId) => {
      if(window.confirm("Tem certeza que deseja excluir esta tarefa?")){
        axios.delete(`${baseUrl}/${taskId}`)
        .then(() => {
          getTasks()
        })
    }}

  return (
    <MainContainer>
      <HeaderContainer>
        <h1>Weekly Planner</h1>
      </HeaderContainer>
      <TaskForm 
      form={form}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      />
      <WeekTasks 
      tasks={tasks}
      handleDelete={handleDelete}
      />
    </MainContainer>
  );
}

export default App;

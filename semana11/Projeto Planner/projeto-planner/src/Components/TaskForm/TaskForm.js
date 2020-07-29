import React from 'react'
import {FormContainer} from './Style'
import useForm from '../../Hooks/useForm'
import axios from 'axios'

function TaskForm () {
    const {form, onChange} = useForm({text: "", day: ""})
    const baseUrl= "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diegomiyabara"
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const body = {
            text: form.text,
            day: form.day
        }
        axios.post(baseUrl, body)
        .then(() => {
            alert("Tarefa Criada com sucesso")
            window.location.reload()
        })
    }
    return(
        <FormContainer>
            <form onSubmit={handleFormSubmit}>
                <input 
                placeholder="Nome da tarefa"
                onChange={handleInputChange}
                name="text" />
                <select
                onChange={handleInputChange}
                name="day">
                    <option value="">Dia da Semana</option>
                    <option value="Segunda">Segunda-feira</option>
                    <option value="Terca">Terça-feira</option>
                    <option value="Quarta">Quarta-feira</option>
                    <option value="Quinta">Quinta-feira</option>
                    <option value="Sexta">Sexta-feira</option>
                    <option value="Sabado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                </select>
                <button>Enviar Tarefa</button>
            </form>
        </FormContainer>
    )
}

export default TaskForm
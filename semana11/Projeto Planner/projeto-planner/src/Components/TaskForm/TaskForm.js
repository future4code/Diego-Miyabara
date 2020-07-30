import React from 'react'
import {FormContainer} from './Style'


function TaskForm (props) {

    return(
        <FormContainer>
            <form onSubmit={props.handleFormSubmit}>
                <input 
                placeholder="Nome da tarefa"
                onChange={props.handleInputChange}
                name="text"
                value={props.form.text} />
                <select
                title="Select"
                onChange={props.handleInputChange}
                name="day"
                value={props.form.day}
                >
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
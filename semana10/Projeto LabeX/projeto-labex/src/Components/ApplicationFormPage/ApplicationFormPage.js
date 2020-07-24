import React from 'react'
import Countries from './Countries'
import useRequestData from '../../Hooks/useRequestData'
import useForm from '../../Hooks/useForm'
import Header from '../Header/Header'
import Axios from 'axios'
import styled from 'styled-components'

const TextArea = styled.textarea`
    resize: none;
`


function ApplicationFormPage () {
    const trips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/trips', [], "trips")
    const {form, onChange} = useForm({name:"", age: "", applicationText: "", profession: "", country: "", trip: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country
        }
        Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/trips/${form.trip}/apply`, body)
        .then(() => {
            alert("Você se aplicou com sucesso! Aguarde a aprovação!")
            window.location.reload()
        })
        .catch((err) => {
            alert("Não foi possível se aplicar, verifique novamente se todas as informações estão corretas.")
        })
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleFormSubmit}>
                    <h3>Formulário de Participação</h3>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Digite seu Nome Completo"
                        pattern="^.{3,}"
                        title="Seu nome precisa ter no mínimo 3 caracteres"
                        value={form.name}
                        required
                        onChange={handleInputChange}
                    />
                    <br></br>
                    <input 
                        type="number" 
                        min="18"
                        name="age"
                        placeholder="Digite sua idade"
                        value={form.age} 
                        required
                        onChange={handleInputChange}
                    />
                    <TextArea
                        rows="5"
                        cols="100"
                        name="applicationText"
                        placeholder="Digite o porque você merece ser selecionado"
                        pattern="^.{30,}"
                        title="O texto precisa ter no mínimo 30 caracteres"
                        value={form.applicationText} 
                        required
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="profession"
                        placeholder="Digite sua profissão"
                        pattern="^.{5,}"
                        title="A profissão precisa ter no mínimo 5 caracteres"
                        value={form.profession} 
                        required
                        onChange={handleInputChange}
                    />
                    <select 
                        name="country"
                        onChange={handleInputChange}
                        value={form.country} 
                        required
                    >
                        <option value="">
                            Escolha o País
                        </option>
                        <Countries/>
                    </select>
                    <select 
                        name="trip"
                        onChange={handleInputChange}
                        value={form.trip} 
                        required
                    >
                        <option value="">Escolha a Viagem</option>
                        {trips.map((trip) => {
                            return (
                                <option key={trip.id} value={trip.id}>{trip.name}</option>
                            )
                        })}
                    </select>
                    <br></br>
                    <button>Enviar Formulário</button>
                </form>
        </div>
    )
}

export default ApplicationFormPage
import React from 'react'
import Countries from './Countries'
import useRequestData from '../../Hooks/useRequestData'
import useForm from '../../Hooks/useForm'
import Header from '../Header/Header'
import Axios from 'axios'
import {SelectField, SyledPaper, StyledForm, StyledButton} from "./Styles"
import { TextField } from '@material-ui/core'
import { useHistory } from "react-router-dom";


function ApplicationFormPage () {
    const trips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/trips', [], "trips")
    const history = useHistory();
    const {form, onChange} = useForm({name:"", age: "", applicationText: "", profession: "", country: "", trip: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    const goToHomePage = () => {
        history.push("/")
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
            <SyledPaper>
            <StyledForm onSubmit={handleFormSubmit}>
                    <h3>Formulário de Participação</h3>
                    <TextField
                        variant="outlined"
                        label="Nome Completo"
                        fullWidth="true"
                        inputProps={{pattern: "^.{3,}", title:"Seu nome precisa ter no mínimo 3 caracteres"}}                        
                        type="text"
                        name="name"
                        placeholder="Digite seu Nome Completo"
                        value={form.name}
                        required
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Idade"
                        fullWidth="true"
                        type="number" 
                        min="18"
                        name="age"
                        placeholder="Digite sua idade"
                        value={form.age} 
                        required
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Motivo de ser escolhido"
                        fullWidth="true"
                        multiline
                        rows={4}
                        inputProps={{pattern: "^.{30,}", title:"O texto precisa ter no mínimo 30 caracteres"}} 
                        name="applicationText"
                        placeholder="Digite o porque você merece ser selecionado"
                        value={form.applicationText} 
                        required
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Profissão"
                        fullWidth="true" 
                        inputProps={{pattern: "^.{5,}", title:"A profissão precisa ter no mínimo 5 caracteres"}} 
                        type="text" 
                        name="profession"
                        placeholder="Digite sua profissão"
                        value={form.profession} 
                        required
                        onChange={handleInputChange}
                    />
                    <SelectField 
                        name="country"
                        onChange={handleInputChange}
                        value={form.country} 
                        required
                    >
                        <option value="">
                            Escolha o País
                        </option>
                        <Countries/>
                    </SelectField>
                    <SelectField 
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
                    </SelectField>
                    <br></br>
                    <StyledButton type="submit" color="violet">Enviar Formulário</StyledButton>
                </StyledForm>
                    <StyledButton color="red" onClick={goToHomePage}>Voltar para a página inicial</StyledButton>
                </SyledPaper>
        </div>
    )
}

export default ApplicationFormPage
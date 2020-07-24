import React, {useEffect} from 'react';
import Header from '../Header/Header';
import {ContainerLogin, ContainerInputs, ContainerButton} from './Styles';
import {TextField} from '@material-ui/core';
import useForm from '../../Hooks/useForm'
import { useHistory } from "react-router-dom";
import {Button, Alert} from 'rsuite'
import Axios from 'axios';

function CreateNewUserPage () {
    const history = useHistory();
    const {form, onChange} = useForm({email:"", password: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
    },[history])
    const handleCreateUser = (event) => {
        event.preventDefault()
        const body= {
            "email": form.email,
	        "password": form.password
        }
        Axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/signup", body)
        .then(() => {
            Alert.success("Usuário criado com sucesso!")
            history.push("/create-new-user")
        })
        .catch(() => {
            Alert.warning("Não foi possível criar o usuário.")
        })
    }
    const goToListTripPage = () => {
        history.push("/list-trip")
    }
    return (
        <div>
            <Header />
            <ContainerLogin>
                <form onSubmit={handleCreateUser}>
                    <h3>Novo Usuário</h3>
                    <ContainerInputs>
                        <TextField 
                            label="Login" 
                            variant="outlined"
                            type="email"
                            name="email"
                            placeholder="Digite seu E-mail"
                            value={form.email}
                            required
                            onChange={handleInputChange}
                        />
                        <br></br>
                        <TextField  
                            label="Senha" 
                            variant="outlined"                      
                            type="password" 
                            name="password"
                            placeholder="Digite sua senha"
                            value={form.password} 
                            required
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>
                    <ContainerButton>
                        <Button color="violet" type="submit">Criar novo usuário!</Button>
                        <Button color="red" onClick={goToListTripPage}>Voltar</Button>
                    </ContainerButton>
                </form>
            </ContainerLogin> 
        </div>
    )
}

export default CreateNewUserPage
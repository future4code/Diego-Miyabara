import React, {useEffect} from 'react'
import { ContainerLogin, ContainerInputs} from './Style'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import useForm from '../../Hooks/useForm'
import axios from 'axios';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button, Alert } from 'rsuite';
import {TextField} from '@material-ui/core'

function LoginPage () {
    const history = useHistory();
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing"
    const {form, onChange} = useForm({email:"", password: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token !== null){
            history.push("/list-trip")
        }
    },[history])

    const handleLogin = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post(`${baseUrl}/login`, body)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            Alert.success("Login feito com sucesso!", 3000)
            history.push("/list-trip")
        })
        .catch(err => {
            Alert.error("Email ou senha inválidos!", 3000)
        })  
    }
    return (
        <div>
            <Header />
            <ContainerLogin>
                <form onSubmit={handleLogin}>
                    <h3>Login</h3>
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
                    <br></br>
                    <Button color="violet" type="submit">Fazer Login</Button>
                </form>
            </ContainerLogin>    
        </div>
    )
}

export default LoginPage
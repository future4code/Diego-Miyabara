import React, {useEffect} from 'react'
import { ContainerLogin, LoginButton} from './Style'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import useForm from '../../Hooks/useForm'
import axios from 'axios';

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
            history.push("/list-trip")
        })
        .catch(err => {
            alert("Email ou senha inválidos!")
            window.location.reload()
        })  
    }
    return (
        <div>
            <Header />
            <ContainerLogin>
                <form onSubmit={handleLogin}>
                    <h3>Login</h3>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Digite seu E-mail"
                        value={form.email}
                        required
                        onChange={handleInputChange}
                    />
                    <br></br>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Digite sua senha"
                        value={form.password} 
                        required
                        onChange={handleInputChange}
                    />
                    <br></br>
                    <LoginButton>Fazer Login</LoginButton>
                </form>
            </ContainerLogin>    
        </div>
    )
}

export default LoginPage
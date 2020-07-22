import React, {useEffect} from 'react'
import { ContainerLogin, TituloLogin, LoginButton} from './Style'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import useInput from '../../Hooks/useInput'
import axios from 'axios';

function LoginPage () {
    const [email, setEmail] = useInput("")
    const [password, setPassword] = useInput("")
    const history = useHistory();
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing"
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token !== null){
            history.push("/list-trip")
        }
    },[history])

    const handleLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${baseUrl}/login`, body)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            history.push("/list-trip")
        })
        .catch(err => {
            alert("Email ou senha inválidos!")

        })  
    }
    return (
        <div>
            <Header />
            <ContainerLogin>
                <div>
                    <TituloLogin>Email:</TituloLogin>
                    <input value={email} onChange={setEmail}/>
                </div>
                <div>
                    <TituloLogin>Senha:</TituloLogin>
                    <input type="password" value={password} onChange={setPassword}/>
                </div>
                <LoginButton onClick={handleLogin}>Fazer Login</LoginButton>
            </ContainerLogin>    
        </div>
    )
}

export default LoginPage
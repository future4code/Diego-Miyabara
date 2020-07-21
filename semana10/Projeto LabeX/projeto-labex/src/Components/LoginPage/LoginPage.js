import React from 'react'
import { ContainerLogin, TituloLogin, LoginButton} from './Style'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';

function LoginPage () {
    const history = useHistory();
    
    const goToListTripPage = () => {
        history.push("/list-trip")
    }
    return (
        <div>
            <Header />
            <ContainerLogin>
                <div>
                    <TituloLogin>Login:</TituloLogin>
                    <input />
                </div>
                <div>
                    <TituloLogin>Senha:</TituloLogin>
                    <input />
                </div>
                <LoginButton onClick={goToListTripPage}>Fazer Login</LoginButton>
            </ContainerLogin>    
        </div>
    )
}

export default LoginPage
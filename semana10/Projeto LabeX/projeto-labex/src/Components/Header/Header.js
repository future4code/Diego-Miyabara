import React from 'react'
import {HeaderContainer, ContainerTitulo, TituloHeader, TituloOrg, ButtonContainer} from "./Style"
import { useHistory } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';

function Header () {
    const history = useHistory();
    const goToLoginPage = () => {
        history.push("/login")
    }
    const goToHomePage = () => {
        history.push("/")
    }

    const handleLogout = () => {
        window.localStorage.clear()
        history.push("/")
        window.location.reload()
    }
    const renderButton = () => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            return(
                <ButtonContainer>
                    <Button color="blue" appearance="ghost" size="sm" onClick={goToLoginPage}>Portal do Administrador</Button> 
                </ButtonContainer>
            )
        }else {
            return(
                <ButtonContainer>
                    <Button color="blue" appearance="ghost" size="sm" onClick={goToLoginPage}>Painel do Administrador</Button> 
                    <Button color="blue" appearance="ghost" size="sm" onClick={handleLogout}>Fazer Logout</Button>
                </ButtonContainer>                
            )
        }
        
    }
    return(
        <HeaderContainer>
            <TituloOrg></TituloOrg>
            <ContainerTitulo>
                <TituloHeader onClick={goToHomePage}>LabeX</TituloHeader>
            </ContainerTitulo>
            {renderButton()}
        </HeaderContainer>
    )
}

export default Header
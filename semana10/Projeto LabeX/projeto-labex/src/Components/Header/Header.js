import React from 'react'
import {HeaderContainer, ContainerTitulo, TituloHeader, ButtonHeader, TituloOrg} from "./Style"
import { useHistory } from "react-router-dom";

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
    }
    const renderButton = () => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            return(
                <ButtonHeader onClick={goToLoginPage}>Portal do Administrador</ButtonHeader> 
            )
        }else {
            return(
                <>
                    <ButtonHeader onClick={goToLoginPage}>Painel do Administrador</ButtonHeader> 
                    <ButtonHeader onClick={handleLogout}>Fazer Logout</ButtonHeader>
                </>                
            )
        }
        
    }
    return(
        <HeaderContainer>
            <TituloOrg>Organizado por: Diego Miyabara</TituloOrg>
            <ContainerTitulo>
                <TituloHeader onClick={goToHomePage}>LabeX</TituloHeader>
            </ContainerTitulo>
            {renderButton()}
        </HeaderContainer>
    )
}

export default Header
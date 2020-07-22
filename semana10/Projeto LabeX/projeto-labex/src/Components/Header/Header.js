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
    return(
        <HeaderContainer>
            <TituloOrg>Organizado por: Diego Miyabara</TituloOrg>
            <ContainerTitulo>
                <TituloHeader onClick={goToHomePage}>LabeX</TituloHeader>
            </ContainerTitulo>
            <ButtonHeader onClick={goToLoginPage}>Portal do Administrador</ButtonHeader>
            <ButtonHeader onClick={handleLogout}>Fazer Logout</ButtonHeader>
        </HeaderContainer>
    )
}

export default Header
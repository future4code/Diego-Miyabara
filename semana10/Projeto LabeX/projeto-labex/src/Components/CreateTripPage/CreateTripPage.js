import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';

function CreateTripPage () {
    const history = useHistory();
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
    }, [history])

    const goToListTripPage = () => {
        history.push("/list-trip")
    }
    return (
        <div>
            <Header />
            <button onClick={goToListTripPage}>Lista de Viagens</button>
            <h1>Nova Viagem</h1>
        </div>
    )
}

export default CreateTripPage
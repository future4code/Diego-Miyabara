import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import useInput from '../../Hooks/useInput';
import axios from 'axios';

function CreateTripPage () {
    const history = useHistory();
    const [name, onChangeName] = useInput("")
    const [destination, onChangeDestination] = useInput("")
    const [description, onChangeDescription] = useInput("")
    const [date, onChangeDate] = useInput("")
    const [duration, onChangeDuration] = useInput("")
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
    }, [history])

    const goToListTripPage = () => {
        history.push("/list-trip")
    }

    const handleCreateTrip = () => {
        const token = window.localStorage.getItem("token")
        const body = {
            "name": name,
            "planet": destination,
            "date": date,
            "description": description,
            "durationInDays": duration
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-miyabara-turing/trips", body, {
            headers: {
                auth: token
            }
        })
        .then(() => {
            alert("Viagem cadastrada com sucesso!")
            window.location.reload()
        })
        .catch((err) => {
            alert("Não foi possível criar a viagem. Verifique se as informações estão corretas.")
            window.location.reload()
        })
    }
    return (
        <div>
            <Header />
            <button onClick={goToListTripPage}>Lista de Viagens</button>
            <h1>Nova Viagem</h1>
            <div>   
                <p>Nome da Viagem:</p>
                <input value={name} onChange={onChangeName}/>
                <p>Planeta Destino:</p>
                <input value={destination} onChange={onChangeDestination}/>
                <p>Descrição:</p>
                <input value={description} onChange={onChangeDescription}/>
                <p>Data do embarque:</p>
                <input value={date} onChange={onChangeDate} placeholder="Ex: 21/10/20"/>
                <p>Duração da viagem:</p>
                <input value={duration} onChange={onChangeDuration} placeholder="Ex: 365 dias"/>
            </div>
            <button onClick={handleCreateTrip}>Cadastrar Viagem</button>
            
        </div>
    )
}

export default CreateTripPage
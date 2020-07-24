import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import useForm from '../../Hooks/useForm'
import axios from 'axios';

function CreateTripPage () {
    const history = useHistory();
    const {form, onChange} = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
            history.push("/login")
        }
    }, [history])

    const goToListTripPage = () => {
        history.push("/list-trip")
    }

    const today = new Date().toISOString().split("T")[0]

    const handleCreateTrip = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem("token")
        const [ year, month, day ] = form.date.split("-")

        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": `${day}/${month}/${year.substring(2,4)}`,
            "description": form.description,
            "durationInDays": form.durationInDays
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
            <form onSubmit={handleCreateTrip}>   
                <p>Nome da Viagem:</p>
                <input 
                    name="name"
                    value={form.name} 
                    onChange={handleInputChange}
                    pattern="^.{5,}"
                    title="O nome da viagem precisa ter no mínimo 5 caracteres"
                    required
                />
                <p>Planeta Destino:</p>
                <select 
                    name="planet"
                    value={form.planet} 
                    onChange={handleInputChange}
                    required
                >
                    <option value=""></option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>
                <p>Descrição:</p>
                <input 
                    name="description"
                    value={form.description} 
                    onChange={handleInputChange}
                    pattern="^.{5,}"
                    title="O nome da viagem precisa ter no mínimo 30 caracteres"
                    required
                />
                <p>Data do embarque:</p>
                <input 
                    name="date"
                    type="date"
                    min={today}
                    value={form.date} 
                    onChange={handleInputChange}
                    placeholder="Ex: dd/mm/aa"
                    required
                />
                <p>Duração da viagem:</p>
                <input 
                    type="number"
                    min="50"
                    name="durationInDays"
                    value={form.durationInDays} 
                    onChange={handleInputChange} 
                    placeholder="Ex: 365 dias"
                    required
                />
                <br></br>
                <button>Cadastrar Viagem</button>
            </form>
            
        </div>
    )
}

export default CreateTripPage
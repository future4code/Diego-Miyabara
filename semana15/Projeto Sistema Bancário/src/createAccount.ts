import {writeToDatabase, readDatabase} from './index'
import moment from 'moment'

function createAccount (name: string, cpf: string, birthDate: moment.Moment):void {
    type conta = {
        name: string,
        cpf: string,
        birthDate: moment.Moment,
        saldo: number,
        extrato: extrato[]
    }

    type extrato = {
        valor: number,
        data: moment.Moment,
        descricao: string
    }

    const dataBase: conta[] = readDatabase()

    const newAccount:conta = { 
        name, 
        cpf, 
        birthDate: moment(birthDate, "DD/MM/YYYY"), 
        saldo:0, 
        extrato:[]
    }

    const today = moment()

    const diffBirth = today.diff(newAccount.birthDate, "years")

    if(diffBirth >= 18){
        dataBase.push(newAccount)
        console.log("Conta criada com sucesso!")
        writeToDatabase(dataBase)
    } else{
        console.log("Usuário precisa ser maior de 18 anos!")
    }
}

createAccount(process.argv[2], process.argv[3], moment(process.argv[4], "DD/MM/YYYY"))
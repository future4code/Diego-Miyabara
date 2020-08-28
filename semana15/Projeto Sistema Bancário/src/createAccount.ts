import {writeToDatabase} from './index'
import moment from 'moment'
import * as fs from 'fs'

type conta = {
    name: string,
    cpf: string,
    birthDate: moment.Moment,
    saldo: number,
    extrato: extrato[]
}

type extrato = {
    valor: number,
    date: moment.Moment,
    description: string
}

const name: string = process.argv[2]
const cpf: string = process.argv[3]
let birthDate: string = process.argv[4]

const fileData: string = fs.readFileSync('./data.json').toString()
let dataBase: conta[] = JSON.parse(fileData)
const newAccount:conta = { 
    name, 
    cpf, 
    birthDate: moment(birthDate, "DD/MM/YYYY"), 
    saldo:0, 
    extrato:[]
}
newAccount.birthDate.format("DD/MM/YYYY")
const allAccounts = [...dataBase, newAccount]

writeToDatabase(allAccounts)
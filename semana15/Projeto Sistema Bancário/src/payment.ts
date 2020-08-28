import {readDatabase, writeToDatabase} from './index'
import moment from 'moment'

function payment (nome: string, cpf: string, valor: number, data: moment.Moment, descricao: string): void {
    try{
        let dataBase = readDatabase()
        for(let acc of dataBase) {
            if(nome === acc.name && cpf === acc.cpf){
                const extrato = acc.extrato
                const pagamento = {
                    valor,
                    data,
                    descricao  
                }
                extrato.push(pagamento)
                acc.saldo -= valor;

                console.log("Pagamento realizado com sucesso")
            }
        }

        writeToDatabase(dataBase)
    }
    catch(e){
        console.log(e.response.data)
    }
}

payment(process.argv[2], process.argv[3], Number(process.argv[4]), moment(process.argv[5], "DD/MM/YYYY"), process.argv[6])
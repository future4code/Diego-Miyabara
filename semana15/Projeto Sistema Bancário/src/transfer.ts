import {readDatabase, writeToDatabase} from './index'

function transfer (nome: string, cpf: string, nome2: string, cpf2: string,valor: number): void {
    try{
        let dataBase = readDatabase()
        for(let acc of dataBase) {
            if(nome === acc.name && cpf === acc.cpf){
                acc.saldo -= valor;

                console.log("Valor da transferência retirado com sucesso!")
            }
            if(nome2 === acc.name && cpf2 === acc.cpf){
                acc.saldo += valor;
                console.log("Valor da transferência enviado com sucesso!")
            }
        }

        writeToDatabase(dataBase)
    }
    catch(e){
        console.log(e.response.data)
    }
}

transfer(process.argv[2], process.argv[3], process.argv[4], process.argv[5], Number(process.argv[6]))
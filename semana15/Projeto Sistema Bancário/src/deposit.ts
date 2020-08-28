import {readDatabase, writeToDatabase} from './index'

function deposit (nome: string, cpf: string, valor: number): void {
    try{
        let dataBase = readDatabase()
        for(let acc of dataBase) {
            if(nome === acc.name && cpf === acc.cpf && valor > 0){
                acc.saldo += valor;

                console.log("Depósito realizado com sucesso")
            }
        }

        writeToDatabase(dataBase)
    }
    catch(e){
        console.log(e.response.data)
    }
}

deposit(process.argv[2], process.argv[3], Number(process.argv[4]))
import {readDatabase} from './index'
import moment from 'moment'

const getAllAccounts = () => {
    type acc = {
        name: string,
        cpf: string,
        birthDate: moment.Moment,
        saldo: number,
        extrato: []
    }

    const allAccounts = readDatabase()
    
    const formatAllAccounts = (allAccounts:acc[]): void => {
        allAccounts.map((acc:acc) => {
            return console.log(
                `
                Nome: ${acc.name}
                CPF: ${acc.cpf}
                Data de Nascimento: ${moment(acc.birthDate, "YYYY/MM/DD").format("DD/MM/YYYY")}
                Saldo: ${acc.saldo}
                Extrato: ${acc.extrato.length === 0 ? "Não existem transações" : acc.extrato.map((conta: any) => {
                    return `
                        Descrição: ${conta.descricao}
                        Data: ${moment(conta.data, "YYYY/MM/DD").format("DD/MM/YYYY")}
                        Valor: R$ ${conta.valor.toFixed(2)}
                    `
                })}
                `
            )
        });
    }
    formatAllAccounts(allAccounts)
}

getAllAccounts()
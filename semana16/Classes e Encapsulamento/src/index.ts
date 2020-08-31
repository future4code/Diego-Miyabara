// Exercício 1
//a) O construtor serve para iniciar uma instância com valores determinados e chamamos ele colocando parâmetros na hora da sua criação.
//b) A mensagem foi impressa uma vez.
//c) Elas só podem ser acessadas dentro da própria classe utilizando a keyword this

import { FileManager } from "./FileManager";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCPF ():string {
        return this.cpf;
    }
    public getName ():string {
        return this.name;
    }
    public getAge ():number {
        return this.age;
    }
    public getBalance ():number {
        return this.balance;
    }
    public gettransaction ():Transaction[] {
        return this.transactions;
    }
    public setTransactions (newTransaction: Transaction): Transaction[] {
        const transactionValue = newTransaction.getValue()
        this.balance -= transactionValue
        return this.transactions = [...this.transactions, newTransaction]
    }
    public newAccount (cpf: string, name: string, age: number) {
        new UserAccount(cpf, name, age)
    }
}

const newAccount : UserAccount = new UserAccount("123.123.123-12", "Diego", 30)


//Exercício 2
class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string){
        this.date = date;
        this.value = value;
        this.description = description;
    }

    public getDate (): string {
        return this.date
    }
    public getValue (): number {
        return this.value
    }
    public getDescription (): string {
        return this.description
    }
}

const newTransaction: Transaction = new Transaction("31/08/2020", 20, "Pagamento uber")
console.log(newTransaction.getDate())

newAccount.setTransactions(newTransaction)

//Exercício 3

class Bank {
    private accounts: UserAccount[];
    private fileManager: FileManager;

    constructor(accounts: UserAccount[], fileManager: FileManager) {
        this.accounts = accounts;
        this.fileManager = new FileManager("data.json")
    }
}

let allAccounts: UserAccount[] = []
allAccounts = [...allAccounts, newAccount]

let allTransactions: Transaction[] = []
allTransactions = [...allTransactions, newTransaction]

const newFile : FileManager = new FileManager("data.json")
const newBank: Bank = new Bank (allAccounts, newFile)
newFile.writeInJson(newBank)

console.log(newBank)
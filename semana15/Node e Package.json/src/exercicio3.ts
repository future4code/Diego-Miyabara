import fs from 'fs'

const fileData: string = fs.readFileSync('./tarefas.txt').toString()

let lista: any = JSON.parse(fileData)

const novaTarefa: string = process.argv[2]

lista = [...lista, novaTarefa]

const listaString: string = JSON.stringify(lista, null, 1)
fs.writeFileSync('./tarefas.txt', listaString)

console.log("Tarefa adicionada!")
import fs from 'fs'

// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);

// Exercício 1
//a) O comando para acessar os paramentros passados na linha de comando é o process.argv.

//b)
const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c)
if(!nome && !idade) {
  console.log("\x1b[31m", "Esperava 2 parâmetros, mas não recebi nenhum")
} else if (!nome || !idade){
  console.log("\x1b[31m", "Esperava 2 parâmetros, mas só recebi um.")
}else {
  console.log("\x1b[32m", `Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`)
}


//----------------------------------------------------------------------------------------
//Exercício 2

// const operacao: string = process.argv[2]
// const numero1:number = Number(process.argv[3])
// const numero2:number = Number(process.argv[4])

// function executor (
//   operacao: string,
//   numero1:number,
//   numero2:number
// ):any {
//   switch(operacao) {
//     case "add":
//       return numero1 + numero2
//       break;
    
//     case "sub":
//       return numero1 - numero2
//       break;
    
//     case "mult":
//       return numero1 * numero2
//       break;
    
//     case "div":
//       return numero1 / numero2
//       break;

//     default:
//       return "Insira uma operação válida"
//   }
// }

// console.log(`Resposta: ${executor(operacao, numero1, numero2)}`)

//----------------------------------------------------------------------------------------
//Exercício 3

// const fileData: string = fs.readFileSync('./tarefas.txt').toString()

// let lista: any = JSON.parse(fileData)

// const novaTarefa: string = process.argv[2]

// lista = [...lista, novaTarefa]

// const listaString: string = JSON.stringify(lista, null, 1)
// fs.writeFileSync('./tarefas.txt', listaString)

// console.log("Tarefa adicionada!")
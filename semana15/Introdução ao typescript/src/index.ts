//Exercício 1

//a) ele diz que o número não é uma string.
// const minhString: string | undefined = "Hello World!"

//b) Utilizando o | .
// const meuNumero: number | string = "Olá"

//c) 
// const pessoa: {
//     nome: string,
//     idade: number,
//     corFavorita: string
// } = {
//     nome: "Renato",
//     idade: 11,
//     corFavorita: "azul"
// }

// console.log(pessoa)

//d)
// type pessoas = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const diego: pessoas = {
//     nome: "Diego",
//     idade: 30,
//     corFavorita: "azul"
// }

// const airton: pessoas = {
//     nome: "Airton",
//     idade: 33,
//     corFavorita: "preto"
// }

// const hyago: pessoas = {
//     nome: "Hyago",
//     idade: 25,
//     corFavorita: "verde"
// }

//e)
// enum CORES_DISPONIVEIS {
//     AZUL = "AZUL",
//     VERDE = "VERDE",
//     PRETO = "PRETO"
// }

// const diego: pessoas = {
//     nome: "Diego",
//     idade: 30,
//     corFavorita: CORES_DISPONIVEIS.AZUL
// }

//------------------------------------------------------------------------------
//Exercício 2

//a) As entradas desta função é um array de números. A saída é a estatística, onde ela vai retornar o mair número, o menor número e a média dos números.

//b) A constante numerosOrdenados que é uma ordenação dos números de menor para maior.
// A soma que é declarada para receber a soma de todos os valores por meio do for of.

//c) 

// type amostraDeDados = {
//     numeros: number[],
//     obterEstatisticas: (numeros:number) => {}
// }

//------------------------------------------------------------------------------
//Exercício 3
//a)
// type objectPost = {
//     autor: string,
//     texto: string,
    
// }

// const posts: objectPost[] = [
//     {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//     },
//     {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//     }
// ]

//b) As entradas são os posts(array) e o autorInformado(string)

// function buscaPostsPorAutor (
//     posts: objectPost[], 
//     autorInformado:string): objectPost[] {
//         return posts.filter((post) => {
//             return post.autor === autorInformado
//         })
//     }

//     console.log(buscaPostsPorAutor(posts, "Dobby"))

//------------------------------------------------------------------------------


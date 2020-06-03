//Exercício de Interpretação

//Exercicio 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado)

// resultado = (bool2 || bool1) && !bool3
// console.log("b. ", resultado)

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

// resultado = (resultado && (!bool1 || bool2)) && !bool3
// console.log("d. ", resultado)

// console.log("e. ", typeof resultado)

// a.  false
// b.  false
// c.  true
// d.  false
// e.  boolean


//------------------------------------------------------------------
// Exercicio 2 

// a. O que é array e como se declara em JS?
//     Array é um conjunto de valores dentro de uma única variável. 

// b. Qual o index inicial de um array?
//     o index iniciado de um array é 0.

// c. Como se determinar o tamanho do array?
//     Se determina utilizando o comando .lenght.

// d. Indique todas as mensagens impressas no console.
    // I.  undefined
    // II.  null
    // III.  11
    // IV.  3  e  4
    // V.  19  e  9
    // VI.  3
    // VII.  1 

//------------------------------------------------------------------

//Exercício de escrita de código

//Exercício 1

// a)
// fahrenheit = 77
// let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

// let resultado1 = kelvin
// console.log(resultado1)

// b)
// celsius = 80
// let fahrenheit = celsius*9 / 5 + 32
// let resultado2 = fahrenheit
// console.log(resultado2)

// c)
// celsius = 30
// let fahrenheit = celsius*9 / 5 + 32
// let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15
// let resultado3 = fahrenheit
// let resultado4 = kelvin
// console.log(resultado3)
// console.log(resultado4)

//------------------------------------------------------------------

// Exercicio 2

// let pergunta1 = prompt("1. Você é gamer?")
// let pergunta2 = prompt("2. Gosta de jogos de PC?")
// let pergunta3 = prompt("3. Gosta de jogos FPS?")
// let pergunta4 = prompt("4. Já viu o novo jogo chamado Valorant?")
// let pergunta5 = prompt("5. Jogaria este jogo?")

// console.log("1. Você é gamer?")
// console.log("Resposta: " + pergunta1)
// console.log("2. Gosta de jogos de PC?")
// console.log("Resposta: " + pergunta2)
// console.log("3. Gosta de jogos FPS?")
// console.log("Resposta: " + pergunta3)
// console.log("4. Já viu o novo jogo chamado Valorant?")
// console.log("Resposta: " + pergunta4)
// console.log("5. Jogaria este jogo?")
// console.log("Resposta: " + pergunta5)

//------------------------------------------------------------------

// Exercício 3

const pergunta1 = prompt("Qual o seu consumo de energia?")
const quilowattHora = 0.05
let consumo = Number(pergunta1)
let desconto = 1-0.15
let resultado1 = (quilowattHora * consumo)* desconto
console.log("Seu consumo de energia por mês é de " + consumo + " quilowatts/hora.")
console.log("Você tem desconto de 15%.")
console.log("O valor a ser pago será de R$" + resultado1)


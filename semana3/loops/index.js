// //Exercício 1

// //O que o código abaixo está fazendo? Qual o resultado impresso no console? 

// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
//   console.log(sum)
// }
// console.log(sum)

// //Resposta: Definiu o i como sendo 0, e se ele for menor do que 15, ele irá somar 1 no resultado da somatória. A somatória foi do seu  número + o numero do index.
// // O resultado impresso no console foi o seguinte: 105 (0+1=1 1+2=3 3+3=6 6+4=10 10+5=15 15+6=21 21+7=28 28+8=36 36+9=45 45+10=55 55+11=66 66+12=78 78+13=91 91+14=105)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Exercício 2

// //Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 4
// for(const item of lista) {
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

// // a. O que o comando `.push` faz?
//     // O comando adiciona um valor no array existente.
// // b. Qual o valor impresso no console?
//     // O valor impresso no console foi (4) [10, 15, 25, 30]
// // c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
//     // Se tivesse a variável numero tivesse o valor 3, o console iria imprimir (6) [12, 15, 18, 21, 27, 30] que são os números divisiveis por 3 com resto 0. 
//     // Caso tivesse o valor 4, a mensagem seria [12], pois dentre o array, somente o numero 12 tem resto 0 quando dividido pelo numero 4.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercício 3

// Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo 
// de qual deve ser a resposta final de cada programa individualmente.

// a. Escreva um programa que devolva o maior e o menor números contidos no array original

// const numeros = [15, 36, 42, 05, 12, 72, 82 ,85]
// let maiorNumero = 0
// let menorNumero = 999999

// for (let i = 0; i < numeros.length; i++){
//   const elementoMaior = numeros[i]
//   if (elementoMaior > maiorNumero){
//     maiorNumero = elementoMaior
//   }
// }

// for (let i = 0; i < numeros.length; i++){
//   const elementoMenor = numeros[i]
//   if (elementoMenor < menorNumero){
//     menorNumero = elementoMenor
//   }
// }

// console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`)

// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

// const lista = [10, 90, 100, 150, 30, 80, 150, 200, 300, 352]
// const novaLista = []
// const numero = 10
// for(const item of lista) {
//   if(item % numero === 0 || item % numero !== 0) {
//     novaLista.push(item/numero)
//   }
// }
// console.log(novaLista)

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

// const lista = [17, 22, 2, 5, 18, 27, 42, 77, 84]
// const novaLista = []
// const numero = 2
// for(const item of lista) {
//   if(item % numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

// d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

let lista = [17, 22, 2, 5, 18, 27, 42, 77, 84]
// let palavras = ["O", "elemento", "do", "índex", i , "é", ":", lista[i]]
let novaArray = []

for (let i = 0; i<lista.length; i++) {
        novaArray.push (`O elemento do índex ${i} é:  ${lista[i]}`)
}

console.log(novaArray)

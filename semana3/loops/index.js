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
//Exercício 2

//Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 3
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

// a. O que o comando `.push` faz?
    // O comando adiciona um valor no array existente.
// b. Qual o valor impresso no console?
    // O valor impresso no console foi (4) [10, 15, 25, 30]
// c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
    // Se tivesse a variável numero tivesse o valor 3, o console iria imprimir (6) [12, 15, 18, 21, 27, 30] 2 numeros a mais pois o numero está iniciando 2 valores antes
// Exercício 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Qual o teste que ele realiza? 
// Resposta: O teste realiza uma verificação de números nos quais os numeros que possuem resto da divisão por 2 = 0 com a mensagem Passou no teste 
// e caso o resto não seja 0 ele mosta a mensagem Não passou no teste.

// Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: Interpretando basicamente ele imprime para os numeros pares, pois somente os pares possuem resto 0 em uma divisão por 2.

// Para que tipos, a mensagem é "Não passou no teste"?
// Resposta: Para os numeros ímpares, pois o resto é sempre 1, consequentemente será diferente de 0.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercício 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima?
//  Resposta: Serve para escolher uma fruta, e caso esta fruta esteja em um dos cases ele irá mostar o preço dela.

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//  Resposta: A mensagem será "O preço da fruta Maça é R$ 2.25".

// c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
//  Resposta: Você pagaria Laranja(2x3.5) + Maçã 2.25 + Banana (3x5) + Uva 0.30 = R$ 24,55.

// d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
//  Resposta: A mensagem seria "O preço da fruta  Pêra  é  R$  5"

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercício 3

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)

//Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
// Resposta: A mensagem seria: "index.js:76 Uncaught ReferenceError: mensagem is not defined at index.js:76". O erro ocorrido é que a mensagem não está definida pois,
// a variável mensagem está no escopo filho, e o console.log está no escopo global, ou seja ambas estão em blocos diferentes, desta maneira o comando console.log que está no escopo
// global não reconhece a variável mensagem pois ela foi criada dentro do escopo filho if. Caso movamos o console.log para dentro do if, a mensagem irá funcionar normalmente.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercício de escrita de Código

//Exercício 4

//a) Crie um programa que receba dois números do usuário através do prompt e imprima-os na ordem decrescente. O que acontece com o seu programa se os 2 números forem iguais? 
//(é só testar e colocar um comentário descrevendo o que aconteceu)

// let primeiroNumero = prompt("Digite o primeiro número")
// let segundoNumero = prompt("Digite o segundo número")

// primeiroNumero = Number(primeiroNumero)
// segundoNumero = Number(segundoNumero)

// if (resultado1 = primeiroNumero > segundoNumero) {
//     console.log(primeiroNumero)
//     console.log(segundoNumero)
// } else {
//     console.log(segundoNumero)
//     console.log(primeiroNumero)
// }

//Caso os dois número sejam iguais ele imprime o else do código.

//b) Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem decrescente. O que acontece como seu programa se os 3 números forem iguais? 
//(é só testar e colocar um comentário descrevendo o que aconteceu)

// let primeiroNumero = prompt("Digite o primeiro número")
// let segundoNumero = prompt("Digite o segundo número")
// let terceiroNumero = prompt("Digite o terceiro número")

// primeiroNumero = Number(primeiroNumero)
// segundoNumero = Number(segundoNumero)
// terceiroNumero = Number(terceiroNumero)

// // let array = new Array (primeiroNumero, segundoNumero, terceiroNumero);
// // array.sort();
// // array.reverse();
// // console.log(array)

// if (primeiroNumero>segundoNumero && segundoNumero>terceiroNumero){
//     console.log(primeiroNumero)
//     console.log(segundoNumero)
//     console.log(terceiroNumero)
// }

// if (primeiroNumero>terceiroNumero && terceiroNumero>segundoNumero){
//     console.log(primeiroNumero)
//     console.log(terceiroNumero)
//     console.log(segundoNumero)
// }

// if (segundoNumero>primeiroNumero && primeiroNumero>terceiroNumero){
//     console.log(segundoNumero)
//     console.log(primeiroNumero)
//     console.log(terceiroNumero)
// }

// if (segundoNumero>terceiroNumero && terceiroNumero>primeiroNumero){
//     console.log(segundoNumero)
//     console.log(terceiroNumero)
//     console.log(primeiroNumero)
// }

// if (terceiroNumero>primeiroNumero && primeiroNumero>segundoNumero){
//     console.log(terceiroNumero)
//     console.log(primeiroNumero)
//     console.log(segundoNumero)
// }

// if (terceiroNumero>segundoNumero && segundoNumero>primeiroNumero){
//     console.log(terceiroNumero)
//     console.log(segundoNumero)
//     console.log(primeiroNumero)
// }

// //Resposta: Caso os números forem iguais ele não printa nada.

// //c) c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.
// if (primeiroNumero===segundoNumero || segundoNumero===terceiro){
//     alert("Os números devem ser diferentes.")
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 5

// a) https://drive.google.com/file/d/1WkuCfa0we_HOzRouoDyTOypxdGojKRsz/view?usp=sharing

// b)


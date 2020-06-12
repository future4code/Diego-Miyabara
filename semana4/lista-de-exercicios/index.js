//Exercícios de interpretação de código

//Exercício 1 - 
//O código executa a conversão de moeda dolar para real, o usuário digita a cotação do dolar por meio de um prompt, e o quantidade de dolar a ser convertido é inserida como 
//parametro da função conversorDeMoeda que no exemplo foi o valor 100, esta função é inserida numa variável chamada meuDinheiro e depois impressa com um console.log

//Exercício 2 -
//O código executa uma função chamada investeDinheiro e recebe 2 parâmetros, o tipoDeInvestimento(Poupança, Renda Fixa, CDB, Ações ou Default) e um valor que será aplicado.
//Dentro da função foi criada uma variável chamada valorAposInvestimento para que se possa retornar o resultado do cálculo. Foi criado um switch case para calcular o valorAposInvestimento
//com base no tipoDeInvestimento, cada um tendo seu percentual, no caso da Poupança 3%. Caso tipoDeInvestimento seja algum que não esteja listado no switch, ele retornará um alert
//com a mensagem TIPO DE INVESTIMENTO INFORMADO INCORRETO! Caso esteja correto ele fará o cálculo e retornará o valorAposInvestimento. Fora da função, os exemplos foram Ações com 
//o tipo e o valor 150 neste caso seria 150*1.1=165(valorAposInvestimento). O primeiro exemplo foi chamado de novoMontante e o segundo de segundoMontante. Após o cálculo deles
//é executado um console.log com o valor calculado destes exemplos.

//Exercício 3 -
//Foram criados 3 arrays, um com todos os números(numeros), um para receber os numeros pares (array1) e outra para receber os números ímpares (array2). Foi criado um for of
// onde ele criou um parametro numero para verificar dentro do array numeros e criou uma condicional if caso o resto do numero dividido por 2 seja zero, ou seja, caso ele seja par,
// ele vai adicionar o numero na array1, e um else para caso não tenha resto 0, ele seja adicionado na array2. No final ele imprimiu a mensagem: Quantidade de números: a quantidade 
// de índex da array numeros, um segundo console.log com a quantidade de índex dos números pares e outro com a quantidade de index de numeros ímpares.

//Exercicio 4 -
//Foi criado uma constante de array numeros com vários valores, foi definido que numero1 é infinito e numero2 é 0. Foi criado um for of com duas condicionais if para verificar
//se o valor da array numeros é menor que infinito no caso numero1, caso sim o valor da array passará a ser o numero1, a outra condicional é para verificar se o valor da array
// é maior que zero, ou seja se ele é positivo, caso seja ele irá definir o numero2 com o valor da array.
//Os consoles.log irão imprimir os resultados do numero1 ou seja, todos os numeros da array original. e o segundo console.log irá imprimir somente os numeros positivos.

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//Exercícios de Lógica de Programação

//Exercício 1 -
// Uma lista é considerado um array, para percorrer esta lista podemos utilizar o for, for of, for in, e também forEach, map e filter.

// let array = [1, 2, 3, 5, 8, 13, 21, 34, 55]
// for (let numero of array){
//     if (numero > 0) {
//         console.log(numero)
//     }
// }

//Exercício 2 -
//booleano1 = true
//booleano2 = false
//booleano3 = !booleano2 = true
//booleano4 = !booleano3 = false
//a) true && false && true 
//  = false
//b) (true && false) || false 
//  = false
//c) (false || true) && (false || true)
//  = true
//d) !(false && true) || !(true && true)
//  = true
//e) false && false || (true && true && true)
//  = true

//Exercício 3 - 
//O código não funciona pois entrava num loop infinito pois sempre o numero será maior que 0 pois não tinha incremento, além disso como seu código estava com i<=N, o 5 estava incluso
//então o 10 acabava sendo impresso. Fiz a correção abaixo alterando o <= para <, e adicionei no while o i++ para que não fique no loop infinito.

// const quantidadeDeNumerosPares = 5
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }
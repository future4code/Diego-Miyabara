//Exercicio 1

// Leia o código abaixo:

// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// let resultado = minhaFuncao(8)
// console.log(resultado)


// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
    // O resultado será uma array vazia.
// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
    //O resultado será a array [0, 1, 0, 1, 2, 3].
// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
    //O resultado será a array [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//Exercicio 2

// Leia o código abaixo:


// let arrayDeNomes = [10, 20, 44, 51, 77, 45];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };
// console.log(arrayDeNomes)
// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));


// a. Explicite quais são as saídas impressas no console
    //As saídas são 0, 2 e undefined.

// b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
    // Funcionaria pois ele está comparando o conteudo do valor e jogando no console.log o seu indice, no caso do exemplo dado, ele está procurando o valor "Darvas" dentro da 
    // arrayDeNomes, caso tenha ele vai dar o número do índice em que se encontra no array. Caso alteremos a lista para números ele irá buscar um number  e caso ele encontre
    // ele ira retornar com o valor do seu índice.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//Exercicio 3 

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!

// function metodo(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x; //0+15 resultadoA = resultadoA + x
//       resultadoB *= x; //1*15 resultadoB = resultadoB * x
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

// array = [15, 2, 20, 2]
// console.log(metodo(array))

// O arrayFinal terá sempre 2 valores, o resultadoA e o resultadoB, ou seja seu resultado estará restrito a 2 índices. O resultadoA irá somar o valor de todos os valores setados
// no array[], já o resultadoB irá multiplicar todos os valores dentro do array[].
// O array eu colocaria numeros, o resultadoA eu colocaria somaNumeros, o resultadoB eu colocaria multiplicacaoNumeros e o arrayFinal colocaria como resultado.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//Exercicio 4
//a)
// function idadeCachorro(idade) {
//     let idadeCachorro = 7

//     return idade * idadeCachorro
// }

// console.log(`A idade de cachorro é ${idadeCachorro(8)} anos.`)

//b)

// function apresentacao(nome, idade, endereco, estuda) {
//     if (estuda === true){
//         estuda = "sou estudante"
//     } 
//     else {
//         estuda = "não sou estudante"
//     }
    
//     return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco +" e " + estuda

// }

// console.log(apresentacao("Diego", 29, "Rua Italia, 196", false))

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//Exercicio 5

// function seculoAno(ano) {
//     let seculoRomano = ["I","II","III","IV","V","VI","VII","VIII",'IX',"X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"]
//     let arrayAnos = []

//     for (let gerarAnos = 1; gerarAnos < 2100; gerarAnos = gerarAnos + 100){
//         arrayAnos.push(gerarAnos)
//     }
//     console.log(arrayAnos)
//     for(let i = 0; i < 22; i++){
//         if(ano >= arrayAnos[i] && ano < arrayAnos[i+1])
//         return `O ano ${ano} pertence ao século ${seculoRomano[i]}`
//     }

// }

// console.log(seculoAno(205))

// function seculo (ano){
//     if (ano >= 1000 && ano<1100){
//         let seculoRomano = "XI"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     } 
//     else if (ano >= 1100 && ano < 1200){
//         let seculoRomano = "XII"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1200 && ano < 1300){
//         let seculoRomano = "XIII"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1300 && ano < 1400){
//         let seculoRomano = "XIV"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1400 && ano < 1500){
//         let seculoRomano = "XV"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1500 && ano < 1600){
//         let seculoRomano = "XVI"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1600 && ano < 1700){
//         let seculoRomano = "XVII"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1700 && ano < 1800){
//         let seculoRomano = "XVIII"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1800 && ano < 1900){
//         let seculoRomano = "XIX"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 1900 && ano < 2000){
//         let seculoRomano = "XX"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
//     else if (ano >= 2000 && ano < 2100){
//         let seculoRomano = "XXI"
//         return "O ano " + ano + " pertence ao século " + seculoRomano
//     }
// }

// console.log(seculo(1990))

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//Exercicio 6

// Para os itens a seguir, considere o seguinte array para os seus testes:

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

let array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function arrayLength(array){
    return array.length
}

console.log (arrayLength(array))

// // b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function arrayPar (number){
    if(number % 2 ==0) {
        return true
        
    }
    else {
        return false
    }
}

if (number = true){
    console.log("É par")
} else {
    console.log("É ímpar")
}

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

function numerosPares (array) {
    let arrayPares = []

    for (let i of array){
        if(i % 2 == 0){
            arrayPares.push(i)
        }
    }
    return arrayPares;
}

console.log (numerosPares(array))


// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

function numerosPares2 (array) {
    let novaArray = []

    for (let i of array){
        if (arrayPar(i)){
            novaArray.push(i)
        }
    }
    return novaArray
}

console.log(numerosPares2(array))
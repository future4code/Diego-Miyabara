// Exercício 1

//a

// function printNumbers (n: number): void {
//     if (n >= 0) {
//         printNumbers(n - 1);
//         console.log(n);
//     }
// };

// printNumbers(6)

//b)

// function printNumbers (n: number): void {
//     if(n >= 0) {
//         console.log(n)
//         printNumbers(n - 1)
//     }
// }

// printNumbers(5)

// Exercício 2

// const calculaSoma = (n: number, reference: number = 0): number => {
//     if( n === 0 ) {
//         return reference
//     }
//     return calculaSoma(n-1, reference + n)
// }

// console.log(calculaSoma(8))

// Exercício 3

// const calculaSoma = (n: number): number => {
//     let soma = 0
//     for(let i = 0; i <= n; i++) {
//         soma += i
//     }
//     return soma
// }

// console.log(calculaSoma(6))

// Exercício 4

const imprimeArray = (array: number[], index: number = array.length - 1) => {
    if(index >= 0) {
        imprimeArray(array, index - 1)
        console.log(`Index ${index}: ${array[index]}`)
    }
}

imprimeArray([5, 6, 9, 12, 16])
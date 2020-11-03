//Exercício 1

const findFirstRecurringCharacter = (input: string): string | null => {
    const charHashMap: { [index: string]: boolean } = {};
    for (const char of input) {
        if (charHashMap[char] === true) {
            return char;
        }
        charHashMap[char] = true;
    }
    return null;
};

console.log(findFirstRecurringCharacter("abacate"))

//Resposta: A complexidade é n, pois o for está verificando a quantidade de caracteres para mostrar a primeira letra repetida.

//Exercício 2

export const func = (
    source: string,
    comparison: string
    ): boolean => {
    if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
    ) {
        return false;
    }
    let commonCharQuantity = 0;

    for (const char of comparison) {
        if (source !== comparison) {
            commonCharQuantity++;
        }
    }
    return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
    );
};

console.log(func("banana", "abanana"))

//Resposta: A complexidade é O(n), pois o o comparison é uma string com tamanho variável.

//Exercício 3

export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
    ): void => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;
};

console.log(replaceMatrixValue(([[1,2,3]]), 0, 0, 1))

//Resposta: A complexidade é O(1) pois os números são fixos.

//Exercício 4

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
            return true;
        }
    }
    return false;
}

//Resposta: A complexidade é O(n²) pois a verificação passar por 2 loops, uma do tamanho da lista e outra pelo indexOf.

//Exercício 5

// Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade.

//Resposta: 3, (1 e 2), e menos eficiente é o 4.

//Exercício 6

function product(a: number, b: number): number {
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum += a;
    }
    return sum
}

//Resposta: A complexidade é O(b), pois depende do tamanho de b somente.

//Exercício 7

function mod(a: number, b: number): number {
    if (b <= a) {
        return -1;
    }
    let div = a / b;
    return a - div * b;
}

//Resposta: A complexidade é O(1), pois somente existe uma possibilidade, ou a ser maior que b ou b maior que a, não depende de tamanho de numero.

//Exercício 8

function copyArray(array: number[]): number[] {
    let copy: number[] = [];
    for (const value of array) {
        copy = appendToNew(copy, value);
    }
    return copy;
}

function appendToNew(array: number[], value: number) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    newArray.push(value);
    return newArray;
}

// A complexidade do copyArray é O(n) pois depende do tamanho do array de numeros.
// A complexidade do appendToNew é O(n²) pois ele depende da extensão do array e mais o value em cada um dos index do array.
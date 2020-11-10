function sumAll (n: number): number {
    let sum = 0
    for (let i = 0; i <= n; i++){
        sum += i
    }

    return sum
}

console.log(sumAll(100))

export function findMissingNumber(arr: number[]): number {
    const totalSum = 5050
    let sum = 0

    for(let n of arr) {
        sum += n
    }
    return totalSum - sum
}

let array = []

for (let i=0; i<=98; i++) {
    array.push(i)
}

array.push(100)

let array2 = []

for(let i = 0; i < 54; i++) {
    array2.push(i)
}

for(let i = 55; i<=100; i++) {
    array2.push(i)
}

console.log(findMissingNumber(array))
console.log(findMissingNumber(array2))

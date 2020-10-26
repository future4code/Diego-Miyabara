//Exercício 1

function isOneEdit(stringA: string, stringB: string): boolean {

if (Math.abs(stringB.length - stringA.length) > 1) {
    return false
}

if (stringA.length > stringB.length) return stringA.includes(stringB)
if (stringB.length > stringA.length) return stringB.includes(stringA)

let charDiff = 0
for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i]) {
        charDiff++
    }
}

    if(charDiff === 1) {
        return true
    } else {
        return false
    }
}

console.log(isOneEdit("Diego","Diegos"))

//Exercício 2

export const stringCompression = (input: string): string => {
    const subStrings: string[] = [];
    let lastChar = input[0];
    let charCount = 0;

    for (const char of input) {
        if (char !== lastChar) {
            subStrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }

    subStrings.push(lastChar + charCount);
    let result = "";
    for (const key of subStrings) {
        result += key;
    }

    return result.length > input.length ? input : result;
};
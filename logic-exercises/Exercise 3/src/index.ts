console.log("Hello World!")

const checkChar = (string: string): boolean => {
    const specialChar: string[] = []

    for (let char of string) {
        if (char === "(" || char === "[" || char === "{") {
            specialChar.push(char)
        } else {
            const closingChar:string | undefined = specialChar.pop()
            if(!closingChar) {
                return false
            } else if(
                (closingChar === "(" && char !== ")") || 
                (closingChar === "[" && char !== "]") || 
                (closingChar === "{" && char !== "}")
            ) {
                return false
            } else {
                return true
            }
        }
    }

    if(specialChar.length > 0) {
        return false
    }

    return true
}

console.log(checkChar("()"))
console.log(checkChar("()[]{}"))
console.log(checkChar("(]"))
console.log(checkChar("([)]"))
console.log(checkChar("{[]"))
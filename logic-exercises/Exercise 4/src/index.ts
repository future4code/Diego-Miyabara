console.log("Hello World!")

function commonChars(strs: string[]) {
    if(strs.length === 0) return ""
    
    let commonPrefix = ""
    for(let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i]
        
        for(let j = 0; j < strs.length; j++) {
            if(strs[j][i] !== currentChar) {
                return commonPrefix
            }
        }
        
        if(currentChar) {
            commonPrefix += currentChar
        }
    }
    
    return commonPrefix
};

console.log(commonChars(["flower", "flow", "flight"]))
console.log(commonChars(["dog","racecar","car"]))
console.log(commonChars(["coracao","cor","corona","coreia"]))
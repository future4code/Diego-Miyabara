
const onlyNumber = (array: number[]): number[] => {
    let uniqueNumber: number[] = []
    
    for(let i = 0; i < array.length; i++){ 
        if(array[i] !== array[i+1] && array[i] !== array[0]){
            uniqueNumber.push(array[i])
        }
    }

    return uniqueNumber

}

console.log(onlyNumber([2,2,1]))
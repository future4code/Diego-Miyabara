const operacao: string = process.argv[2]
const numero1:number = Number(process.argv[3])
const numero2:number = Number(process.argv[4])

function executor (
    operacao: string,
    numero1:number,
    numero2:number
):any {
    switch(operacao) {
    case "add":
        return numero1 + numero2
        break;
    
    case "sub":
        return numero1 - numero2
        break;
    
    case "mult":
        return numero1 * numero2
        break;
    
    case "div":
        return numero1 / numero2
        break;

    default:
        return "Insira uma operação válida"
    }
}

if (!numero1 && !numero2){
    console.log("\x1b[31m", "Esperava 2 números e não recebi nenhum.")
} else if(!numero1 || !numero2) {
    console.log("\x1b[31m","Esperava 2 números e recebi somente um.")
} else {
    console.log("\x1b[32m",`Resposta: ${executor(operacao, numero1, numero2)}`)
}


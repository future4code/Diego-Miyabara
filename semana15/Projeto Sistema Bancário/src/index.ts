import * as fs from 'fs'

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync('./data.json').toString()
    const allAccounts = JSON.parse(fileData)
    return allAccounts
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message)
    return []
  }
}


export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2)
    fs.writeFileSync('./data.json', dataAsString)
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message)
  }
}

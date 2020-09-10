import {Client} from './Client'
import {Place} from './Place'
import { Residence } from './Residence'
import { Commerce } from './Commerce'
import { Industry } from './Industry'
import { ClientManager } from './ClientManager'
import { ResidentialClient } from './ResidentialClient'
import { CommercialClient } from './CommercialClient'
import { IndustrialClient } from './IndustrialClient'

//Exercício 1

// const cliente: Client = {
//   name:"Diego",
//   registrationNumber: 1,
//   consumedEnergy: 100,

//   calculateBill:() => {
//     return 2
//   }
// }

// console.log(cliente.name)
// console.log(cliente.registrationNumber)
// console.log(cliente.consumedEnergy)
// console.log(cliente.calculateBill())
//a) Foi possível imprimir todas as informações, porém o calculateBill por ser um método, precisamos chamar como função para retornar.

//Exercício 2
//a) O erro que o typescript acusou é que não se pode criar uma instância de uma classe abstrata.
// const lugar: Place = new Place()

//b) Criar uma subclasse que extenda a classe Place e aí instanciar esta subclasse.

//Exercício 3
// const casa: Residence = new Residence(5, "88065-555")
// const comercio: Commerce = new Commerce(1, "88088-888")
// const industria: Industry = new Industry(12, "05511-151")

// console.log(casa.getCep())
// console.log(comercio.getCep())
// console.log(industria.getCep())
// console.log(`Quantidade de pessoas na residência: ${casa.getResidentsQuantity()}`)
// console.log(`Quantidade de andares no comércio: ${comercio.getFloorsQuantity()}`)
// console.log(`Quantidade de máquinas na indústria: ${industria.getMachinesQuantity()}`)

//Exercício 4
//a) As propriedades que ela herda das classes são: residentsQuantity e cep, já da interface obriga a utilizar as propriedades: name, registrationNumber, consumedEnergy e o método calculateBill.
// No caso as super props seriam somente residentsQuantity e cep pois herdam das classes Residence e Place respectivamente, já a interface obriga a utilizar propriedades, no caso a name, registrationNumber, consumedEnergy e o método calculateBill.

//Exercício 5
//a) Ela se assemelha em praticamente tudo, pega herança das classes superiores da prop cep, a interface obriga a definir as props name, registrationNumber e consumedEnergy.
//b) Alteração da super props quantidade de moradores para quantidade de andares, de cpf para cnpj, o nome do getter, e o valor por kwh no método de cálculo de energia.

//Exercício 6
//a) A classe industrialClient deve ser filha da classe Industry que por sua vez é filha da classe Place porque o cliente é uma industria que por sua vez é um lugar.
//b) Ela implementa a interface Client, pois é um cliente da classe indústria, obrigando assim a forncer alguns parametros da interface Client.
//c) Acredito que seja porque o cálculo da conta é feito de uma forma diferente das classes anteriores.

//Exercício 7
//Implementado no arquivo ClientManager.ts

//Exercício 8
const clientManager = new ClientManager()

const residentialClient = new ResidentialClient("Diego", 1, 100, "123.123.123-12", 2, "88888-88")
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient("Labenu", 2, 300, "78.155.158/0001-89", 3, "011785-110")
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("Cacique", 3, 500, 123123, 10, "86021-221")
clientManager.registerClient(industrialClient)

// console.log(clientManager.calculateTotalIncome())
// console.log(clientManager.calculateBillOfClient(3))
console.log(clientManager.getClientsQuantity())
clientManager.deleteUser(2)
console.log(clientManager.getClientsQuantity())

import {User} from './User'
import {Customer} from './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'

// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);

//Exercício 1
//a) Não pois não possui um método para retornar a informação e os parâmetros estão private.
//b) Foi chamado uma vez.
// const user1: User = new User("a1", "diego@gmail.com", "Diego", "123456")

//Exercício 2
//a) Foi impressa 1 vez.
//b) Foi impressa 2 vezes, pois ela cria o usuário na primeira instância, depois ao criar a instancia de Customer, ele passa novamente pelo User pois o classe Customer é filha da classe User.
// const customer1: Customer = new Customer("b1", "diego@gmail.com", "Diego", "123456", "0475.5555.6666.1985")

//Exercicio 3
// customer1.getId()
// customer1.getName()
// customer1.getEmail()
// customer1.purchaseTotal
// customer1.getCreditCard()
//a) Não seria possível imprimir a senha pois ela é private no componente pai. 

//Exercicio 4
// console.log(customer1.introduceYourself())

//Exercício 5
// console.log(customer1.introduceYourself())

//Exercício 6
// const employee1: Employee = new Employee("c3", "alfred@gmail.com", "Alfred", "123321", "02/09/2020", 4000)
//a) Foi impressa uma vez.
//b) Somente é possível imprimir as informações por meio de métodos getters.

//Exercício 7
// console.log(employee1.calculateTotalSalary())

//Exercício 8
//a) Foram necessários passar 6 parâmetros.
// const seller1: Seller = new Seller("e5", "roberto@gmail.com", "Roberto", "321123", "30/08/2020", 2500)
//b) As informações que possuem métodos getter para retornar as informações foram possíveis de acessar, já o password que não possui um método get não foi possível acessar.
// console.log(seller1.getId())
// console.log(seller1.getEmail())
// console.log(seller1.getName())
// console.log(seller1.getAdmissionDate())
// console.log(seller1.getBaseSalary())

//Exercício 9
// seller1.setSalesQuantity(1200)
// console.log(seller1.getSalesQuantity())
//a) Como a propriedade salesQuantity é privada só é possível acessar criando um metodo get para o salesQuantity.

//Exercício 10
const seller2: Seller = new Seller("f6", "airton@gmail.com", "Airton", "a1", "19/05/2020", 7500)
seller2.setSalesQuantity(50)
console.log(seller2.calculateTotalSalary())
//a) O valor impresso foi o cálculo do salário base (7500) + benefícios(400) + comissão (R$5 * 50) = 8150

//Exercício 11
// Criado as propriedades static nas classes employee e seller conforme enunciado.



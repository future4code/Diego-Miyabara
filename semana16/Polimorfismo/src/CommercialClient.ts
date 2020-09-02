import {Commerce} from './Commerce'
import {Client} from './Client'

export class CommercialClient extends Commerce implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
        ) {
            super(floorsQuantity,cep)
        }

    getCNPJ():string {
        return this.cnpj
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53 //(0.75 * 0.7)
    }

}
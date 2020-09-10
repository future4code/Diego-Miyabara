import {Client} from './Client'
import {Residence} from './Residence'

export class ResidentialClient extends Residence implements Client {
    constructor (
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
        ) {
        super(residentsQuantity, cep)
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
    
    public getCPF(): string {
        return this.cpf
    }

}
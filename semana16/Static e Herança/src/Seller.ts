import { Employee } from './Employee';

export class Seller extends Employee {
    private salesQuantity: number = 0
    static SELLING_COMMISSION: number = 5
    // constructor(
    //     id: string,
    //     email: string,
    //     name: string,
    //     password: string,
    //     admissionDate: string,
    //     baseSalary: number
    // ){
    //     super(id, email, name, password, admissionDate, baseSalary)
    //     console.log("Chamando o construtor da classe Seller")
    // }

    public getSalesQuantity(): number {
        return this.salesQuantity;
    }

    public setSalesQuantity(value: number):void {
        this.salesQuantity = value;
    }

    public calculateTotalSalary() : number {
        return this.baseSalary + Employee.BENEFITS_VALUE + (Seller.SELLING_COMMISSION * this.salesQuantity)
    }
    
}
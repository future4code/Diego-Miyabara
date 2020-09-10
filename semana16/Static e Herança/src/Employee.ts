import {User} from './User'

export class Employee extends User {
    protected admissionDate: string;
    protected baseSalary: number;
    static BENEFITS_VALUE: number = 400;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Employee");
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }

    getAdmissionDate() : string {
        return this.admissionDate
    }

    getBaseSalary(): number {
        return this.baseSalary
    }

    calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}
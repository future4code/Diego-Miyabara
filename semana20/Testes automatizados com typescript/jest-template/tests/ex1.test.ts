import { performPurchase, User } from "../src/ex1"

describe("Testes de compra exercício 1", () => {
    const conta: User = {
        name: "Diego",
        balance: 500
    }
    test("Compra com saldo maior que valor da compra", () => {
        
        const compra = performPurchase(conta, 200)

        expect(compra).not.toBe(undefined)
    })

    test("Compra com saldo e valor da compra iguais", () => {
        const compra = performPurchase(conta, 500)

        expect(compra?.balance).toBe(0)
    })

    test("Compra com saldo menor que valor da compra", () => {
        const compra = performPurchase(conta, 600)

        expect(compra).toBe(undefined)
    })
})
import { findMissingNumber } from "../src"


describe("Missing number function tests", () => {
    test("Missing number 58", () => {
        let array = []
        for(let i = 0; i<58; i++){
            array.push(i)
        }
        for(let i = 59; i<=100; i++) {
            array.push(i)
        }

        expect(findMissingNumber(array)).toBe(58)
    })

    test("Missing number 98", () => {
        let array = []
        for(let i = 0; i<98; i++){
            array.push(i)
        }
        for(let i = 99; i<=100; i++) {
            array.push(i)
        }

        expect(findMissingNumber(array)).toBe(98)
    })
})
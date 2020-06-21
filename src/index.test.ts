import { bind } from "./index";

interface SomeType {
    myNumber : number
};
describe("Bind", () => {
    test("should be able to access this", () => {
        let myVariable : SomeType = { myNumber: 10 };
        function someMethod(this: SomeType) : number {
            return this.myNumber ;
        }
        let bindedMethod = bind(myVariable, someMethod) as any;
        expect(bindedMethod()).toBe(10);
    })

    test("Should be able to access parameters from binded invocation", () => {
        let myVariable : SomeType = { myNumber: 10 };
        function someMethod(this: SomeType, num: number) : number {
            return this.myNumber + num;
        }
        let bindedMethod = bind(myVariable, someMethod) as any;
        expect(bindedMethod(5)).toBe(15);
    })

    test("should be able to access this", () => {
        let myVariable : SomeType = { myNumber: 10 };
        function someMethod(this: SomeType, firstNumber: number, secondNumber : number) : number {
            return this.myNumber + firstNumber - secondNumber;
        }
        let bindedMethod = bind(myVariable, someMethod, 10) as any;
        expect(bindedMethod(5)).toBe(15);
    })

});
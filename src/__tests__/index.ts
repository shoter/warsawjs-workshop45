import { bind } from "../index";

interface SomeType {
    myNumber : number
};




test("testBind", () => {
    let myVariable : SomeType = { myNumber: 10 };
    function someMethod(this: SomeType, otherNumber : number) : number {
        console.log("To ja someMethod");
        return this.myNumber;
    }
    let bindedMethod = bind(myVariable, someMethod) as any;
    // expect(someMethod.bind(myVariable)(5)).toBe(15);
    expect(someMethod(5)).toBe(15);
})


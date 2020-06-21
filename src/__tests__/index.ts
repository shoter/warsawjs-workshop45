import { myBind } from "../index";
import { arch } from "os";

interface SomeType {
    myNumber : number
};



function someMethod(this: SomeType, otherNumber : number) : number {
    return this.myNumber;
}

test("testBind", () => {
    let myVariable : SomeType = { myNumber: 10 };
    let bindedMethod = myBind(myVariable, someMethod) as any;
    // expect(someMethod.bind(myVariable)(5)).toBe(15);
    expect(bindedMethod(5)).toBe(15);
})


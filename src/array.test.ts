import { addItemToArray, removeItemFromArray, contains } from "./array";

describe("addItemToArray", () => {
  test("Adding element to array should not impact original array", () => {
    let array = [1, 5, 7];
    addItemToArray(array, 10);
    
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(5);
    expect(array[2]).toBe(7);
    expect(array.length).toBe(3);
  });

  test("Adding element to array should add element to array", () => {
    let array = [1, 5, 7];
    let newArray = addItemToArray(array, 10);

    expect(newArray.length).toBe(4);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(5);
    expect(newArray[2]).toBe(7);
    expect(newArray[3]).toBe(10);
  });
});

describe("removeItemFromArray", () => {
  test("Removing element from array should not impact original array", () => {
    let array = [1, 7];
    let newArray = removeItemFromArray(array, 7);

    expect(array[0]).toBe(1);
    expect(array[1]).toBe(7);
    expect(array.length).toBe(2);

    expect(newArray[0]).toBe(1);
    expect(newArray.length).toBe(1);
  });

  test("Removing element from array should remove element from array", () => {
    let array = [1, 7];
    let newArray = removeItemFromArray(array, 7);

    expect(newArray[0]).toBe(1);
    expect(newArray.length).toBe(1);
  });

  test("Removing element from array should remove only first element from array", () => {
    let array = [1, 7, 7];
    let newArray = removeItemFromArray(array, 7);

    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(7);
    expect(newArray.length).toBe(2);
  });
});

describe("Contains", () => {
  test("Contains should not modify array", () => {
    let array = [1, 5, 7];

    for (let i = 0; i < 100; ++i) {
      contains(array, i * 13);

      expect(array[0]).toBe(1);
      expect(array[1]).toBe(5);
      expect(array[2]).toBe(7);
      expect(array.length).toBe(3);
    }
  });

  test("Contains should return true when element is inside array", () => {
    let array = [1, 5, 7];
    expect(contains(array, 5)).toBe(true);
  });

  test("Contains should return false when element is not in array", () => {
    let array = [1, 5, 7];
    expect(contains(array, 123)).toBe(false);
  });
});

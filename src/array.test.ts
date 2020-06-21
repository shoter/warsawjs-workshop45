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

  test("Removing element from empty array should return empty array", () => {
    let array : number[] = [];
    let newArray = removeItemFromArray(array, 7);

    expect(array.length).toBe(0);
    expect(newArray.length).toBe(0);
  })
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

  test("should return true when element is inside array", () => {
    let array = [1, 5, 7];
    expect(contains(array, 5)).toBe(true);
  });

  test("should return false when element is not in array", () => {
    let array = [1, 5, 7];
    expect(contains(array, 123)).toBe(false);
  });

  test("should return false if array is empty", () => {
    let array : number[] = [];
    expect(contains(array, 1234)).toBe(false);
  });
});

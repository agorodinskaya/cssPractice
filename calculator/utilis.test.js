import { operations } from "./utilis";
import { clear } from "./utilis";
test("test works", () => {
  expect(1).toBe(1);
});

// testing operations function :
// 2 unit tests for add :

test("adds 2 + 2 to NOT equals 5.00", () => {
  expect(operations(2, "add", 2)).not.toBe("5.00");
});

//2 unit tests subtract:
test("subtract 3 - 2 equals 1.00", () => {
  expect(operations(3, "subtract", 2)).toBe("1.00");
});
test("subtract 3 - 2 NOT equals 8.00", () => {
  expect(operations(3, "subtract", 2)).not.toBe("8.00");
});

// 2 unit tests multiply:
test("multiply 2 * 5 equals 10.00", () => {
  expect(operations(2, "multiply", 5)).toBe("10.00");
});
test("multiply 3 * 2 NOT equals 7.00", () => {
  expect(operations(3, "multiply", 2)).not.toBe("7.00");
});

// 2 unit tests divide:
test("divide 6 / 2 equals 3.00", () => {
  expect(operations(6, "divide", 2)).toBe("3.00");
});
test("divide 8 / 2 NOT equals 3.00", () => {
  expect(operations(8, "divide", 2)).not.toBe("3.00");
});

// 2 unit tests decimals:
test("decimals 6 / 5 equals 1.20", () => {
  expect(operations(6, "divide", 5)).toBe("1.20");
});
test("decimals 3.2 + 5.2 equals 8.40", () => {
  expect(operations(3.2, "add", 5.2)).toBe("8.40");
});

//  1 unit test for divide by 0 - error = infinity- display error message:
test("error message 6 / 0 equals Infinity", () => {
  expect(operations(6, "divide", 0)).toBe("Infinity");
});

// testing clear function:
// clear test that returns an object:
test("clear() returns an object", () => {
  expect(clear()).toEqual({
    firstValue: "",
    modValue: "",
    operator: "",
    previousKeyType: "",
    textContent: 0,
  });
});

test("values are set to zero or empty string", () => {
  expect(clear().firstValue).toBe("");
  expect(clear().modValue).toBe("");
  expect(clear().operator).toBe("");
  expect(clear().previousKeyType).toBe("");
  expect(clear().textContent).toBe(0);
});

// decimal testing for display:

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by 0");
    }
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
}

describe("add", () => {
  const calculator = new Calculator();

  test("adds two positive numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("adds a positive and a negative number", () => {
    expect(calculator.add(1, -2)).toBe(-1);
  });

  test("adds two negative numbers", () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });
});

describe("subtract", () => {
  const calculator = new Calculator();

  test("subtracts two positive numbers", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test("subtracts a positive and a negative number", () => {
    expect(calculator.subtract(2, -1)).toBe(3);
  });

  test("subtracts two negative numbers", () => {
    expect(calculator.subtract(-2, -1)).toBe(-1);
  });
});

describe("divide", () => {
  const calculator = new Calculator();

  test("divides two positive numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("divides a positive and a negative number", () => {
    expect(calculator.divide(6, -2)).toBe(-3);
  });

  test("throws an error when dividing by 0", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by 0");
  });
});

describe("multiply", () => {
  const calculator = new Calculator();

  test("multiplies two positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("multiplies a positive and a negative number", () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
  });

  test("multiplies two negative numbers", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });
});

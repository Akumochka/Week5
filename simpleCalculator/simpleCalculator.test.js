const multiply = require("../simpleCalculator/simpleCalculor");

describe("multiply()", () => {

  describe("positive integers", () => {
    test("multiplies two positive numbers", () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(5, 10)).toBe(50);
    });
  });

  describe("zero cases", () => {
    test("returns 0 when first number is 0", () => {
      expect(multiply(0, 5)).toBe(0);
    });

    test("returns 0 when second number is 0", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test("returns 0 when both numbers are 0", () => {
      expect(multiply(0, 0)).toBe(0);
    });
  });

  describe("negative numbers", () => {
    test("multiplies a positive and a negative number", () => {
      expect(multiply(-2, 4)).toBe(-8);
      expect(multiply(3, -5)).toBe(-15);
    });

    test("multiplies two negative numbers", () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  describe("invalid input", () => {
    test("throws error when arguments are not numbers", () => {
      expect(() => multiply("2", 3)).toThrow(TypeError);
      expect(() => multiply(2, null)).toThrow(TypeError);
      expect(() => multiply(undefined, 4)).toThrow(TypeError);
    });
  });

});
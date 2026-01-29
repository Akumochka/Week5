const divide = require("../errorHandler/errorHandler");

describe("divide()", () => {

  describe("normal division", () => {
    test("divides two positive numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("divides with negative numbers", () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });
  });

  describe("division by zero", () => {
    test("throws error when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow(Error);
    });
  });

  describe("invalid input", () => {
    test("throws error when inputs are not numbers", () => {
      expect(() => divide("10", 2)).toThrow(TypeError);
      expect(() => divide(10, null)).toThrow(TypeError);
    });
  });

});

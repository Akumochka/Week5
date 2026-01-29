const isAdult = require("../membershipChecker/membershipChecker");

describe("isAdult()", () => {

  describe("ages 18 and over", () => {
    test("returns true for age 18", () => {
      expect(isAdult(18)).toBe(true);
    });

    test("returns true for age greater than 18", () => {
      expect(isAdult(25)).toBe(true);
      expect(isAdult(40)).toBe(true);
    });
  });

  describe("under 18", () => {
    test("returns false for age 17", () => {
      expect(isAdult(17)).toBe(false);
    });

    test("returns false for age 0", () => {
      expect(isAdult(0)).toBe(false);
    });
  });

  describe("invalid input", () => {
    test("throws error when input is not a number", () => {
      expect(() => isAdult("18")).toThrow(TypeError);
      expect(() => isAdult(null)).toThrow(TypeError);
    });
  });

});

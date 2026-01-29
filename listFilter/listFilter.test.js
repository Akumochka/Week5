const getEvenNumbers = require("../listFilter/listFilter");

describe("getEvenNumbers()", () => {

  describe("normal cases", () => {
    test("returns only even numbers from a mixed list", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(getEvenNumbers(input)).toEqual([2, 4, 6]);
    });

    test("returns empty array when no even numbers exist", () => {
      const input = [1, 3, 5, 7];
      expect(getEvenNumbers(input)).toEqual([]);
    });
  });

  describe("edge cases", () => {
    test("handles empty list", () => {
      expect(getEvenNumbers([])).toEqual([]);
    });

    test("handles list with only even numbers", () => {
      const input = [2, 4, 6, 8];
      expect(getEvenNumbers(input)).toEqual([2, 4, 6, 8]);
    });
  });

  describe("invalid input", () => {
    test("throws error when input is not an array", () => {
      expect(() => getEvenNumbers("123")).toThrow(TypeError);
      expect(() => getEvenNumbers(null)).toThrow(TypeError);
    });
  });

});

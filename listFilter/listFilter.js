function getEvenNumbers(inputList) {
  if (!Array.isArray(inputList)) {
    throw new TypeError("Input must be an array");
  }

  return inputList.filter(number => number % 2 === 0);
}

module.exports = getEvenNumbers;

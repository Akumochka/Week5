function isAdult(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  }

  return age >= 18;
}

module.exports = isAdult;

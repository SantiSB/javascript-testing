function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

// Multiple functions exported
module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};

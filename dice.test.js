const diceRoller = require("./diceRoller.js");

test("Roll a d12 five times", () => {
  expect(diceRoller("5d12")).toBeWithinRange(5, 60);
});

test("Roll a d4 six times", () => {
  expect(diceRoller("6d4")).toBeWithinRange(6, 24);
});

test("Roll a d2 once", () => {
  expect(diceRoller("1d2")).toBeWithinRange(1, 2);
});

test("Roll a d8 once", () => {
  expect(diceRoller("1d8")).toBeWithinRange(1, 8);
});

test("Roll a d6 three times", () => {
  expect(diceRoller("3d6")).toBeWithinRange(3, 18);
});

test("Roll a d20 four times", () => {
  expect(diceRoller("4d20")).toBeWithinRange(4, 80);
});

test("Roll a d100 one hundred times", () => {
  expect(diceRoller("100d100")).toBeWithinRange(100, 10000);
});

test('Throws error when not provided valid input', () => {
  expect(() => diceRoller('1')).toThrow();
  expect(() => diceRoller()).toThrow();
  expect(() => diceRoller(12)).toThrow();
})

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

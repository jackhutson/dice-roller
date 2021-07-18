const diceRoller = require('./diceRoller.js');

try {
  const result = diceRoller(process.argv[2]);
  console.log(result);
} catch (e) {
  console.log(e);
}
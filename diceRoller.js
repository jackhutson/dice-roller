const diceRoller = (input) => {
  const match = input.match(/(\d+)d(\d+)/);
  if(!match) {
    throw 'Input must be in a string in the format of {rolls}d{sides} e.g. 4d20';
  } else {
    const [rolls, sides] = [+match[1], +match[2]];

    return Array(rolls)
      .fill(getRandomIntInclusive(1, sides))
      .reduce((acc, roll) => acc + roll, 0);
  }
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = diceRoller;

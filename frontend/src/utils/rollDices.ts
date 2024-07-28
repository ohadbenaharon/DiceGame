export const rollDice = (): Dice => {
  return {
    dieOne: Math.floor(Math.random() * 6) + 1,
    dieTwo: Math.floor(Math.random() * 6) + 1,
  };
};

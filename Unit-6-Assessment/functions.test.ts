const { shuffleArray } = require("./utils");

describe("shuffleArray", () => {
  test("it should shuffle all of the bot cards", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(originalArray);
    expect(shuffleArray).not.toEqual(originalArray);
  });
});

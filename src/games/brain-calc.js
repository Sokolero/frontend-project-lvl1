import createGame from '../index.js';
import phrases from '../phrases.js';
import config from '../app.config.js';
import getRandomInt from '../utils/index.js';

export default function createGameCalc() {
  const game = createGame(
    config.ROUNDS,
    phrases,
    'What is the result of the expression?',
  );

  game.getQuestionText = function () {
    // return question type of "5 + 19, 6 - 2, 90 * 2"
    const operators = ['+', '-', '*'];
    return [
      getRandomInt(),
      operators[getRandomInt(0, 3)],
      getRandomInt(),
    ].join(' ');
  };

  game.getCorrectAnswer = function (questionText) {
    const items = questionText.split(' ');// ["12", "+", "34"]
    switch (items[1]) {
      case '+':
        return String(Number(items[0]) + Number(items[2]));
      case '-':
        return String(Number(items[0]) - Number(items[2]));
      case '*':
        return String(Number(items[0]) * Number(items[2]));
      default:
        return undefined;
    }
  };

  return game;
}

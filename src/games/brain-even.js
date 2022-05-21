import createGame from '../index.js';
import phrases from '../phrases.js';
import config from '../app.config.js';
import getRandomInt from '../utils/index.js';

export default function createGameEven() {
  const game = createGame(
    config.ROUNDS,
    phrases,
    'Answer "yes" if the number is even, otherwise answer "no".',
  );

  game.getQuestionText = function () {
    return getRandomInt();
  };

  game.getCorrectAnswer = function (questionText) {
    return Number(questionText) % 2 === 0
      ? 'yes'
      : 'no';
  };

  return game;
}

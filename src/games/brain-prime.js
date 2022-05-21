import createGame from '../index.js';
import phrases from '../phrases.js';
import config from '../app.config.js';
import getRandomInt, { isPrime } from '../utils/index.js';

export default function createGamePrime() {
  const game = createGame(
    config.ROUNDS,
    phrases,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );

  game.getQuestionText = function () {
    // return prime number random
    return String(getRandomInt());
  };

  game.getCorrectAnswer = function (questionText) {
    return isPrime(Number(questionText))
      ? 'yes'
      : 'no';
  };

  return game;
}

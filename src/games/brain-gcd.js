import createGame from '../index.js';
import phrases from '../phrases.js';
import config from '../app.config.js';
import getRandomInt, { getNod } from '../utils/index.js';

export default function createGameGcd() {
  const game = createGame(
    config.ROUNDS,
    phrases,
    'Find the greatest common divisor of given numbers.',
  );

  game.getQuestionText = function () {
    // return string type of "25 50"
    return [
      getRandomInt(),
      getRandomInt(),
    ].join(' ');
  };

  game.getCorrectAnswer = function (questionText) {
    const pair = questionText.split(' ');
    return String(getNod(Number(pair[0]), Number(pair[1])));
  };

  return game;
}

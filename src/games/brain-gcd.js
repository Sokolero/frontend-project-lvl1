import Game from '../index.js';
import phrases from '../phrases.js';
import config from '../app.config.js';
import getRandomInt, { getNod } from '../utils/index.js';

export class GameGcd extends Game {
  static getQuestionText() {
    // return string type of "25 50"
    return [
      getRandomInt(),
      getRandomInt(),
    ].join(' ');
  }

  static getCorrectAnswer(questionText) {
    const pair = questionText.split(' ');
    return String(getNod(Number(pair[0]), Number(pair[1])));
  }
}

export default function main() {
  const game = new GameGcd(config.ROUNDS, phrases, 'Find the greatest common divisor of given numbers.');
  game.run();
}

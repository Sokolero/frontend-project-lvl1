import Game from '../index.js';
import phrases from '../phrases.js';
import config from '../app.config.js';
import getRandomInt, { isPrime } from '../utils/index.js';



export class GamePrime extends Game {
  static getQuestionText() {
    // return prime number random
    return String(getRandomInt())
  }

  static getCorrectAnswer(questionText) {
    return isPrime(Number(questionText))
      ? "yes"
      : "no"
  }
}

export default function main() {
  const game = new GamePrime(config.ROUNDS, phrases, 'Answer "yes" if given number is prime. Otherwise answer "no".');
  game.run();
}

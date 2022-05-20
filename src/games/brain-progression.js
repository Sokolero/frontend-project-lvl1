import Game from '../index.js';
import phrases from '../phrases.js';
import config from '../app.config.js';
import getRandomInt from '../utils/index.js';


export class GameProgression extends Game {
  static getQuestionText() {
    // return string type of "5 7 9 11 13 .. 17 19"
    // items count more than 4
    // items count is random
    // hiddden item position is random
    const len = getRandomInt(5, 11);
    const hiddenIndex = getRandomInt(0, len - 1);
    const firstItem = getRandomInt(0, 50);
    const step = getRandomInt(0, 10);
    const progression = [firstItem];

    for (let i = 1; i < len; i += 1) {
      progression.push(progression[i - 1] + step);
    }

    progression[hiddenIndex] = '..';

    return progression.map(item => String(item)).join(' ');
  }

  static getCorrectAnswer(questionText) {
    const progression = questionText.split(' ');
    const len = progression.length;
    const hiddenIndex = progression.indexOf('..');

    let step = undefined;
    // если  индекс первый
    if (hiddenIndex === 0) {
      return String(2 * Number(progression[1]) - Number(progression[2]));
    }
    if (hiddenIndex === len - 1) {
      return String(2 * Number(progression[len - 2]) - Number(progression[len - 3]))
    }

    return String(Number(progression[hiddenIndex - 1]) + (Number(progression[len - 1]) - Number(progression[0])) / (len - 1))

  }
}


export default function main() {
  const game = new GameProgression(config.ROUNDS, phrases, 'What number is missing in the progression?');
  game.run();
}

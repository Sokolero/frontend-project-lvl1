import Game from "../index.js";
import phrases from "../phrases.js";
import config from "../app.config.json" assert { type: "json" };
import { getRandomInt } from "../utils/index.js";

// класс реализация
class GameEven extends Game {

  getQuestionText() {
    // вернуть динамическое тело вопроса, то есть случайное число
    return getRandomInt();
  }

  getCorrectAnswer(questionText) {
    // вернуть правильный ответ на вопрос в духе конкретной игры
    return Number(questionText) % 2 === 0
      ? 'yes'
      : 'no'
  }
}

export default function() {
  const newGame = new GameEven(config.ROUNDS, phrases, `Answer "yes" if the number is even, otherwise answer "no".`);
  newGame.run();
}

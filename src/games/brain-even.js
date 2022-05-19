import Game from "../index.js";
import phrases from "../phrases.js";

function getRandomInt(min = 1, max = 100) {
  const lMin = Math.ceil(min);
  const lMax = Math.floor(max);
  return Math.floor(Math.random() * (lMax - lMin)) + lMin;
}

// класс реализация
class GameEven extends Game {
  constructor(rounds=3, phrases) {
    super(rounds, phrases);
  }

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
  const newGame = new GameEven(3, phrases);
  newGame.run();
}

import createGame from '../index.js';
import phrases from '../phrases.js';
import getRandomInt from '../utils/index.js';

const getQuestionText = () => {
  // return question type of "5 + 19, 6 - 2, 90 * 2"
  const operators = ['+', '-', '*'];
  return [
    getRandomInt(),
    operators[getRandomInt(0, 3)],
    getRandomInt(),
  ].join(' ');
};

const getCorrectAnswer = (questionText) => {
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

const gameCalc = createGame( // return object with run method
  'What is the result of the expression?',
  phrases,
  getQuestionText,
  getCorrectAnswer,
);

export default gameCalc;

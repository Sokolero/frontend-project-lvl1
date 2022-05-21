import createGame from '../index.js';
import phrases from '../phrases.js';
import getRandomInt from '../utils/index.js';

const getQuestionText = () => getRandomInt();

const getCorrectAnswer = (questionText) => (Number(questionText) % 2 === 0
  ? 'yes'
  : 'no');

const gameEven = createGame( // return object with run method
  'Answer "yes" if the number is even, otherwise answer "no".',
  phrases,
  getQuestionText,
  getCorrectAnswer,
);

export default gameEven;

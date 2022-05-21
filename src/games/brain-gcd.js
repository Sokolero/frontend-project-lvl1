import createGame from '../index.js';
import phrases from '../phrases.js';
import getRandomInt, { getNod } from '../utils/index.js';

const getQuestionText = () => ([getRandomInt(), getRandomInt()].join(' '));

const getCorrectAnswer = (questionText) => {
  const pair = questionText.split(' ');
  return String(getNod(Number(pair[0]), Number(pair[1])));
};

const gameGcd = createGame( // return object with run method
  'Find the greatest common divisor of given numbers.',
  phrases,
  getQuestionText,
  getCorrectAnswer,
);

export default gameGcd;

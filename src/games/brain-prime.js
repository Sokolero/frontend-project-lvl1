import createGame from '../index.js';
import phrases from '../phrases.js';
import getRandomInt, { isPrime } from '../utils/index.js';

// -----------------------
const getQuestionText = () => String(getRandomInt());

// ------------------------
const getCorrectAnswer = (questionText) => (isPrime(Number(questionText)) ? 'yes' : 'no');

// ============================================
const gameEven = createGame( // return object with run method
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  phrases,
  getQuestionText,
  getCorrectAnswer,
);

export default gameEven;

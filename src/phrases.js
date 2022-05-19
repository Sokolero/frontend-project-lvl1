export default {
  welcome: () => 'Welcome to the Brain Games!',
  askName: () => 'May I have your name? ',
  greeting: (name) => `Hello, ${name}`,
  getQuestionText: (questionText) => `Question: ${questionText}\nYour answer: `,
  onCorrect: () => 'Correct!',
  onFailed: (answer, correctAnswer, name) => `"${answer}" is wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${name}!`,
  congratulation: (name) => `Congratulations, ${name}!`,
};

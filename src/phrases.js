export default {
  welcome: () => 'Welcome to the Brain Games!',
  askName: () => 'May I have your name? ',
  greeting: (name) => `Hello, ${name}`,
  sayRules: () => 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestionText: (questionText) => `Question: ${questionText}\n Your answer: `,
  onCorrect: () => 'Correct!',
  onFailed: (answer, correctAnswer, name) => `"${answer}" is wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${name}!`,
  congratulation: (name) => `Congratulations, ${name}!`,
}

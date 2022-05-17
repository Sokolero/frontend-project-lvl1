import readlineSync from 'readline-sync';

const messages = {
  greeting: () => `Welcome to the Brain Games!`,
  askName: () => `May I have your name?`,
  sayHello: (name) => `Hello, ${name}`,
  sayRules: () => `Answer "yes" if the number is even, otherwise answer "no".`,
  quest: (number) => `Question: ${number}\n Your answer: `,
  onCorrect: () => "Correct!",
  onWrong: (answer, correctAnswer, name) =>
   `"${answer}" is wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${name}!`,
   congratulation: (name) => `Congratulations, ${name}!`,
}

const user = {
  name: undefined,
  result: ""
}

function getRandomInt(min=1, max=100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function ask(text) {
  return readlineSync.question(text);
}

const getCorrectAnswer = (num) =>
  Number(num) % 2 === 0
  ? "yes"
  : "no";  // true or false

const isValidAnswer = (answer, correctAnswer) => answer === correctAnswer;

export default function main() {
  console.log(messages.greeting());
  user.name = ask(messages.askName());
  console.log(messages.sayHello(user.name));
  console.log(messages.sayRules());

  //game play start!
  for (let i = 0; i < 3; i++) {
    let num = getRandomInt();
    let answer = ask(messages.quest(num)); // "yes" or "no" or any
    let correctAnswer = getCorrectAnswer(num); // "yes" or "no"

    let isValid = isValidAnswer(answer, correctAnswer);
    if (!isValid) {
      console.log(messages.onWrong(answer, correctAnswer, user.name));
      user.result = "failed";
      break;
    }
    console.log(messages.onCorrect());
  }

  if (user.result !== "failed") {
    console.log(messages.congratulation(user.name));
  }
}

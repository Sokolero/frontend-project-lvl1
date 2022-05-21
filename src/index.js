import readlineSync from 'readline-sync';
import config from './app.config.js';

export default function createGame(
  rules,
  phrases,
  getQuestionText,
  getCorrectAnswer,
  rounds = config.ROUNDS,
) {
  const options = {
    rounds,
    phrases,
    rules,
    userName: undefined,
    result: 'NULL',
    userAnswer: null,
    correctAnswer: null,
    questionText: null,
  };

  function say(text) { // void
    console.log(text);
  }

  function ask(questionText) { // string
    return readlineSync.question(questionText);
  }

  function createQuestion() {
    options.questionText = getQuestionText();
    options.correctAnswer = getCorrectAnswer(options.questionText);
  }

  // ==========
  function run() {
    say(options.phrases.welcome());
    options.username = ask(options.phrases.askName());
    say(options.phrases.greeting(options.username));
    say(options.rules);

    // game loop //
    for (let n = 0; n < options.rounds; n += 1) {
      createQuestion(); // создать объект вопроса
      options.userAnswer = ask(options.phrases.getQuestionText(options.questionText));

      if (options.userAnswer === options.correctAnswer) {
        say(options.phrases.onCorrect());
      } else {
        options.result = 'FAILED';
        break;
      }
    }

    // game resume //
    if (options.result === 'FAILED') {
      say(
        options.phrases.onFailed(options.userAnswer, options.correctAnswer, options.username),
      );
    } else {
      say(options.phrases.congratulation(options.username));
    }
  }
  // ============
  return {
    run,
  };
}

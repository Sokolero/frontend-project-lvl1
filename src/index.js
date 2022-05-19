import readlineSync from 'readline-sync';

// base class for game
export default class Game {
  constructor(rounds, phrases, rules) {
    this.rounds = rounds;
    this.phrases = phrases;
    this.rules = rules;
  }

  username = undefined;

  rounds = undefined;

  result = 'NULL';

  lastAnswer = null;

  correctAnswer = null;

  rules = '';

  question = {
    text: undefined,
    correct: undefined,
  };

  // приватные
  static say(text) { // void
    console.log(text);
  }

  static ask(questionText) { // string
    return readlineSync.question(questionText);
  }

  createQuestion() {
    this.question.text = this.constructor.getQuestionText();
    this.question.correct = this.constructor.getCorrectAnswer(this.question.text);
  } // string

  // переопределить в наследуемом классе
  static getQuestionText() {

  }

  // переопределить в наследуемом классе
  static getCorrectAnswer() {

  }

  // main method for game running
  run() {
    Game.say(this.phrases.welcome());
    this.username = Game.ask(this.phrases.askName());
    Game.say(this.phrases.greeting(this.username));
    Game.say(this.rules);

    // game loop
    for (let n = 0; n < this.rounds; n += 1) {
      this.createQuestion(); // получить объект вопроса
      const answer = Game.ask(
        this.phrases.getQuestionText(this.question.text),
      );

      if (answer === this.question.correct) {
        Game.say(this.phrases.onCorrect());
      } else {
        this.result = 'FAILED';
        this.lastAnswer = answer;
        break;
      }
    }

    // game resume
    if (this.result === 'FAILED') {
      Game.say(
        this.phrases.onFailed(this.lastAnswer, this.question.correct, this.username),
      );
    } else {
      Game.say(this.phrases.congratulation(this.username));
    }
  }
}

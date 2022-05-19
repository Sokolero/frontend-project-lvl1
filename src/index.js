import readlineSync from 'readline-sync';


// base class for game
export default class Game {
	constructor(rounds, phrases, rules) {
    this.rounds = rounds;
		this.phrases = phrases;
		this.rules = rules
  }

	username = undefined;
	rounds = undefined;
	result = 'NULL';
  lastAnswer = null;
  correctAnswer = null;
	rules = ``;

	// приватные
	say(text) { // void
    console.log(text);
  }

	ask(questionText) { // string
    return readlineSync.question(questionText);
  }

	createQuestion() {
    const text = this.getQuestionText();
    const correct = this.getCorrectAnswer(text);
    return { text, correct };
  } // string


	// переопределить в наследуемом классе
	getQuestionText(){

  }

  // переопределить в наследуемом классе
	getCorrectAnswer(){

  }

  // main method for game running
	run() {
    this.say(this.phrases.welcome());
    this.username = this.ask(this.phrases.askName());
    this.say(this.phrases.greeting(this.username));
    this.say(this.rules)

    // game loop
    for (let n = 0; n < this.rounds; n++) {
      let question = this.createQuestion(); // получить объект вопроса
      let answer = this.ask(
        this.phrases.getQuestionText(question.text)
      );

      if (answer === question.correct) {
        this.say(this.phrases.onCorrect());
      } else {
        this.result = 'FAILED';
        this.lastAnswer = answer;
        this.correctAnswer = question.correct;
        break;
      }
    }

    // game resume
    if (this.result === "FAILED") {
      this.say(
        this.phrases.onFailed(this.lastAnswer, this.correctAnswer, this.username)
      );
    } else {
      this.say(this.phrases.congratulation(this.username));
    }
  }

}

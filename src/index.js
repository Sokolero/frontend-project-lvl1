import readlineSync from 'readline-sync';

export default function createGame(rounds = 3, phrases = {}, rules = '') {
  return {
    rounds,
    phrases,
    rules,
    username: undefined,
    result: 'NULL',
    lastAnswer: null,
    correctAnswer: null,
    question: {
      text: undefined,
      correct: undefined,
    },

    say(text) { // void
      console.log(text);
    },
    ask(questionText) { // string
      return readlineSync.question(questionText);
    },
    createQuestion() {
      this.question.text = this.getQuestionText();
      this.question.correct = this.getCorrectAnswer(this.question.text);
    },
    //
    getQuestionText() {},
    getCorrectAnswer() {},
    // main method for game running
    run() {
      this.say(this.phrases.welcome());
      this.username = this.ask(this.phrases.askName());
      this.say(this.phrases.greeting(this.username));
      this.say(this.rules);

      // game loop
      for (let n = 0; n < this.rounds; n += 1) {
        this.createQuestion(); // создать объект вопроса
        const answer = this.ask(
          this.phrases.getQuestionText(this.question.text),
        );

        if (answer === this.question.correct) {
          this.say(this.phrases.onCorrect());
        } else {
          this.result = 'FAILED';
          this.lastAnswer = answer;
          break;
        }
      }

      // game resume
      if (this.result === 'FAILED') {
        this.say(
          this.phrases.onFailed(this.lastAnswer, this.question.correct, this.username),
        );
      } else {
        this.say(this.phrases.congratulation(this.username));
      }
    },
  };
}

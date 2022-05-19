import Game from "../index.js";
import phrases from "../phrases.js";
import config from "../app.config.json" assert { type: "json" };
import { getRandomInt } from "../utils/index.js";


export class GameCalc extends Game {

  getQuestionText() {
    // return question type of "5 + 19, 6 - 2, 90 * 2"
    const operators = ["+", "-", "*"];
    return [
      getRandomInt(),
      operators[getRandomInt(0, 3)],
      getRandomInt()
    ].join(" ");
  }

  getCorrectAnswer(questionText){
    const items = questionText.split(" ");// ["12", "+", "34"]
    switch (items[1]) {
      case "+":
        return String(Number(items[0]) + Number(items[2]));
      case "-":
        return String(Number(items[0]) - Number(items[2]));
      case "*":
          return String(Number(items[0]) * Number(items[2]));
      default:
        return;
    }
  }
}


export default function main() {
  const game = new GameCalc(config.ROUNDS, phrases, `What is the result of the expression?`);
  game.run()
}

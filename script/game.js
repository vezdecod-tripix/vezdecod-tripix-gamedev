export default class Game {
  status
  score
  passwords

  constructor (score, bestScore, passwords) {
    this.score = score
    this.bestScore = bestScore
    this.passwords = Game.shuffle(passwords)
  }

  static shuffle (array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

  start () {

  }

  exit () {

  }

  end () {

  }

  gameCycle () {

  }
}

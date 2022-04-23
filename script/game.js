export default class Game {
  score
  passwords
  currentPassword
  nextPassword

  constructor (score, bestScore, passwords, currentPassword, nextPassword) {
    this.score = score
    this.passwords = passwords
    this.bestScore = bestScore
    this.currentPassword = currentPassword
    this.nextPassword = nextPassword
    this.pointer = 0
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
    this.pointer = 0
    this.score.setValue(0)
    Game.shuffle(this.passwords)
    this.frame(true)
  }

  removeListeners () {
    this.currentPassword.elements[0].removeEventListener('click', this.wrong)
    this.nextPassword.elements[0].removeEventListener('click', this.wrong)
    this.currentPassword.elements[0].removeEventListener('click', this.right)
    this.nextPassword.elements[0].removeEventListener('click', this.right)
  }

  right (context) {
    const ctx = context
    return () => {
      console.log('right')
      ctx.removeListeners()
      ctx.pointer++
      console.log(ctx)
      ctx.score.setValue(ctx.score.value + 1)
      if (ctx.bestScore.value < ctx.score.value) {
        ctx.bestScore.setValue(ctx.score.value)
      }
      ctx.frame(true)
    }
  }

  wrong (context) {
    const ctx = context
    return () => {
      console.log('wrong')
      ctx.removeListeners()
      ctx.frame(false)
    }
  }

  frame (alive) {
    console.log('alive:', alive)
    if (alive) {
      if (this.pointer >= 195) {
        this.pointer = 0
      }
      console.log(this.pointer)
      this.currentPassword.setValue(`${this.passwords[this.pointer][0]} ${String(this.passwords[this.pointer][1])}`)
      this.nextPassword.setValue(`${this.passwords[this.pointer + 1][0]} ${String(this.passwords[this.pointer + 1][1])}`)
      if (this.passwords[this.pointer][1] > this.passwords[this.pointer + 1][1]) {
        this.currentPassword.elements[0].addEventListener('click', this.right(this), { once: true })
        this.nextPassword.elements[0].addEventListener('click', this.wrong(this), { once: true })
      } else {
        this.nextPassword.elements[0].addEventListener('click', this.right(this), { once: true })
        this.currentPassword.elements[0].addEventListener('click', this.wrong(this), { once: true })
      }
    } else {
      this.lose()
    }
  }

  lose () {
    console.log('lose')
  }

  exit () {
    console.log('exit')
  }

  end () {
    console.log('end')
  }
}

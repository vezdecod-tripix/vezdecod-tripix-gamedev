import Ref from './ref.js'
import Game from './game.js'
import passwords from './passwords.js'

const BEST_SCORE = 'bestScore'

const buttonStart = document.getElementById('start')
const buttonBack = document.getElementById('back')
const pageView = document.getElementById('main-view')
const pageQuiz = document.getElementById('main-quiz')

const passwordsAmount = Object.keys(passwords.length)
const localBestScore = localStorage.getItem(BEST_SCORE)
const bestScore = new Ref(localBestScore ? parseInt(localBestScore) : 0, BEST_SCORE)
const score = new Ref(0)

const game = new Game(score, bestScore)

buttonStart.addEventListener('click', () => {
  pageView.style.display = 'none'
  pageQuiz.style.display = 'flex'
})

buttonBack.addEventListener('click', () => {
  pageView.style.display = 'flex'
  pageQuiz.style.display = 'none'
})

console.log(passwords)

import Ref from './ref.js'
import Game from './game.js'
import passwords from './passwords.js'

const BEST_SCORE = 'bestScore'

const buttonStart = document.getElementById('start')
const buttonBack = document.getElementById('back')
const pageView = document.getElementById('main-view')
const pageQuiz = document.getElementById('main-quiz')
const scoreSpan = document.getElementById('score')
const bestScoreSpan = document.getElementById('best-score')
const currentPasswordButton = document.getElementById('current-password')
const nextPasswordButton = document.getElementById('next-password')

const passwordsArray = Object.entries(passwords)
const localBestScore = localStorage.getItem(BEST_SCORE)
const bestScore = new Ref(localBestScore ? parseInt(localBestScore) : 0, [bestScoreSpan], BEST_SCORE)
const score = new Ref(0, [scoreSpan])
const currentPassword = new Ref('', [currentPasswordButton])
const nextPassword = new Ref('', [nextPasswordButton])
const game = new Game(score, bestScore, passwordsArray, currentPassword, nextPassword)

buttonStart.addEventListener('click', () => {
  pageView.style.display = 'none'
  pageQuiz.style.display = 'flex'
  game.start()
})

buttonBack.addEventListener('click', () => {
  pageView.style.display = 'flex'
  pageQuiz.style.display = 'none'
  game.exit()
})

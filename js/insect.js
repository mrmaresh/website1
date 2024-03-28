const screens = document.querySelectorAll('.screen')
const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

console.log(screens)
start_btn.addEventListener('click', () => {
  screen1.classList.add('up')
})

choose_insect_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img')
    const alt = img.getAttribute('alt')
    const src = img.getAttribute('src')
    screen2.classList.add('up')
  })
})

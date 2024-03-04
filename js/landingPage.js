toggle = document.getElementById('toggle')
open = document.getElementById('open')
model = document.getElementById('model')
close = document.getElementById('close')


toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
  modal.classList.add('show-model')
})

close.addEventListener('click', () => {
  modal.classList.remove('show-model')
})

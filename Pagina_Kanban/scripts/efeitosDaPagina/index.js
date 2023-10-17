const [btnAfazer, btnEmAndamento, btnConcluido] = document.querySelectorAll(".buttonAddTask")

const containerForms = document.getElementById("containerForms")
const body = document.getElementsByTagName('body')[0]

btnAfazer.addEventListener('click', () => {
  containerForms.style.display = "flex"
  body.style.overflow = 'hidden'
})
btnEmAndamento.addEventListener('click', () => {
  containerForms.style.display = "flex"
  body.style.overflow = 'hidden'
})
btnConcluido.addEventListener('click', () => {
  containerForms.style.display = "flex"
  body.style.overflow = 'hidden'
})

const cancelTask = document.getElementById("cancelTask")

cancelTask.addEventListener('click', () => {
  containerForms.style.display = "none"
  body.style.overflow = 'scroll'
})
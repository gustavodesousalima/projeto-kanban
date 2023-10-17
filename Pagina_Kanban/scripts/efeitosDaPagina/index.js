const main = document.getElementById("containerAllTasks")
main.style.display = "none"
setTimeout(() => {
    main.style.display = "flex"
}, 1500)

const [btnAfazer, btnEmAndamento, btnConcluido] =
  document.querySelectorAll(".buttonAddTask")

const containerForms = document.getElementById("containerForms")
const containerEntries = document.getElementById("containerEntries")
const editTasksForm = document.getElementById("editTasksForm")
const body = document.getElementsByTagName("body")[0]

btnAfazer.addEventListener("click", () => {
  containerForms.style.display = "flex"
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})
btnEmAndamento.addEventListener("click", () => {
  containerForms.style.display = "flex"
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})
btnConcluido.addEventListener("click", () => {
  containerForms.style.display = "flex"
  body.style.overflow = 'hidden'
})

const cancelTask = document.querySelectorAll(".cancelTask")

cancelTask.addEventListener('click', () => {
  containerForms.style.display = "none"
  body.style.overflow = 'scroll'
})

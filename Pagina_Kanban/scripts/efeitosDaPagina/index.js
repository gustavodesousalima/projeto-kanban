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
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})

const cancelTask = document.querySelectorAll(".cancelTask")

cancelTask.forEach((button) => {
  button.addEventListener("click", () => {
    containerEntries.style.display = "none"
    editTasksForm.style.display = "none"
    containerForms.style.display = "none"
    body.style.overflow = "scroll"
  })
})

const editButton = document.querySelectorAll(".edit-button")
editButton.forEach((button) => {
  button.addEventListener("click", () => {
    containerForms.style.display = "flex"
    editTasksForm.style.display = "flex"
    body.style.overflow = "hidden"
  })
})

const [btnAfazer, btnEmAndamento, btnConcluido] =
  document.querySelectorAll(".buttonAddTask")

const containerForms = document.getElementById("containerForms")
const containerEntries = document.getElementById("containerEntries")
const editTasksForm = document.getElementById("editTasksForm")
const confirmacaoDeRemocaoDeTask = document.getElementById(
  "confirmacaoDeRemocaoDeTask"
)
const body = document.getElementsByTagName("body")[0]

let botaoStatusTarefa

btnAfazer.addEventListener("click", () => {
  botaoStatusTarefa = "btnAfazer"
  containerForms.style.display = "flex"
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})
btnEmAndamento.addEventListener("click", () => {
  botaoStatusTarefa = "btnEmAndamento"
  containerForms.style.display = "flex"
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})
btnConcluido.addEventListener("click", () => {
  botaoStatusTarefa = "btnConcluido"
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
    confirmacaoDeRemocaoDeTask.style.display = "none"
  })
})

function editar(IdTask) {
  containerForms.style.display = "flex"
  editTasksForm.style.display = "flex"
  containerEntries.style.display = "none"
  body.style.overflow = "hidden"
  const idDaTask = document.getElementById("editarTask")
  idDaTask.setAttribute("idTask", IdTask)
}


function excluir(IdTask) {
  body.style.overflow = "hidden"
  containerForms.style.display = "flex"
  confirmacaoDeRemocaoDeTask.style.display = "block"
  const removerTask = document.getElementById("removerTask")
  removerTask.setAttribute("idTask", IdTask)
}




const logout = document.getElementById("logout")

logout.addEventListener('click', ()=> {
  window.location.href = "../../../Cadastro_Login/index.html"
})
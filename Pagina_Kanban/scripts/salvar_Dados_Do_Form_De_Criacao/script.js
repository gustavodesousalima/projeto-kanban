//pegando elementos html
let form = document.querySelectorAll("form")

let elementoPAITarefaToDo = document.querySelector(".list_Tasks_ToDo")
let elementoPAITarefaProgress = document.querySelector(
  ".list_Tasks_In_Progress"
)
let elementoPAITarefaCompleted = document.querySelector(".list_Tasks_Completed")

//declaraçoes de variaveis
let listaTarefasAfazer = []
let listaTarefasEmAndamento = []
let listaTarefasConcluido = []

let idTask = parseInt(localStorage.getItem("lastTaskId")) || 1

//
form[0].addEventListener("submit", (event) => {
  const { formMain } = document.forms
  const titulo = formMain.titulo.value.trim() // Remove espaços em branco do início e do fim
  const descricao = formMain.descricao.value.trim()
  const prazo = formMain.term.value.trim()
  const dataAtual = new Date()
  const dataAtualFormatada = dataAtual.toISOString().split("T")[0]


 if (!titulo || !descricao || !prazo || prazo < dataAtualFormatada) {
   // Exibe uma mensagem de erro ao usuário (você pode personalizar isso)
   if (!titulo || !descricao || !prazo) {
     alert("Por favor, preencha todos os campos obrigatórios.")
   } else {
     alert("A data de prazo deve ser igual ou posterior à data atual.")
   }

   event.preventDefault()
   return
 }
  // Todos os elementos devem receber display none aqui também pq se n eles vão ficar aparecendo dps de submitar
  

  switch (botaoStatusTarefa) {
    case "btnAfazer":
      listaTarefasAfazer.push({
        idTask: idTask,
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
        proprietario: nomeDoUsuario
      })
      break

    case "btnEmAndamento":
      listaTarefasEmAndamento.push({
        idTask: idTask,
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
        proprietario: nomeDoUsuario,
      })
      break
    case "btnConcluido":
      listaTarefasConcluido.push({
        idTask: idTask,
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
        proprietario: nomeDoUsuario,
      })
      break
  }
  salvarDadosNoLocalStorage()
  idTask++
  localStorage.setItem("lastTaskId", idTask)
})

let colocaEditada
let indexEditar

elementoPAITarefaToDo.addEventListener("click", (ttt) => {
  colocaEditada = "listaTarefasAfazer"
  indexEditar = ttt.target.value
})
elementoPAITarefaProgress.addEventListener("click", (ttt) => {
  colocaEditada = "listaTarefasEmAndamento"
  indexEditar = ttt.target.value
})
elementoPAITarefaCompleted.addEventListener("click", (ttt) => {
  colocaEditada = "listaTarefasConcluido"
  indexEditar = ttt.target.value
})

form[1].addEventListener("submit", (event) => {
  event.preventDefault()
  /*  task-item
   const elementoDesejado = document.querySelector(".task-item #title-task${indexEditar}"); */
  console.log(colocaEditada)
  console.log(indexEditar)

  const { formEditar } = document.forms
  const txt = formEditar.editarTitulo.value.trim() // Remove espaços em branco do início e do fim
  const des = formEditar.editarDescricao.value.trim()
  const sta = formEditar.editarStatusTask.value
  const da = formEditar.editarTerm.value.trim()

  // Verifica se algum dos campos obrigatórios está vazio ou contém apenas espaços em branco
  if (!txt || !des || !da) {
    // Exibe uma mensagem de erro ao usuário (você pode personalizar isso)
    alert("Por favor, preencha todos os campos obrigatórios.")

    // Não continue com a edição da tarefa
    return
  }

  containerEntries.style.display = "none"
  editTasksForm.style.display = "none"
  containerForms.style.display = "none"
  confirmacaoDeRemocaoDeTask.style.display = "none"
  body.style.overflow = "scroll"

  switch (colocaEditada) {
    case "listaTarefasAfazer":
      console.log("listaTarefasAfazer")
      listaTarefasAfazer[indexEditar] = {
        titulo: txt,
        Text: des,
        status: sta,
        prazo: da,
      }
      console.log(listaTarefasAfazer[indexEditar])

      let tituloAfazer = document.querySelector(
        `.list_Tasks_ToDo #title-task${indexEditar}`
      )
      let ParagrafoAfazer = document.querySelector(
        `.list_Tasks_ToDo #Paragrafo-task${indexEditar}`
      )
      let dataAfazer = document.querySelector(
        `.list_Tasks_ToDo #task-deadline${indexEditar}`
      )
      //let prioridade= document.getElementById(``)

      tituloAfazer.innerText = listaTarefasAfazer[indexEditar].titulo
      ParagrafoAfazer.innerText = listaTarefasAfazer[indexEditar].Text
      dataAfazer.innerText = listaTarefasAfazer[indexEditar].prazo
      //prioridade.innerText = arr[pos].status
      break

    case "listaTarefasEmAndamento":
      console.log("listaTarefasEmAndamento")
      listaTarefasEmAndamento[indexEditar] = {
        titulo: txt,
        Text: des,
        status: sta,
        prazo: da,
      }
      console.log(listaTarefasEmAndamento[indexEditar])

      let tituloEmAndamento = document.querySelector(
        `.list_Tasks_In_Progress #title-task${indexEditar}`
      )
      let ParagrafoEmAndamento = document.querySelector(
        `.list_Tasks_In_Progress #Paragrafo-task${indexEditar}`
      )
      let dataEmAndamento = document.querySelector(
        `.list_Tasks_In_Progress #task-deadline${indexEditar}`
      )
      //let prioridade= document.querySelector(``)
      console.log(tituloEmAndamento)
      tituloEmAndamento.innerText = listaTarefasEmAndamento[indexEditar].titulo
      ParagrafoEmAndamento.innerText = listaTarefasEmAndamento[indexEditar].Text
      dataEmAndamento.innerText = listaTarefasEmAndamento[indexEditar].prazo
      //prioridade.innerText = arr[pos].status
      break

    case "listaTarefasConcluido":
      console.log("listaTarefasConcluido")
      listaTarefasConcluido[indexEditar] = {
        titulo: txt,
        Text: des,
        status: sta,
        prazo: da,
      }
      console.log(listaTarefasConcluido[indexEditar])

      let tituloConcluid = document.querySelector(
        `.list_Tasks_Completed #title-task${indexEditar}`
      )
      let ParagrafoConcluid = document.querySelector(
        `.list_Tasks_Completed #Paragrafo-task${indexEditar}`
      )
      let dataConcluid = document.querySelector(
        `.list_Tasks_Completed #task-deadline${indexEditar}`
      )
      //let prioridade= document.querySelector(``)

      tituloConcluid.innerText = listaTarefasConcluido[indexEditar].titulo
      ParagrafoConcluid.innerText = listaTarefasConcluido[indexEditar].Text
      dataConcluid.innerText = listaTarefasConcluido[indexEditar].prazo
      //prioridade.innerText = arr[pos].status
      break
    default:
      console.log(`dados nao encontrados`)
  }
  formEditar.editarTitulo.value = ""
  formEditar.editarDescricao.value = ""
  formEditar.editarTerm.value = ""
})

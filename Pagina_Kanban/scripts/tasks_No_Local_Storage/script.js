// SALVANDO OS DADOS NO LOCALSTORAGE
function salvarDadosNoLocalStorage() {
  localStorage.setItem("listaTarefasAfazer", JSON.stringify(listaTarefasAfazer))
  localStorage.setItem(
    "listaTarefasEmAndamento",
    JSON.stringify(listaTarefasEmAndamento)
  )
  localStorage.setItem(
    "listaTarefasConcluido",
    JSON.stringify(listaTarefasConcluido)
  )
}

function carregarDadosDoLocalStorage() {
  const afazer = localStorage.getItem("listaTarefasAfazer")
  const emAndamento = localStorage.getItem("listaTarefasEmAndamento")
  const concluido = localStorage.getItem("listaTarefasConcluido")

  if (afazer) listaTarefasAfazer = JSON.parse(afazer)
  if (emAndamento) listaTarefasEmAndamento = JSON.parse(emAndamento)
  if (concluido) listaTarefasConcluido = JSON.parse(concluido)
}

function exibirTarefasDoLocalStorage(usuarioLogado) {
  // Exibir tarefas da listaTarefasAfazer do usuário logado
  const tarefasAfazerUsuario = listaTarefasAfazer.filter(
    (tarefa) => tarefa.proprietario === usuarioLogado
  )
  tarefasAfazerUsuario.forEach((tarefa, index) => {
    // Passa o ID da tarefa como parâmetro
    const elementoTarefa = criacaoElementoTarefa([tarefa], tarefa.idTask)
    elementoPAITarefaToDo.appendChild(elementoTarefa)
  })

  // Exibir tarefas da listaTarefasEmAndamento do usuário logado
  const tarefasEmAndamentoUsuario = listaTarefasEmAndamento.filter(
    (tarefa) => tarefa.proprietario === usuarioLogado
  )
  tarefasEmAndamentoUsuario.forEach((tarefa, index) => {
    // Passa o ID da tarefa como parâmetro
    const elementoTarefa = criacaoElementoTarefa([tarefa], tarefa.idTask)
    elementoPAITarefaProgress.appendChild(elementoTarefa)
  })

  // Exibir tarefas da listaTarefasConcluido do usuário logado
  const tarefasConcluidoUsuario = listaTarefasConcluido.filter(
    (tarefa) => tarefa.proprietario === usuarioLogado
  )
  tarefasConcluidoUsuario.forEach((tarefa, index) => {
    // Passa o ID da tarefa como parâmetro
    const elementoTarefa = criacaoElementoTarefa([tarefa], tarefa.idTask)
    elementoPAITarefaCompleted.appendChild(elementoTarefa)
  })
}



carregarDadosDoLocalStorage()
exibirTarefasDoLocalStorage(nomeDoUsuario)
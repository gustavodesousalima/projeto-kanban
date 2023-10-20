// Função para editar uma tarefa
function editarTarefa(
  id,
  lista,
  novoTitulo,
  novaDescricao,
  novoStatus,
  novoPrazo
) {
  const tarefaEditada = lista.find((tarefa) => tarefa.idTask === id)

  if (tarefaEditada) {
    tarefaEditada.titulo = novoTitulo
    tarefaEditada.Text = novaDescricao
    tarefaEditada.status = novoStatus
    tarefaEditada.prazo = novoPrazo
  }
}

// Adicione um event listener para o formulário de edição
form[1].addEventListener("submit", (event) => {
  const { formEditar } = document.forms
  const txt = formEditar.editarTitulo.value.trim()
  const des = formEditar.editarDescricao.value.trim()
  const sta = formEditar.editarStatusTask.value
  const da = formEditar.editarTerm.value.trim()
  const dataAtual = new Date()
  const dataAtualFormatada = dataAtual.toISOString().split("T")[0]

  const editarTask = document.getElementById("editarTask")
  console.log(editarTask)
  const idEditar = parseInt(editarTask.getAttribute("idtask"), 10)
  const colocaEditada = encontrarListaDaTarefa(idEditar)
  console.log(idEditar)
  console.log(colocaEditada)

  if (!txt || !des || !da || da < dataAtualFormatada) {
    // Exibe uma mensagem de erro ao usuário (você pode personalizar isso)
    if (!txt || !des || !da) {
      alert("Por favor, preencha todos os campos obrigatórios.")
    } else {
      alert("A data de prazo deve ser igual ou posterior à data atual.")
    }

    event.preventDefault()
    return
  }

  // Obtém o ID da tarefa a ser editada

  // Verifica em qual lista a tarefa está e chama a função de edição apropriada
  switch (colocaEditada) {
    case "listaTarefasAfazer":
      editarTarefa(idEditar, listaTarefasAfazer, txt, des, sta, da)
      break

    case "listaTarefasEmAndamento":
      editarTarefa(idEditar, listaTarefasEmAndamento, txt, des, sta, da)
      break

    case "listaTarefasConcluido":
      editarTarefa(idEditar, listaTarefasConcluido, txt, des, sta, da)
      break

    default:
      console.log(`Dados não encontrados`)
  }

  // Limpa os campos de edição
  formEditar.editarTitulo.value = ""
  formEditar.editarDescricao.value = ""
  formEditar.editarTerm.value = ""

  // Salve as listas de tarefas atualizadas no localStorage
  salvarDadosNoLocalStorage()
})

function encontrarListaDaTarefa(idTarefa) {
  // Verifica se a tarefa está em "listaTarefasAfazer"
  const tarefaAfazer = listaTarefasAfazer.find(
    (tarefa) => tarefa.idTask === idTarefa
  )
  if (tarefaAfazer) {
    return "listaTarefasAfazer"
  }

  // Verifica se a tarefa está em "listaTarefasEmAndamento"
  const tarefaEmAndamento = listaTarefasEmAndamento.find(
    (tarefa) => tarefa.idTask === idTarefa
  )
  if (tarefaEmAndamento) {
    return "listaTarefasEmAndamento"
  }

  // Verifica se a tarefa está em "listaTarefasConcluido"
  const tarefaConcluida = listaTarefasConcluido.find(
    (tarefa) => tarefa.idTask === idTarefa
  )
  if (tarefaConcluida) {
    return "listaTarefasConcluido"
  }

  return null // Retorna null se a tarefa não for encontrada em nenhuma lista
}

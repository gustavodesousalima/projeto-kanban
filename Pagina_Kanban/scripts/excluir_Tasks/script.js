const removerTask = document.getElementById("removerTask")
removerTask.addEventListener('click', ()=> {
  const idTask = parseInt(removerTask.getAttribute("idtask"), 10)
  const listaDaTarefa  = encontrarListaDaTarefa(idTask)
  console.log(idTask)
  console.log(listaDaTarefa)

   if (listaDaTarefa) {
     // Aqui você tem o ID da tarefa e a lista em que ela está
     // Agora você pode chamar a função de exclusão da tarefa

     excluirTarefaPorID(idTask, listaDaTarefa)
   }
})

function excluirTarefaPorID(idTarefa, listaTarefas) {
  // Determine o array com base no nome da lista
  let arrayAlvo = null

  switch (listaTarefas) {
    case "listaTarefasAfazer":
      arrayAlvo = listaTarefasAfazer
      break
    case "listaTarefasEmAndamento":
      arrayAlvo = listaTarefasEmAndamento
      break
    case "listaTarefasConcluido":
      arrayAlvo = listaTarefasConcluido
      break
    default:
      console.log(`Lista não encontrada`)
  }

  if (arrayAlvo) {
    // Encontre o índice da tarefa no array com base no ID
    const indice = arrayAlvo.findIndex((tarefa) => tarefa.idTask === idTarefa)

    if (indice !== -1) {
      // Remove a tarefa do array
      arrayAlvo.splice(indice, 1)

      // Atualize o local storage com o array de tarefas atualizado
      salvarDadosNoLocalStorage()

      // Recarregue a página para refletir as alterações
      window.location.reload()
    }
  }
}


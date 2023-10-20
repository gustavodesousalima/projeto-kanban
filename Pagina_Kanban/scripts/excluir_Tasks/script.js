function removeTask(lista, arrayTarefas) {
  lista.addEventListener("click", function (event) {
    // console.log(event.target.classList.contains("remove-button"))
    if (event.target.classList.contains("remove-button")) {
      const botaoExcluir = event.target
      const tarefa = botaoExcluir.closest("li")
      if (tarefa) {
        const tituloLi = tarefa.querySelector(".title-task").textContent

        document.getElementById("removerTask").addEventListener("click", () => {
          removeTaskOfArray(arrayTarefas, tituloLi)
          tarefa.remove()
          containerForms.style.display = "none"
          confirmacaoDeRemocaoDeTask.style.display = "none"
          body.style.overflow = "scroll"
        })
      }
    }
  })
}

function excluir() {
  body.style.overflow = "hidden"
  containerForms.style.display = "flex"
  confirmacaoDeRemocaoDeTask.style.display = "block"

  removeTask(
    document.querySelector(".container_Tasks_ToDo"),
    listaTarefasAfazer
  )
  removeTask(
    document.querySelector(".container_Tasks_In_Progress"),
    listaTarefasEmAndamento
  )
  removeTask(
    document.querySelector(".container_Tasks_Completed"),
    listaTarefasConcluido
  )
}

function removeTaskOfArray(listaTarefas, titulo) {
  const indice = listaTarefas.findIndex((obj) => obj.titulo === titulo)
  if (indice !== -1) {
    listaTarefas.splice(indice, 1)
  }
}

let contador = 0

function criacaoElementoTarefa(arr, idTask) {
  contador += 1
  console.log(contador)

  let elementMain = document.createElement("li")
  elementMain.setAttribute("class", `task-item`)
  elementMain.setAttribute("value", arr.length - 1)
  elementMain.setAttribute("id", contador)
  elementMain.setAttribute("draggable", true)

  //<h2 class="title-task">Titulo da Task</h2>
  let titulo = document.createElement("h2")
  titulo.setAttribute("class", `title-task`)
  titulo.setAttribute("id", `title-task${arr.length - 1}`)
  titulo.innerText = `${arr[arr.length - 1].titulo}`

  //<div class="task-details">
  let divDetalhes = document.createElement("div")
  divDetalhes.setAttribute("class", "task-details")

  //<p>lorem lorem lorem ...............</p>
  let Detalhe = document.createElement("p")
  Detalhe.setAttribute("id", `Paragrafo-task${arr.length - 1}`)
  Detalhe.innerText = `${arr[arr.length - 1].Text}`

  divDetalhes.appendChild(Detalhe)

  let divAreaFianl = document.createElement("div")
  divAreaFianl.setAttribute("class", "task-end")

  let divAreaBotoes = document.createElement("div")
  divAreaBotoes.setAttribute("class", "buttons-Tasks")

  let btnEditar = document.createElement("button")
  btnEditar.setAttribute("class", "edit-button")
  btnEditar.setAttribute("value", arr.length - 1)
  btnEditar.setAttribute("data-taskid", idTask)
  btnEditar.setAttribute("onclick", `editar(${idTask})`)

  let btnRemover = document.createElement("button")
  btnRemover.setAttribute("class", "remove-button")
  btnRemover.setAttribute("onclick", `excluir()`)

  let btnModal = document.createElement("button")
  btnModal.setAttribute("class", "modal-button")

  divAreaBotoes.appendChild(btnEditar)
  divAreaBotoes.appendChild(btnRemover)
  divAreaBotoes.appendChild(btnModal)

  let DataPrazo = document.createElement("data")
  DataPrazo.setAttribute("class", "task-deadline")
  DataPrazo.setAttribute("id", `task-deadline${arr.length - 1}`)
  DataPrazo.innerText = `${arr[arr.length - 1].prazo}`

  divAreaFianl.appendChild(divAreaBotoes)
  divAreaFianl.appendChild(DataPrazo)

  elementMain.appendChild(titulo)
  elementMain.appendChild(divDetalhes)
  elementMain.appendChild(divAreaFianl)
  console.log(elementMain)
  return elementMain
}

const columns = document.querySelectorAll(".listTasks")
let objetoEncontrado = null

document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging")

  const titleDoElemento = e.target.querySelector("h2").textContent

  console.log(titleDoElemento)

  function removerElementoDoArray(array, valor) {
    const index = array.findIndex((item) => item.titulo === valor)
    if (index !== -1) {
      array.splice(index, 1)
      console.log(`Elemento removido do array: ${JSON.stringify(array)}`)
    } else {
      console.log("Elemento não encontrado no array")
    }
  }

  if (listaTarefasAfazer.some((item) => item.titulo === titleDoElemento)) {
    objetoEncontrado = listaTarefasAfazer.find(
      (item) => item.titulo === titleDoElemento
    )
    removerElementoDoArray(listaTarefasAfazer, titleDoElemento)
    console.log(listaTarefasAfazer)
    console.log(objetoEncontrado)
  } else if (
    listaTarefasEmAndamento.some((item) => item.titulo === titleDoElemento)
  ) {
    objetoEncontrado = listaTarefasEmAndamento.find(
      (item) => item.titulo === titleDoElemento
    )
    removerElementoDoArray(listaTarefasEmAndamento, titleDoElemento)
    console.log(listaTarefasEmAndamento)
    console.log(objetoEncontrado)
  } else if (
    listaTarefasConcluido.some((item) => item.titulo === titleDoElemento)
  ) {
    objetoEncontrado = listaTarefasConcluido.find(
      (item) => item.titulo === titleDoElemento
    )
    removerElementoDoArray(listaTarefasConcluido, titleDoElemento)
    console.log(listaTarefasConcluido)
    console.log(objetoEncontrado)
  } else {
    console.log("Elemento não encontrado em nenhum dos arrays")
  }
})
let colunaDestino
columns.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    e.preventDefault()

    const dragging = document.querySelector(".dragging")
    const applyAfter = getNewPosition(item, e.clientY)

    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging)
    } else {
      item.prepend(dragging)
    }
    colunaDestino = item.getAttribute("data-coluna")
    console.log(colunaDestino)
  })
})

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging")
  if (colunaDestino === "afazer") {
    listaTarefasAfazer.push(objetoEncontrado)
    console.log(listaTarefasAfazer)
  } else if (colunaDestino === "emandamento") {
    listaTarefasEmAndamento.push(objetoEncontrado)
    console.log(listaTarefasEmAndamento)
  } else if (colunaDestino === "concluido") {
    listaTarefasConcluido.push(objetoEncontrado)
    console.log(listaTarefasConcluido)
  }

  objetoEncontrado = null
})

function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".item:not(.dragging)")
  let result

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect()
    const boxCenterY = box.y + box.height / 2

    if (posY >= boxCenterY) result = refer_card
  }

  return result
}

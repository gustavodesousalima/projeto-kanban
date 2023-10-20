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
const confirmacaoDeRemocaoDeTask = document.getElementById("confirmacaoDeRemocaoDeTask")
const body = document.getElementsByTagName("body")[0]

let botaoStatusTarefa

btnAfazer.addEventListener("click", () => {
  botaoStatusTarefa = 'btnAfazer'
  containerForms.style.display = "flex"
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})
btnEmAndamento.addEventListener("click", () => {
  botaoStatusTarefa = 'btnEmAndamento'
  containerForms.style.display = "flex"
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})
btnConcluido.addEventListener("click", () => {
  botaoStatusTarefa = 'btnConcluido'
  containerForms.style.display = "flex"
  body.style.overflow = "hidden"
  containerEntries.style.display = "flex"
})

//pegando elementos html
let form = document.querySelectorAll('form')

let elementoPAITarefaToDo = document.querySelector('.list_Tasks_ToDo')
let elementoPAITarefaProgress = document.querySelector('.list_Tasks_In_Progress')
let elementoPAITarefaCompleted = document.querySelector('.list_Tasks_Completed')

//declaraçoes de variaveis
const listaTarefasAfazer = []
const listaTarefasEmAndamento = []
const listaTarefasConcluido = []

//
form[0].addEventListener("submit", (event) => {
  event.preventDefault()
  const { formMain } = document.forms
  const titulo = formMain.titulo.value.trim() // Remove espaços em branco do início e do fim
  const descricao = formMain.descricao.value.trim()
  const prazo = formMain.term.value.trim()

  if (!titulo || !descricao || !prazo) {
    // Exibe uma mensagem de erro ao usuário (você pode personalizar isso)
    alert("Por favor, preencha todos os campos obrigatórios.")

    // Não continue com a adição da tarefa
    return
  }

  // Todos os elementos devem receber display none aqui também pq se n eles vão ficar aparecendo dps de submitar
  containerEntries.style.display = "none"
  editTasksForm.style.display = "none"
  containerForms.style.display = "none"
  confirmacaoDeRemocaoDeTask.style.display = "none"
  body.style.overflow = "scroll"

  switch (botaoStatusTarefa) {
    case "btnAfazer":
      listaTarefasAfazer.push({
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
      })
      elementoPAITarefaToDo.appendChild(
        criacaoElementoTarefa(listaTarefasAfazer, botaoStatusTarefa)
      )
      break

    case "btnEmAndamento":
      listaTarefasEmAndamento.push({
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
      })
      elementoPAITarefaProgress.appendChild(
        criacaoElementoTarefa(listaTarefasEmAndamento, botaoStatusTarefa)
      )
      break
    case "btnConcluido":
      listaTarefasConcluido.push({
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
      })
      elementoPAITarefaCompleted.appendChild(
        criacaoElementoTarefa(listaTarefasConcluido, botaoStatusTarefa)
      )
      break
  }
  formMain.titulo.value = ""
  formMain.descricao.value = ""
  formMain.term.value = ""
})
let btn

let contador = 0

function criacaoElementoTarefa(arr) {

  contador += 1
  console.log(contador)

  let elementMain = document.createElement('li')
  elementMain.setAttribute('class', `task-item`)
  elementMain.setAttribute('value', arr.length - 1)
  elementMain.setAttribute('id', contador)
  elementMain.setAttribute('draggable', true)

  //<h2 class="title-task">Titulo da Task</h2>
  let titulo = document.createElement('h2')
  titulo.setAttribute('class', `title-task`)
  titulo.setAttribute('id', `title-task${arr.length - 1}`)
  titulo.innerText = `${arr[arr.length - 1].titulo}`


  //<div class="task-details">
  let divDetalhes = document.createElement('div')
  divDetalhes.setAttribute('class', 'task-details')

  //<p>lorem lorem lorem ...............</p>
  let Detalhe = document.createElement('p')
  Detalhe.setAttribute('id', `Paragrafo-task${arr.length - 1}`)
  Detalhe.innerText = `${arr[arr.length - 1].Text}`

  divDetalhes.appendChild(Detalhe)

  let divAreaFianl = document.createElement('div')
  divAreaFianl.setAttribute('class', 'task-end')

  let divAreaBotoes = document.createElement('div')
  divAreaBotoes.setAttribute('class', 'buttons-Tasks')

  let btnEditar = document.createElement('button')
  btnEditar.setAttribute('class', 'edit-button')
  btnEditar.setAttribute('value', arr.length - 1)
  btnEditar.setAttribute('onclick', `editar()`)

  let btnRemover = document.createElement('button')
  btnRemover.setAttribute('class', 'remove-button')
  btnRemover.setAttribute("onclick", `excluir()`)

  let btnModal = document.createElement('button')
  btnModal.setAttribute('class', 'modal-button')

  divAreaBotoes.appendChild(btnEditar)
  divAreaBotoes.appendChild(btnRemover)
  divAreaBotoes.appendChild(btnModal)

  let DataPrazo = document.createElement('data')
  DataPrazo.setAttribute('class', 'task-deadline')
  DataPrazo.setAttribute('id', `task-deadline${arr.length - 1}`)
  DataPrazo.innerText = `${arr[arr.length - 1].prazo}`


  divAreaFianl.appendChild(divAreaBotoes)
  divAreaFianl.appendChild(DataPrazo)

  elementMain.appendChild(titulo)
  elementMain.appendChild(divDetalhes)
  elementMain.appendChild(divAreaFianl)
  console.log(elementMain)
  return elementMain
}
///////////////////////////////////////////////////////////////////////////////////////////////
let colocaEditada
let indexEditar
function editar(btn) {
  containerForms.style.display = "flex"
  editTasksForm.style.display = "flex"
  containerEntries.style.display = "none"
  body.style.overflow = "hidden"
}

elementoPAITarefaToDo.addEventListener("click", (ttt) => {
  colocaEditada = 'listaTarefasAfazer'
  indexEditar = ttt.target.value
})
elementoPAITarefaProgress.addEventListener("click", (ttt) => {
  colocaEditada = 'listaTarefasEmAndamento'
  indexEditar = ttt.target.value
})
elementoPAITarefaCompleted.addEventListener("click", (ttt) => {
  colocaEditada = 'listaTarefasConcluido'
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
    case 'listaTarefasAfazer':
      console.log('listaTarefasAfazer')
      listaTarefasAfazer[indexEditar] = {
        titulo: txt,
        Text: des,
        status: sta,
        prazo: da
      }
      console.log(listaTarefasAfazer[indexEditar])

      let tituloAfazer = document.querySelector(`.list_Tasks_ToDo #title-task${indexEditar}`)
      let ParagrafoAfazer = document.querySelector(`.list_Tasks_ToDo #Paragrafo-task${indexEditar}`)
      let dataAfazer = document.querySelector(`.list_Tasks_ToDo #task-deadline${indexEditar}`)
      //let prioridade= document.getElementById(``)

      tituloAfazer.innerText = listaTarefasAfazer[indexEditar].titulo
      ParagrafoAfazer.innerText = listaTarefasAfazer[indexEditar].Text
      dataAfazer.innerText = listaTarefasAfazer[indexEditar].prazo
      //prioridade.innerText = arr[pos].status
      break;

    case 'listaTarefasEmAndamento':
      console.log('listaTarefasEmAndamento')
      listaTarefasEmAndamento[indexEditar] = {
        titulo: txt,
        Text: des,
        status: sta,
        prazo: da
      }
      console.log(listaTarefasEmAndamento[indexEditar])

      let tituloEmAndamento = document.querySelector(`.list_Tasks_In_Progress #title-task${indexEditar}`)
      let ParagrafoEmAndamento = document.querySelector(`.list_Tasks_In_Progress #Paragrafo-task${indexEditar}`)
      let dataEmAndamento = document.querySelector(`.list_Tasks_In_Progress #task-deadline${indexEditar}`)
      //let prioridade= document.querySelector(``)
      console.log(tituloEmAndamento)
      tituloEmAndamento.innerText = listaTarefasEmAndamento[indexEditar].titulo
      ParagrafoEmAndamento.innerText = listaTarefasEmAndamento[indexEditar].Text
      dataEmAndamento.innerText = listaTarefasEmAndamento[indexEditar].prazo
      //prioridade.innerText = arr[pos].status
      break;

    case "listaTarefasConcluido":
      console.log('listaTarefasConcluido')
      listaTarefasConcluido[indexEditar] = {
        titulo: txt,
        Text: des,
        status: sta,
        prazo: da
      }
      console.log(listaTarefasConcluido[indexEditar])

      let tituloConcluid = document.querySelector(`.list_Tasks_Completed #title-task${indexEditar}`)
      let ParagrafoConcluid = document.querySelector(`.list_Tasks_Completed #Paragrafo-task${indexEditar}`)
      let dataConcluid = document.querySelector(`.list_Tasks_Completed #task-deadline${indexEditar}`)
      //let prioridade= document.querySelector(``)

      tituloConcluid.innerText = listaTarefasConcluido[indexEditar].titulo
      ParagrafoConcluid.innerText = listaTarefasConcluido[indexEditar].Text
      dataConcluid.innerText = listaTarefasConcluido[indexEditar].prazo
      //prioridade.innerText = arr[pos].status
      break;
    default:
      console.log(`dados nao encontrados`);
  }
  formEditar.editarTitulo.value = ''
  formEditar.editarDescricao.value = ''
  formEditar.editarTerm.value = ''

})





function removeTask(lista, arrayTarefas) {
  lista.addEventListener("click", function (event) {
    // console.log(event.target.classList.contains("remove-button"))
    if (event.target.classList.contains("remove-button")) {
      const botaoExcluir = event.target
      const tarefa = botaoExcluir.closest("li")
      if (tarefa) {
        const tituloLi = tarefa.querySelector(".title-task").textContent

        document.getElementById('removerTask').addEventListener('click', () => {
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

  removeTask(document.querySelector(".container_Tasks_ToDo"), listaTarefasAfazer)
  removeTask(document.querySelector(".container_Tasks_In_Progress"), listaTarefasEmAndamento)
  removeTask(document.querySelector(".container_Tasks_Completed"), listaTarefasConcluido)
}

function removeTaskOfArray(listaTarefas, titulo) {
  const indice = listaTarefas.findIndex((obj) => obj.titulo === titulo)
  if (indice !== -1) {
    listaTarefas.splice(indice, 1)
  }
}

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



// Exibir no header Olá, Nome do usuário
const usuarioArmazenado = localStorage.getItem('usuarioLogado');
if (usuarioArmazenado) {
  const { nome, senha } = JSON.parse(usuarioArmazenado);
  console.log('Nome de Usuário:', nome);
  console.log('Senha:', senha);

  // Exibir o nome do usuário no elemento <h1>
  const tituloUsuario = document.querySelector('.title_Primary');
  tituloUsuario.textContent = `Olá, ${nome}`;
}

const columns = document.querySelectorAll(".listTasks")
let objetoEncontrado = null

document.addEventListener('dragstart', (e) => {
  e.target.classList.add('dragging')

  const titleDoElemento = e.target.querySelector('h2').textContent

  console.log(titleDoElemento)

  function removerElementoDoArray(array, valor) {
    const index = array.findIndex(item => item.titulo === valor)
    if (index !== -1) {
      array.splice(index, 1)
      console.log(`Elemento removido do array: ${JSON.stringify(array)}`)
    } else {
      console.log('Elemento não encontrado no array')
    }
  }

    if (listaTarefasAfazer.some(item => item.titulo === titleDoElemento)) {
      objetoEncontrado = listaTarefasAfazer.find((item) => item.titulo === titleDoElemento)
      removerElementoDoArray(listaTarefasAfazer, titleDoElemento)
      console.log(listaTarefasAfazer)
      console.log(objetoEncontrado)
    } else if (listaTarefasEmAndamento.some(item => item.titulo === titleDoElemento)) {
      objetoEncontrado = listaTarefasEmAndamento.find((item) => item.titulo === titleDoElemento)
      removerElementoDoArray(listaTarefasEmAndamento, titleDoElemento)
      console.log(listaTarefasEmAndamento)
      console.log(objetoEncontrado)
    } else if (listaTarefasConcluido.some(item => item.titulo === titleDoElemento)) {
      objetoEncontrado = listaTarefasConcluido.find((item) => item.titulo === titleDoElemento)
      removerElementoDoArray(listaTarefasConcluido, titleDoElemento)
      console.log(listaTarefasConcluido)
      console.log(objetoEncontrado)
    } else {
      console.log('Elemento não encontrado em nenhum dos arrays');
    }

});
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
      colunaDestino = item.getAttribute('data-coluna')
      console.log(colunaDestino)

    
  })
})

document.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragging')
  if (colunaDestino === 'afazer') {
    listaTarefasAfazer.push(objetoEncontrado)
    console.log(listaTarefasAfazer)
  } else if (colunaDestino === 'emandamento') {
    listaTarefasEmAndamento.push(objetoEncontrado)
    console.log(listaTarefasEmAndamento)
  } else if (colunaDestino === 'concluido') {
    listaTarefasConcluido.push(objetoEncontrado)
    console.log(listaTarefasConcluido)
  }

  objetoEncontrado = null
});

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
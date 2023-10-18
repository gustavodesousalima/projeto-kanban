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
  // Todos os elementos devem receber display none aqui também pq se n eles vão ficar aparecendo dps de submitar
  containerEntries.style.display = "none"
  editTasksForm.style.display = "none"
  containerForms.style.display = "none"
  confirmacaoDeRemocaoDeTask.style.display = "none"
  body.style.overflow = "scroll"
  const { formMain } = document.forms
  
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
  //criacaoElementoTareda(listaTarefas,botaoStatusTarefa)
  console.log(botaoStatusTarefa)

  formMain.titulo.value = ""
  formMain.descricao.value = ""
  formMain.term.value = ""
})
let btn
function criacaoElementoTarefa(arr) {

  let elementMain = document.createElement('li')
  elementMain.setAttribute('class', `task-item`)
  elementMain.setAttribute('value', arr.length - 1)
  ////////////////////////////////////////////

  //<h2 class="title-task">Titulo da Task</h2>
  let titulo = document.createElement('h2')
  titulo.setAttribute('class', `title-task`)
  titulo.setAttribute('id', `title-task${arr.length - 1}`)
  titulo.innerText=`${arr[arr.length - 1].titulo}`
  /* let txtTitulo = document.createTextNode(arr[arr.length - 1].titulo)
  titulo.appendChild(txtTitulo) */

  //<div class="task-details">
  let divDetalhes = document.createElement('div')
  divDetalhes.setAttribute('class', 'task-details')

  //<p>lorem lorem lorem ...............</p>
  let Detalhe = document.createElement('p')
  Detalhe.setAttribute('id', `Paragrafo-task${arr.length - 1}`)
  Detalhe.innerText=`${arr[arr.length - 1].Text}`
/* 
  let txtDetalhe = document.createTextNode(arr[arr.length - 1].Text)
  Detalhe.appendChild(txtDetalhe) */
  divDetalhes.appendChild(Detalhe)

  ///////////////////////////////////////////////

  //<div class="task-end">
  let divAreaFianl = document.createElement('div')
  divAreaFianl.setAttribute('class', 'task-end')

  //<div class="buttons-Tasks">
  let divAreaBotoes = document.createElement('div')
  divAreaBotoes.setAttribute('class', 'buttons-Tasks')

  //<button class="edit-button"></button>
  let btnEditar = document.createElement('button')
  btnEditar.setAttribute('class', 'edit-button')
  btnEditar.setAttribute('value', arr.length - 1)
  btnEditar.setAttribute('onclick', `editar(${btn = btnEditar.value})`)


  //<button class="remove-button"></button>
  let btnRemover = document.createElement('button')
  btnRemover.setAttribute('class', 'remove-button')
  btnRemover.setAttribute("onclick", `excluir()`)

  //<button class="modal-button"></button>
  let btnModal = document.createElement('button')
  btnModal.setAttribute('class', 'modal-button')

  divAreaBotoes.appendChild(btnEditar)
  divAreaBotoes.appendChild(btnRemover)
  divAreaBotoes.appendChild(btnModal)

  //<data class="task-deadline">15/11/2023</data>
  let DataPrazo = document.createElement('data')
  DataPrazo.setAttribute('class', 'task-deadline')
  DataPrazo.setAttribute('id', `task-deadline${arr.length - 1}`)
  DataPrazo.innerText=`${arr[arr.length - 1].prazo}`
  /* let data = document.createTextNode(arr[arr.length - 1].prazo) 
  DataPrazo.appendChild(data)*/

  divAreaFianl.appendChild(divAreaBotoes)
  divAreaFianl.appendChild(DataPrazo)

  elementMain.appendChild(titulo)
  elementMain.appendChild(divDetalhes)
  elementMain.appendChild(divAreaFianl)
  return elementMain
}

function editar(btn) {
  containerForms.style.display = "flex"
  editTasksForm.style.display = "flex"
  containerEntries.style.display = "none"
  body.style.overflow = "hidden"
}


let t1 = document.querySelector(".list_Tasks_ToDo")
let t2 = document.querySelector(".list_Tasks_In_Progress")
let t3 = document.querySelector(".list_Tasks_Completed")
/* let t4 = document.querySelector(".buttons-Tasks")


t4.addEventListener("click", (val) => {
  console.log(val)
  console.log(t4.value)
  
}) */
t1.addEventListener("click", (ttt) => {
  teste('todo', listaTarefasAfazer, ttt.target.value)
  //console.log(ttt.target.value)
})
t2.addEventListener("click", (ttt) => {
  teste('emAndamento', listaTarefasEmAndamento, ttt.target.value)
})
t3.addEventListener("click", (ttt) => {
  teste('concluida', listaTarefasConcluido, ttt.target.value)
})

function teste(areaTarefa, arr, pos) {
  formEditar.editarTitulo.value=''
   formEditar.editarDescricao.value=''
   formEditar.editarTerm.value=''
  console.log("valores de entrada"+areaTarefa, arr, pos)
  
  form[1].addEventListener("submit", (event) => {
    event.preventDefault()

    containerEntries.style.display = "none"
    editTasksForm.style.display = "none"
    containerForms.style.display = "none"
    confirmacaoDeRemocaoDeTask.style.display = "none"
    body.style.overflow = "scroll"
    console.log("valorea desatualizado do array (antes da edição)")
    console.log(arr[pos])
    const { formEditar } = document.forms
    let txt = formEditar.editarTitulo.value
    let des = formEditar.editarDescricao.value
    let sta = formEditar.editarStatusTask.value
    let da = formEditar.editarTerm.value
    
    arr[pos].titulo = txt
    arr[pos].Text = des
    arr[pos].status = sta
    arr[pos].prazo = da
    console.log("valorea atualizado do array(depois da edição)")
    console.log(arr[pos])

    let titulo = document.getElementById(`title-task${pos}`)
    let Paragrafo= document.getElementById(`Paragrafo-task${pos}`)
    let data= document.getElementById(`task-deadline${pos}`)
    //let prioridade= document.getElementById(``)

    //titulo.innerText = ''
    titulo.innerText = arr[pos].titulo
    Paragrafo.innerText = arr[pos].Text
    data.innerText = arr[pos].prazo
    //prioridade.innerText = arr[pos].status

  /*  formEditar.editarTitulo.value=''
   formEditar.editarDescricao.value=''
   formEditar.editarTerm.value='' */


  })
}




function removeTask(lista, arrayTarefas) {
  lista.addEventListener("click", function (event) {
    console.log(event.target.classList.contains("remove-button"))
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


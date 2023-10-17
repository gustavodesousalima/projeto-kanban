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
let form = document.querySelector('form')

let elementoPAITarefaToDo = document.querySelector('.list_Tasks_ToDo')
let elementoPAITarefaProgress = document.querySelector('.list_Tasks_In_Progress')
let elementoPAITarefaCompleted = document.querySelector('.list_Tasks_Completed')

//declaraçoes de variaveis
const listaTarefasAfazer = [{}]
const listaTarefasEmAndamento = [{}]
const listaTarefasConcluido = [{}]

//
form.addEventListener("submit", (event) => {
    event.preventDefault()
    containerForms.style.display = "none"
    /* console.log(form) */
    const { formMain } = document.forms
    console.log(formMain)
    switch (botaoStatusTarefa) {
        case 'btnAfazer':
            listaTarefasAfazer.push({
                titulo: formMain.titulo.value,
                Text: formMain.descricao.value,
                status: formMain.statusTask.value,
                prazo: formMain.term.value
            })
            elementoPAITarefaToDo.appendChild(criacaoElementoTareda(listaTarefasAfazer))
            break;

        case 'btnEmAndamento':
            listaTarefasEmAndamento.push({
                titulo: formMain.titulo.value,
                Text: formMain.descricao.value,
                status: formMain.statusTask.value,
                prazo: formMain.term.value
            })
            elementoPAITarefaProgress.appendChild(criacaoElementoTareda(listaTarefasEmAndamento))
            break;
        case 'btnConcluido':
            listaTarefasConcluido.push({
                titulo: formMain.titulo.value,
                Text: formMain.descricao.value,
                status: formMain.statusTask.value,
                prazo: formMain.term.value
            })
            elementoPAITarefaCompleted.appendChild(criacaoElementoTareda(listaTarefasConcluido))
            break;
    }
    //criacaoElementoTareda(listaTarefas,botaoStatusTarefa)
    console.log(listaTarefasAfazer)
    console.log(botaoStatusTarefa)


    
    formMain.titulo.value = ''
    formMain.descricao.value= ''
    formMain.term.value= ''
})


function criacaoElementoTareda(obj) {
  /* descrição do dom 
      
      pai => todos elemntos novos devem ser adicionado apos essa teg <ul class="listTasks">
      filho => o elemento que devemos adicionar dentro do elemento pai é o <li class="task-item">
      filho ..... agora os restante dos elemento devem ser adicionado tudo dentro do filho 
  
      EXEMPLO: 
       <li class="task-item">
              <h2 class="title-task">Titulo da Task</h2>
              <div class="task-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                  animi modi esse, atque recusandae tempof:
                </p>
              </div>

              <div class="task-end">
                <div class="buttons-Tasks">
                  <button class="edit-button"></button>
                  <button class="remove-button"></button>
                  <button class="modal-button"></button>
                </div>
                <data class="task-deadline">15/11/2023</data>
              </div>
            </li>
   */


  //criação do filho (li-<li class="task-item">)
  let elementMain = document.createElement('li')
  elementMain.setAttribute('class', 'task-item')
  ////////////////////////////////////////////

  //<h2 class="title-task">Titulo da Task</h2>
  let titulo = document.createElement('h2')
  titulo.setAttribute('class', 'title-task')
  let txtTitulo = document.createTextNode(obj[1].titulo)
  titulo.appendChild(txtTitulo)

  //<div class="task-details">
  let divDetalhes = document.createElement('div')
  divDetalhes.setAttribute('class', 'task-details')

  //<p>lorem lorem lorem ...............</p>
  let Detalhe = document.createElement('p')
  let txtDetalhe = document.createTextNode(obj[1].Text)
  Detalhe.appendChild(txtDetalhe)
  divDetalhes.appendChild(Detalhe)

  ///////////////////////////////////////////////

  //<div class="task-end">
  let divAreaFianl = document.createElement('div')
  divAreaFianl.setAttribute('class','task-end')

  //<div class="buttons-Tasks">
  let divAreaBotoes = document.createElement('div')
  divAreaBotoes.setAttribute('class','buttons-Tasks')

  //<button class="edit-button"></button>
  let btnEditar = document.createElement('button')
  btnEditar.setAttribute('class','edit-button')
  btnEditar.setAttribute('onclick', `editar()`)


  //<button class="remove-button"></button>
  let btnRemover = document.createElement('button')
  btnRemover.setAttribute('class','remove-button')

  //<button class="modal-button"></button>
  let btnModal = document.createElement('button')
  btnModal.setAttribute('class','modal-button')

  divAreaBotoes.appendChild(btnEditar)
  divAreaBotoes.appendChild(btnRemover)
  divAreaBotoes.appendChild(btnModal)

  //<data class="task-deadline">15/11/2023</data>
  let DataPrazo = document.createElement('data')
  DataPrazo.setAttribute('class','task-deadline')
  let data = document.createTextNode(obj[1].prazo)
  DataPrazo.appendChild(data)

  divAreaFianl.appendChild(divAreaBotoes)
  divAreaFianl.appendChild(DataPrazo)

  elementMain.appendChild(titulo)
  elementMain.appendChild(divDetalhes)
  elementMain.appendChild(divAreaFianl)
  return elementMain
}

function editar(){
  const editButton = document.querySelectorAll(".edit-button")
  console.log(editButton)
  editButton.forEach((button) => {
    button.addEventListener("click", () => {
      containerForms.style.display = "flex"
      editTasksForm.style.display = "flex"
      body.style.overflow = "hidden"
    })
  })
}
function excluir(){
  
}


const cancelTask = document.querySelectorAll(".cancelTask")
cancelTask.forEach((button) => {
  button.addEventListener("click", () => {
    containerEntries.style.display = "none"
    editTasksForm.style.display = "none"
    containerForms.style.display = "none"
    body.style.overflow = "scroll"
  })
})

/* const editButton = document.querySelectorAll(".edit-button")
editButton.forEach((button) => {
  button.addEventListener("click", () => {
    containerForms.style.display = "flex"
    editTasksForm.style.display = "flex"
    body.style.overflow = "hidden"
  })
}) */

const [btnAfazer, btnEmAndamento, btnConcluido] = document.querySelectorAll(".buttonAddTask")

const containerForms = document.getElementById("containerForms")

btnAfazer.addEventListener('click', ()=> {
  containerForms.style.display = "flex"
})
btnEmAndamento.addEventListener('click', ()=> {
  containerForms.style.display = "flex"
})
btnConcluido.addEventListener('click', ()=> {
  containerForms.style.display = "flex"
})

const cancelTask = document.getElementById("cancelTask")

cancelTask.addEventListener('click', ()=> {
  containerForms.style.display = "none"
})
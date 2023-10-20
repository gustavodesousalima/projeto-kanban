const botoesTransicao = document.querySelectorAll(".botaoTransicao")
const h1 = document.querySelector("h1")
const contentLogoTitulo = document.querySelector("#contentLogoTitulo")

function realizarTransicao() {
  document.title = "Login | Kanban"
  contentLogoTitulo.style.opacity = 0
  const logoTitulo = document.querySelector("#logoTitulo")
  logoTitulo.classList.add("logoTituloAtivo")

  const [formLogin, formCadastro] = document.querySelectorAll("form")
  formCadastro.classList.remove("efeitoFormMobile")

  setTimeout(() => {
    formCadastro.classList.remove("formAtivo")
    formLogin.classList.add("formAtivo")
    formLogin.classList.add("efeitoFormMobile")
    logoTitulo.classList.remove("logoTituloAtivo")
    h1.textContent = "Faça login em nossa plataforma"
    contentLogoTitulo.style.opacity = 1
    contentLogoTitulo.style.textAlign = "end"
    contentLogoTitulo.style.alignItems = "end"
  }, 1500)
}

function reverterTransicao() {
  document.title = "Cadastro | Kanban"
  contentLogoTitulo.style.opacity = 0
  const logoTitulo = document.querySelector("#logoTitulo")
  logoTitulo.classList.add("logoTituloDesativado")

  const [formLogin, formCadastro] = document.querySelectorAll("form")
  formCadastro.classList.add("formCadastroExtra")
  formLogin.classList.remove("efeitoFormMobile")

  setTimeout(() => {
    formCadastro.classList.remove("formCadastroExtra")
    formCadastro.classList.add("formAtivo")
    formLogin.classList.remove("formAtivo")
    formCadastro.classList.add("efeitoFormMobile")
    logoTitulo.classList.remove("logoTituloDesativado")
    h1.textContent = "Cadastre-se na nossa plataforma"
    contentLogoTitulo.style.opacity = 1
    contentLogoTitulo.style.textAlign = "start"
    contentLogoTitulo.style.alignItems = "start"
  }, 1500)

}

botoesTransicao.forEach((botao) => {
  if (botao.id.startsWith("passarParaLogin")) {
    botao.addEventListener("click", realizarTransicao)
  } else if (botao.id === "passarParaCadastrar") {
    botao.addEventListener("click", reverterTransicao)
  }
})

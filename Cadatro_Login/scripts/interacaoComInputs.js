const inputs = document.querySelectorAll("input")
const imagens = document.querySelectorAll(".imgDentroDoInput")
const formCadastro = document.getElementById("formularioCadastro")
formCadastro.classList.add("formAtivo")
formCadastro.classList.add("efeitoFormMobile")

function trocaImagemInput(index, src) {
  imagens[index].src = src
}

inputs.forEach((input, index) => {
  input.addEventListener("focus", () => {
    if (index === 0 || index === 2) {
      trocaImagemInput(index, "./assets/iconesInputs/userPreenchido.svg")
    } else {
      trocaImagemInput(index, "./assets/iconesInputs/passwordPreenchida.svg")
    }
  })

  input.addEventListener("blur", () => {
    if (index === 0 || index === 2) {
      trocaImagemInput(index, "./assets/iconesInputs/user.svg")
    } else {
      trocaImagemInput(index, "./assets/iconesInputs/password.svg")
    }
  })
})

const verSenha = document.querySelectorAll(".verSenha")
const imgVerSenha = document.querySelectorAll(".verSenha > img")
const [, senha1, , senha2, senha3] = inputs
const camposSenha = [senha1, senha2, senha3]

verSenha.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    if (camposSenha[index].type === "password") {
      camposSenha[index].type = "text"
      imgVerSenha[index].src = "./assets/iconesInputs/seenPassword.svg"
      imgVerSenha[index].style.opacity = "0.3"
    } else {
      camposSenha[index].type = "password"
      imgVerSenha[index].src = "./assets/iconesInputs/seePassword.svg"
      imgVerSenha[index].style.opacity = "1"
    }
  })
})

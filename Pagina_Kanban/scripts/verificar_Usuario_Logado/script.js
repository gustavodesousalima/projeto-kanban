// Declaração de uma variável global para armazenar o nome do usuário
let nomeDoUsuario

// Verificar se o usuário está logado
const usuarioArmazenado = localStorage.getItem("usuarioLogado")

if (usuarioArmazenado) {
  const { nome } = JSON.parse(usuarioArmazenado)

  if (nome) {
    // Atribuir o nome do usuário à variável global
    nomeDoUsuario = nome

    // Exibir o nome do usuário no elemento <h1>
    const tituloUsuario = document.querySelector(".title_Primary")
    tituloUsuario.textContent = `Olá, ${nome}`
  } else {
    // Lidar com o caso em que o nome do usuário não está definido
  }
} else {
  // Redirecionar o usuário para a página de login ou cadastro
  window.location.href = "../../../Cadastro_Login/index.html"
}

// Agora, nomeDoUsuario é uma variável global que contém o nome do usuário
console.log(nomeDoUsuario)

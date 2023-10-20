// Exibir no header Olá, Nome do usuário
const usuarioArmazenado = localStorage.getItem("usuarioLogado")
const { nome } = JSON.parse(usuarioArmazenado)
if (usuarioArmazenado) {
  // Exibir o nome do usuário no elemento <h1>
  const tituloUsuario = document.querySelector(".title_Primary")
  tituloUsuario.textContent = `Olá, ${nome}`
} else {
  window.location.href = "../../../Cadastro_Login/index.html"
}

function armazenarNoLocalStorage(nomeUsuario, senhaUsuario) {
  // Recupera os usuários existentes do localStorage
  const usuariosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verifica se o nome de usuário já existe
  const usuarioExistente = usuariosArmazenados.find(usuario => usuario.nomeUsuario === nomeUsuario);

  // Se usuário já existe, exibe um alerta e limpa os inputs
  if (usuarioExistente) {
    inputCadastroNome.value = '';
    inputCadastroSenha.value = '';
    inputConfirmarSenha.value = '';
    cardPersonalizado(
      "O Usuário já foi cadastrado, por favor digite outro nome!",
      "error.svg"
    )
    return;
  }

  // Adiciona o novo usuário à lista
  usuariosArmazenados.push({ nomeUsuario, senhaUsuario });

  // Armazena a lista atualizada de usuários no localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuariosArmazenados));

  // Exibe o card de sucesso
  cardPersonalizado(
    "O Usuário foi cadastrado com sucesso, agora faça login!",
    "success.svg"
  )
}


function handleSubmit(event) {
  const nome = document.getElementById('nome').value;
  const senha = document.getElementById('senha').value;
  // Armazenar no localStorage
  localStorage.setItem('usuarioLogado', JSON.stringify({ nome, senha }));
}

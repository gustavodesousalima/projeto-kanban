function armazenarNoLocalStorage(nomeUsuario, senhaUsuario) {
  // Recupera os usuários existentes do localStorage
  const usuariosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verifica se o nome de usuário já existe
  const usuarioExistente = usuariosArmazenados.find(usuario => usuario.nomeUsuario === nomeUsuario);

  // Se usuário já existe, exibe um alerta e limpa os inputs
  if (usuarioExistente) {
    alert('Nome de usuário já cadastrado. Escolha outro nome de usuário.');
    inputCadastroNome.value = '';
    inputCadastroSenha.value = '';
    inputConfirmarSenha.value = '';
    return;
  }

  // Adiciona o novo usuário à lista
  usuariosArmazenados.push({ nomeUsuario, senhaUsuario });

  // Armazena a lista atualizada de usuários no localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuariosArmazenados));
}

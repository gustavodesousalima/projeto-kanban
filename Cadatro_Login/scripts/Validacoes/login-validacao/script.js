document.addEventListener('DOMContentLoaded', function () {
  const inputNome = document.getElementById('nome');
  const inputSenha = document.getElementById('senha');
  const formularioLogin = document.getElementById('formularioLogin');

  function exibirMensagemErro(inputElement, divId, mensagem) {
    const divErro = document.getElementById(divId);
    divErro.textContent = mensagem;
    divErro.style.display = 'block';
    divErro.style.color = 'red';
    divErro.style.fontSize = '1.4rem';
    divErro.style.fontWeight = 'bold';
    divErro.style.textAlign = 'center';
    
    // Adiciona classe para destacar o campo inválido
    inputElement.classList.add('campo-invalido');
  }

  function removerMensagemErro(inputElement, divId) {
    const divErro = document.getElementById(divId);
    divErro.textContent = '';
    divErro.style.display = 'none';

    // Remove a classe que destaca o campo inválido
    inputElement.classList.remove('campo-invalido');
  }

  function validarNomeUsuario(nomeUsuario) {
    if (nomeUsuario.trim() === '') {
      throw new Error('O campo nome de usuário não pode estar vazio.');
    }

    if (nomeUsuario.length < 3) {
      throw new Error('Nome de usuário deve ter no mínimo 3 caracteres.');
    }

    if (nomeUsuario.length > 60) {
      throw new Error('O campo deve ter no máximo 60 caracteres.');
    }

    // Validar caracteres especiais
    if (!/^[a-zA-Z0-9]+$/.test(nomeUsuario)) {
      throw new Error('Nome de usuário não pode conter caracteres especiais.');
    }
  }

  function validarSenha(senha) {
    if (senha.length < 8) {
      throw new Error('A senha deve ter no mínimo 8 caracteres.');
    }
  }


  function validarCampoAoDigitar(inputElement, validationFunction, divId) {
    inputElement.addEventListener('input', function () {
      const valorCampo = inputElement.value;

      try {
        validationFunction(valorCampo);
        removerMensagemErro(inputElement, divId);
      } 
      catch (error) {
        exibirMensagemErro(inputElement, divId, error.message);
      }
    });
  }

  // Função para validar login do local storage
  function fazerLogin(nomeUsuario, senha) {
    // Recupera os usuários armazenados no localStorage
    const usuariosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se há um usuário correspondente
    const usuario = usuariosArmazenados.find(
      (user) => user.nomeUsuario === nomeUsuario && user.senhaUsuario === senha
    );

    if (usuario) {
      window.location.href = '../../../../Pagina_Kanban/index.html';
    } 
    else {
      alert('Nome de usuário ou senha incorretos.');
    }
  }




  function validarFormulario(event) {
    event.preventDefault();

    try {
      const nomeUsuario = inputNome.value;
      const senha = inputSenha.value;

      removerMensagemErro(inputNome, 'error-message');
      removerMensagemErro(inputSenha, 'error-message-2');

      validarNomeUsuario(nomeUsuario);
      validarSenha(senha);

      fazerLogin(nomeUsuario, senha);
    } 
    catch (error) {
      if (error.message.includes('Nome de usuário')) {
        exibirMensagemErro(inputNome, 'error-message', error.message);
      } else {
        exibirMensagemErro(inputSenha, 'error-message-2', error.message);
      }
    }
  }

  validarCampoAoDigitar(inputNome, validarNomeUsuario, 'error-message-3');
  validarCampoAoDigitar(inputSenha, validarSenha, 'error-message-4');

  formularioLogin.addEventListener('submit', validarFormulario);
});

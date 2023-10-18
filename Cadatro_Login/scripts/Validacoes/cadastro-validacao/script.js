
// Variáveis globais para serem usadas no local storage
let inputCadastroNome = document.getElementById('cadastroNome');
let inputCadastroSenha = document.getElementById('cadastroSenha');
let inputConfirmarSenha = document.getElementById('confirmarSenha');


document.addEventListener('DOMContentLoaded', function () {
  const formularioCadastro = document.getElementById('formularioCadastro');

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
  function validarConfirmacaoSenha(senha, confirmacaoSenha) {
    if (senha !== confirmacaoSenha) {
      throw new Error('A confirmação de senha não coincide com a senha.');
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
  function validarFormulario(event) {
    event.preventDefault();

    try {
      const nomeUsuario = inputCadastroNome.value;
      const senha = inputCadastroSenha.value;
      const confirmarSenha = inputConfirmarSenha.value;

      removerMensagemErro(inputCadastroNome, 'error-message');
      removerMensagemErro(inputCadastroSenha, 'error-message-2');
      removerMensagemErro(inputConfirmarSenha, 'error-message-2');

      validarNomeUsuario(nomeUsuario);
      validarSenha(senha);
      validarConfirmacaoSenha(senha, confirmarSenha);


      // Validação bem sucedida
      armazenarNoLocalStorage(nomeUsuario, senha);
    } 
    catch (error) {
      if (error.message.includes('Nome de usuário')) {
        exibirMensagemErro(inputCadastroNome, 'error-message', error.message);
      } else if (error.message.includes('senha')) {
        exibirMensagemErro(inputCadastroSenha, 'error-message-2', error.message);
      } else {
        exibirMensagemErro(inputConfirmarSenha, 'error-message-2', error.message);
      }
    }
  }

  validarCampoAoDigitar(inputCadastroNome, validarNomeUsuario, 'error-message');
  validarCampoAoDigitar(inputCadastroSenha, validarSenha, 'error-message-2');
  validarCampoAoDigitar(inputConfirmarSenha, (value) => validarConfirmacaoSenha(inputCadastroSenha.value, value), 'error-message-2');

  formularioCadastro.addEventListener('submit', validarFormulario);
});


// Variáveis globais para serem usadas aqui e no local storage
let inputCadastroNome = document.getElementById('cadastroNome');
let inputCadastroSenha = document.getElementById('cadastroSenha');
let inputConfirmarSenha = document.getElementById('confirmarSenha');


document.addEventListener('DOMContentLoaded', function () {
  const formularioCadastro = document.getElementById('formularioCadastro');

  // Exibe mensagens de erro quando o input login e senha forem digitados de forma "errada".
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

  // Remove as mensagens de erro quando o input login e senha forem digitada de forma "correta"
  function removerMensagemErro(inputElement, divId) {
    const divErro = document.getElementById(divId);
    divErro.textContent = '';
    divErro.style.display = 'none';

    // Remove a classe que destaca o campo inválido
    inputElement.classList.remove('campo-invalido');
  }

  // Valida o input do nome do usuário, caso esteja vazio, ou for menor que 3, ou maior que 60 caracteres ou tenha caracteres especiais
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

  // Verifica se a senha tem pelo menos 8 caracteres.
  function validarSenha(senha) {
    if (senha.length < 8) {
      throw new Error('A senha deve ter no mínimo 8 caracteres.');
    }
  }

  // Verifica se a confirmação de senha coincide com a senha fornecida.
  function validarConfirmacaoSenha(senha, confirmacaoSenha) {
    if (senha !== confirmacaoSenha) {
      throw new Error('A confirmação de senha não coincide com a senha.');
    }
  }

  /*
    Função que fica fazendo atualização em tempo real do input verificando todo momento se o input está passando pelas validações de caracteres especiais, vazios e etc..
  
    Se não houver essa função, só vai aparecer os erros dos inputs quando der "submit" no formulário, com essa função já vai aparecendo o ERRO no DOM na primeira letra errada
  */
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


  // Quando o form for submetido, será chamada essa função que é o CORE da lógica
  function validarFormulario(event) {
    event.preventDefault();

    try {
      const nomeUsuario = inputCadastroNome.value;
      const senha = inputCadastroSenha.value;
      const confirmarSenha = inputConfirmarSenha.value;

      // Limpa qualquer mensagem de erro
      removerMensagemErro(inputCadastroNome, 'error-message');
      removerMensagemErro(inputCadastroSenha, 'error-message-2');
      removerMensagemErro(inputConfirmarSenha, 'error-message-2');

      // Faz as validações dos inputs
      validarNomeUsuario(nomeUsuario);
      validarSenha(senha);
      validarConfirmacaoSenha(senha, confirmarSenha);


      // Se chegar até aqui a validação foi bem sucedida e usuário pode ser cadastrado
      armazenarNoLocalStorage(nomeUsuario, senha);

      // Limpa os campos
      inputCadastroNome.value = '';
      inputCadastroSenha.value = '';
      inputConfirmarSenha.value = '';

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

// Função que edita o card de acordo com o erro ou sucesso
let timeoutID

function cardPersonalizado(mensagem, imagem) {
  const cardPersonalizado = document.getElementById(
    "cardDeMensagemPersonalizado"
  )
  const textoCard = document.getElementById("textoDaMensagem")
  const imagemDeStatus = document.querySelector(
    "#containerPrincipalDaMensagem > img"
  )
  textoCard.innerText = mensagem
  imagemDeStatus.src = `./assets/iconesCardsDaMensagem/${imagem}`
  cardPersonalizado.style.display = "flex"
  clearTimeout(timeoutID)
  timeoutID = setTimeout(() => {
    cardPersonalizado.style.display = "none"
  }, 11999)
}

// Função para fechar o card personalizado
const fecharCard = document.getElementById("fecharCard")
fecharCard.addEventListener("click", () => {
  cardDeMensagemPersonalizado.style.display = "none"
  clearTimeout(timeoutID) 
})
// script.js

// Função para exibir o formulário de cadastro de Aluno ou Empresa
function mostrarFormulario(tipo) {
    // Esconde ambos os formulários
    document.getElementById('cadastroAluno').style.display = 'none';
    document.getElementById('cadastroEmpresa').style.display = 'none';

    // Mostra o formulário específico baseado na escolha
    if (tipo === 'aluno') {
        document.getElementById('cadastroAluno').style.display = 'block';
    } else if (tipo === 'empresa') {
        document.getElementById('cadastroEmpresa').style.display = 'block';
    }
}

// Função de cadastro de Aluno
document.getElementById('formCadastroAluno').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    
    // Armazenando os dados no localStorage
    localStorage.setItem('emailAluno', email);
    localStorage.setItem('senhaAluno', senha);
    localStorage.setItem('nomeAluno', nome);
    localStorage.setItem('dataNascimentoAluno', dataNascimento);

    alert('Cadastro realizado com sucesso! Agora, você pode fazer login.');

    // Redirecionando para a página de login após o cadastro
    window.location.href = 'login.html';
});

// Função de cadastro de Empresa
document.getElementById('formCadastroEmpresa').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('emailEmpresa').value;
    const senha = document.getElementById('senhaEmpresa').value;
    const nomeEmpresa = document.getElementById('nomeEmpresa').value;
    const cnpj = document.getElementById('cnpj').value;
    
    // Armazenando os dados da empresa no localStorage
    localStorage.setItem('emailEmpresa', email);
    localStorage.setItem('senhaEmpresa', senha);
    localStorage.setItem('nomeEmpresa', nomeEmpresa);
    localStorage.setItem('cnpj', cnpj);

    alert('Cadastro realizado com sucesso! Agora, você pode fazer login.');

    // Redirecionando para a página de login após o cadastro
    window.location.href = 'login.html';
});

// Recupera o nome do usuário do localStorage (ou de uma API)
document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName") || "Usuário"; // Altere aqui para obter o nome real.
    document.getElementById("user-name").textContent = userName;
  });
  
  // Exibe/oculta o menu suspenso
  function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("hidden");
  }
  
  // Lógica para sair da conta
  function logout() {
    localStorage.removeItem("userName"); // Remover informações do usuário
    window.location.href = "login.html"; // Redireciona para a tela de login
  }
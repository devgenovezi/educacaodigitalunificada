// js do nav-mobile
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

// section carousel
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Função para mostrar o slide
function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100; // Movimenta o container do carrossel
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Controle manual dos botões
prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Troca automática dos slides a cada 5 segundos
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);


// login.js

// Verifica se o usuário está logado
const username = localStorage.getItem("username");
const actionsContainer = document.getElementById("actions-container");

if (username) {
  // Substitui o conteúdo da div "actions" pelo menu de perfil
  actionsContainer.innerHTML = `
    <div class="actions">
      <span style="margin-right: 10px;">Bem-vindo, ${username}!</span>
      <button id="logoutBtn" class="ancors__login">Sair</button>
    </div>
  `;

  // Adiciona a funcionalidade de logout
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    // Remove o username do localStorage e recarrega a página
    localStorage.removeItem("username");
    window.location.reload();
  });
}

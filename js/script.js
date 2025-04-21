// Inicializa animações ao carregar a página
// Modifique a inicialização do AOS para:
AOS.init({
  once: false, // Isso faz com que as animações repitam sempre que o elemento aparece
  disable: window.innerWidth < 768 // Desativa animações em mobile se necessário
});

// Adicione este código para forçar a exibição das seções
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('#entregues, #contato');
  
  sections.forEach(section => {
    section.style.opacity = '1'; // Força a opacidade
    const children = section.querySelectorAll('[data-aos]');
    children.forEach(child => {
      child.removeAttribute('data-aos'); // Remove animações problemáticas
    });
  });
});

// Menu Mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Swiper para Empreendimentos
const swiperNovos = new Swiper('#empreendimentos .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '#empreendimentos .swiper-button-next',
    prevEl: '#empreendimentos .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});

// Swiper para Entregues
const swiperEntregues = new Swiper('#entregues .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '#entregues .swiper-button-next',
    prevEl: '#entregues .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});

// Formulário de Contato
const form = document.getElementById('form-contato');
const msgSucesso = document.createElement('p');
msgSucesso.textContent = '✅ Mensagem enviada com sucesso!';
msgSucesso.className = 'text-green-600 font-semibold text-center mt-4 hidden';

form.appendChild(msgSucesso);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      msgSucesso.classList.remove('hidden');
      form.reset();
      setTimeout(() => {
        msgSucesso.classList.add('hidden');
      }, 3000);
    } else {
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  });
});
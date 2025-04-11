// Inicializa animações ao carregar a página
AOS.init();
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
  }
  
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
  
  
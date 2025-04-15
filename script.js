// Adiciona classe ativa quando a seção entra na tela
const sections = document.querySelectorAll(".produtos-section, .home-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ativo");
    }
  });
}, {
  threshold: 0.2 // 20% visível pra ativar
});

sections.forEach(section => {
  observer.observe(section);
});

/* inicio sobre */

const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1000);
  }
}

let autoplayInterval = setInterval(moveCard, 3000);

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
    }, 1000);
  }
});

/* final do sobre*/

/* inicio especialidades*/


document.addEventListener("DOMContentLoaded", function() {
  const especialidades = document.querySelector('.especialidades');

  // Observer que vai adicionar a classe 'show' quando a seção aparecer na tela
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Quando a seção entra na tela, adicionamos a classe 'show'
              entry.target.classList.add('show');
              observer.unobserve(entry.target); // Para de observar depois que a animação é ativada
          }
      });
  }, {
      threshold: 0.3 // A animação acontece quando 30% do elemento estiver visível
  });

  // Começa a observar a seção especialidades
  observer.observe(especialidades);
});

// Função para alternar a visibilidade da descrição e rotacionar a seta
function toggleDescricao(descId, seta) {
  var descricao = document.getElementById(descId);

  // Alterna a visibilidade da descrição
  if (descricao.style.display === "none" || descricao.style.display === "") {
      descricao.style.display = "block";
      seta.classList.add("aberta");
  } else {
      descricao.style.display = "none";
      seta.classList.remove("aberta");
  }
}

function toggleDescricao(descId) {
  var descricao = document.getElementById(descId);
  descricao.classList.toggle("show");  // Adiciona ou remove a classe "show" que exibe a descrição
}




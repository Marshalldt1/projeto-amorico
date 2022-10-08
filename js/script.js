
// navegation for tabs with all imagens
let imagensArray = [
  'src="img/lara3.png" alt="amorico niver" width="350px" height="420px"',
  'src="img/amorico niver.png" alt="amorico niver" width="350px" height="420px"',
  'src="img/lara.png" alt="lara" width="350px" height="420px"',
  'src="img/lara4.png" alt="lara" width="350px" height="420px"',
  'src="img/lara2.png" alt="amorico niver" width="350px" height="420px"',
];
const imgImpress = document.querySelector(".all-imagens");
const imgShow = document.querySelector(".sobre-img");
imagensArray.forEach((item) => {
  imgImpress.innerHTML += `<img class="fotinha" ${item}></img>`;
});
imagensArray.forEach((item) => {
  imgShow.innerHTML += `<img class="img2" ${item}></img>`;
});

const allFotos = document.querySelectorAll(".fotinha");
const fotosShow = document.querySelectorAll(".img2");
allFotos.forEach((item) => {
  item.classList.add("miniFotinha");
});

fotosShow[0].classList.add("show");
function clicarFoto(index) {
  fotosShow.forEach((item) => {
    item.classList.remove("show");
  });
  fotosShow[index].classList.add("show");
}

allFotos.forEach((item, index) => {
  item.addEventListener("click", () => {
    clicarFoto(index);
  });
});
// catalogo hidden
const buttonCatalogo = document.querySelector(".button-catalogo");
const catalogo = document.querySelector(".catalogo-valores");

buttonCatalogo.addEventListener("click", () => {
  catalogo.classList.toggle("hidden-catalogo");
  initAnimacaoScroll();
});

//  scroll menu suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

// scroll page suave
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 1;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0.5;
        if (isSectionVisible) section.classList.add("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();

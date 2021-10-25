function iniTabNav() {
  //isolando o código para evitar conflitos de nome

  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    //ativação apenas se hover conteúdo no 'tabMenu' e no 'tabContent'

    tabContent[0].classList.add("ativo"); //ao carregar a página o 1ª item já recebe a classe 'ativo'

    function activeTab(index) {
      //função recebe o parametro do index
      tabContent.forEach((section) => {
        section.classList.remove("ativo"); //remove a classe ativo
      });
      tabContent[index].classList.add("ativo"); //de acordo com o elemento selecionado será adicionado a classe 'ativo'
    }

    tabMenu.forEach((itemMenu, index) => {
      //loop para cada item e o indice de cada um deles
      itemMenu.addEventListener("click", () => {
        //em cada item adiciona o evento de 'click' e aciona a função 'activeTab'
        activeTab(index);
      });
    });
  }
}

iniTabNav(); //iniciar a função, sem isso não inicia

//navegação por accordion list
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativoClass = "ativo"; //evitar repetir strings
  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);
    function activeAccordion() {
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

//scroll suave links internos

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //selecionar todos os links que começam com '#'

  function scrollToSection(event) {
    event.preventDefault(); //inpedir o padrão
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      //objeto
      behavior: "smooth",
      block: "start",
    });

    /* forma alternativa
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    })
    */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

//animação ao scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if(tabMenu.length && tabContent.length){//ativação apenas se hover conteúdo no 'tabMenu' e no 'tabContent'

  tabContent[0].classList.add('ativo')//ao carregar a página o 1ª item já recebe a classe 'ativo'


  function activeTab (index){//função recebe o parametro do index
    tabContent.forEach((section) => {
      section.classList.remove('ativo')//remove a classe ativo 
    })
    tabContent[index].classList.add('ativo')//de acordo com o elemento selecionado será adicionado a classe 'ativo'
  }

  tabMenu.forEach((itemMenu, index) =>{//loop para cada item e o indice de cada um deles
    itemMenu.addEventListener('click', () => {//em cada item adiciona o evento de 'click' e aciona a função 'activeTab'
      activeTab(index)
    })
  })

}
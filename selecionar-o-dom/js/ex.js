// Adicione a classe ativo a todos os itens do menu
const menuAtivo = document.querySelectorAll(".menu a");

menuAtivo.forEach((item) => {
  item.classList.add("ativo"); //adiciona em todos
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuAtivo.forEach((item) => {
  item.classList.remove("ativo"); //remove de todos
});

menuAtivo[0].classList.add("ativo"); //adiciona só no 1º

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href','https://google.com')//1º atributo que vai ser mudado, 2º o novo valor dele

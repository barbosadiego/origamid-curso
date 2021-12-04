


//window.alert('oi')
//alert('oi') por ser 'window' um obj. global não precisa explicitar



//const href = window.location.href;
//console.log(href);

const h1Sel = document.querySelector("h1");


function callh1(){
  console.log('clicou em ', h1Sel.innerHTML)
}
h1Sel.addEventListener('click', callh1)

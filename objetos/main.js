//verificar se um método ou propriedade existe na implementação
console.log(typeof Array.fromdsafadfas !== 'undefined')

if (typeof Array.fromdsafadfas !== 'undefined'){
  console.log('exite')
} else {
  console.log('não existe')
}

//exercícios -----------------------------

// Liste 5 objetos nativos

//object, string, array, function, number, boolean

// Liste 5 objetos do browser
console.log(window)

//window
//document
//HTMLCollection
//history
//localStorage
//location
//navigator

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof window.onafterprint !== "undefined"){
  console.log('existe')
} else {
  console.log('não existe')
}

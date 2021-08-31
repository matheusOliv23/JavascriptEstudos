//document.createElement(element) Cria um novo elemento HTML
//document.removeChild(elemento) Remove um elemento
//document.appendChild(element) Adiciona um elemento
//document.replaceChild(new, old) Substitui um elemento

const meuElemento = document.getElementById('meuElemento')

meuElemento.classList.add('novo-estilo')
//adiciona a classe

meuElemento.classList.remove('novo-estilo')
//remove a classe

meuElemento.classList.toggle('dark-mode')
//adiciona a classe caso ela não faça parte da lista e remove ela caso faça
document.getElementsByTagName('p').style.color = 'blue'

/*
Object.assign(des,any) - copia objetos
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Visto
Object.keys (retorna as chaves)
Object.freeze (congela o objeto) -> impede que o objeto seja alterado
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneta', preco: 1.9 }
const caneca = Object.assign({}, produto)
/*const caneca = {
  ...produto,
  material: 'porcelana'
}*/
caneca.nome = 'caneca'
caneca.preco = 18.99
console.log(caneca)

// Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menor que a do array original
//Filtra elementos de um array de acordo com a condição

const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 9, 10, 20, 32]

const numerosFiltrados = numeros.filter(valor => valor % 2 === 0)

console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou maior
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 21 },
  { nome: 'Gustavo', idade: 32 },
  { nome: 'Paulo', idade: 41 },
  { nome: 'Augusto', idade: 18 },
  { nome: 'Jose', idade: 77 }
]

const Nome5letras = pessoas.filter(obj => obj.nome.length >= 5)
console.log(Nome5letras)
const maisVelhos = pessoas.filter(valor => valor.idade > 50)
console.log(maisVelhos)
const terminaA = pessoas.filter(obg =>
  obg.nome.toLocaleLowerCase().endsWith('a')
)
console.log(terminaA)

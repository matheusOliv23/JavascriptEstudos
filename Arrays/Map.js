// Map altera o valor do array

const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 9, 10, 20, 32]

const dobraNum = numeros.map(valor => valor * 2)

console.log(dobraNum)

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave 'nome'do objeto
//Adicione uma chave id em cada projeto

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 21 },
  { nome: 'Gustavo', idade: 32 },
  { nome: 'Paulo', idade: 41 },
  { nome: 'Augusto', idade: 18 },
  { nome: 'Jose', idade: 77 }
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)
const idades = pessoas.map(obj => obj.idade)
console.log(idades)
const chaveId = pessoas.map((obj, indice) => {
  const newObj = { ...obj } //copia o array original
  newObj.id = indice + 1
  return newObj
})
console.log(chaveId)

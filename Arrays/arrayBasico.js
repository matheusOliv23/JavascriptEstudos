//Valor por referência
//Spread Operator

//const nomes = ['Matheus', 'Henrique', 'Oliveira']

//delete nomes[1] //deleta um elemento do array sem alterar seu índice

//const novo = nomes //referencia o array em uma constante

//const novo = [...nomes] //copia o array nomes - Spread Operator

// os paranteses são utilizados apenas em métodos, não em atributos

//novo.pop() //O método pop remove o último elemento de um array e retorna aquele valor.

//const removido = nomes.pop()

//const removido = nomes.shift() //remove o primeiro elemento e desloca os indices

//nomes.push('Ricardo', 'Jose') // adiciona um elemento
//nomes.unshift('João') // adiciona um elemento ao inicio do array, mas desloca os outros indices

//const novo = nomes.slice(0, -1) //fatia o array

const nome = ['Matheus', 'Henrique', 'Oliveira']
//const nomes = nome.split(' ') // separa a string de acordo com o caractere entre as aspas
const nomes = nome.join(' ') // transforma um array em string de acordo com o que está dentro das aspas
console.log(nomes)

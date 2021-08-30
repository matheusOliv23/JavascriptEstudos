const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Matheus']

//nomes.splice(indice, quantos elementos quero apagar, elem1, elem2,elem3)

//const removidos = nomes.splice(4, 1) // começa no indice 4 e remove 1 elemento -retorna em array

//const removidos = nomes.splice(2, Number.MAX_VALUE) //remove os elementos até o final

const removidos = nomes.splice(2, 1, 'Gustavo') // a partir do indice 2, vc remove 1 elemento e adiciona Gustavo a esse indice

console.log(nomes, removidos)

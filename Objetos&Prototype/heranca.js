function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia
}
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco)
  this.cor = cor
}
function Caneta(nome, preco, cor, estoque) {
  Produto.call(this, nome, preco)
  this.cor = cor

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque
    },
    set: function (valor) {
      if (typeof valor !== 'number') return 'Não é um número'
      estoque = valor
    }
  })
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100)
}

Caneta.prototype = Object.create(Produto.prototype)
Caneta.prototype.constructor = Caneta

const camiseta = new Camiseta('Regata', 7.5, 'Azul')
const caneta = new Caneta('Bic', 2.0, 'Preta', 100)
camiseta.aumento(10)
console.log(camiseta)
caneta.estoque = '100'
console.log(caneta)

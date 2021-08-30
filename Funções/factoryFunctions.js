function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    //getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    //setter
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift() //remove o primeiro nome
      this.sobrenome = valor.join(' ')
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}`
    },
    altura,
    peso,
    get imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Matheus', 'Oliveira', 1.67, 56)
p1.nomeCompleto = 'Matheus Henrique de Oliveira'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)

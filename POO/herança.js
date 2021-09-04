class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + 'ligado')
      return
    }
    this.ligado = true
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + 'desligado')
    }

    this.ligado = false
  }
}

class Smarthphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome) //chamar construtor da classe pai
    this.cor = cor
    this.modelo = modelo
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy')
console.log(s1)

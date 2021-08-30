const pessoa1 = new Object()
pessoa1.nome = 'Matheus'
pessoa1.sobrenome = 'Oliveira'
pessoa1.idade = 25
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome`
}
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())

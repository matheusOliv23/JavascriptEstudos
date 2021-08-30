// Função construtora retorna objetos
// Construtota -> Nome com letra maiúscula => new Pessoa

function Pessoa(nome, sobrenome) {
  //atributos ou métodos privados
  const ID = 123
  const metodoInterno = () => {}

  // atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = () => {
    console.log('sou um método')
  }
}

const p1 = new Pessoa('Matheus', 'Henrique')
p1.metodo()

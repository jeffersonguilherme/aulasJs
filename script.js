// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado){
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado, quantidadeLados){
  return lado *  quantidadeLados;
}

console.log(perimetro(5, 8))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

let nome = prompt('Informe seu nome')
let sobrenome = prompt('Informe seu sobrenome')

function nameCompleto(nome, sobrenome){
  console.log(`Seu nome é ${nome} ${sobrenome}`)
}

nameCompleto(nome, sobrenome)
// Crie uma função que verifica se um número é par

let numero = Number(prompt('Informe um número: '))

function numeroPar(numero){
  if(numero % 2 === 0){
    console.log(`O número ${numero} é par`)
  }else{
    console.log(`O número ${numero} é ímpar`)
  }
}

numeroPar(numero)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)


function typeDado(dadotipo){
  return typeof dadotipo;
}

console.log(typeDado(undefined))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log('Jeff')
})
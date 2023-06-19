
// let idade = Number(prompt("Em qual ano você nasceu?"));


// let calculaIdade = 2023 - idade;


// console.log(calculaIdade)
// console.log(idade)

// function maiordeIdade() {
//   window.alert("Você é maior de idade")
// }

// function menordeIdade() {
//   window.alert('Você é menor de idade')
// }

// if (calculaIdade >= 18){
//   maiordeIdade()
// }else{
//   menordeIdade()
// }

// function pi() {
//   return 3.14;
// }

// let total = 5 * pi()
// console.log(total)

// function imc(peso, altura) {
//   const imc = peso / (altura ** 2);
//   return imc;
// }

// console.log(imc(86,1.64))

// let cor = prompt("qual sua cor favorita?")

// function corFavorita(cor) {
//   if(cor === 'azul') {
//     return 'eu gosto do céu';
//   }else if(cor === 'verde'){
//     return 'eu gosto de mato'
//   }else {
//     return 'Eu não gosto de cores'
//   }
// }

// console.log(corFavorita(cor))


// function mostraConsole(){
//   console.log('oi')
// }

// addEventListener('click', mostraConsole)


// function imc2(peso, altura) {
//     const imc = peso / (altura ** 2);
//     console.log(imc)
 
//   }

//   imc2(20, 1.8)
  
//   console.log(imc2(100, 1.8))
//   // console.log(imc2(86,1.64))

//   function terceiraIdade (idade) {
//     if(typeof idade !== 'number'){
//       return 'Informe a sua idade!';
//     }else if(idade >= 60) {
//       return true;
//     }else {
//       return false
//     }
//   }

//   console.log(terceiraIdade(60))

function faltaVisitar(paisesVisitados){
  let totalPaises = 193;
  return `Faltam visita ${totalPaises - paisesVisitados} países`
}
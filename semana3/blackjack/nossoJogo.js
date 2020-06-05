/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 
console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
  const primeiraCarta = comprarCarta();
  const segundaCarta = comprarCarta();
  const terceiraCarta = comprarCarta();
  const quartaCarta = comprarCarta();
  let somaUsuário = primeiraCarta.valor + segundaCarta.valor
  let somaComputador = terceiraCarta.valor + quartaCarta.valor
  console.log(`Usuário - cartas: ${primeiraCarta.texto} + ${segundaCarta.texto} - pontuação ` + somaUsuário)
  console.log(`Computador - cartas: ${terceiraCarta.texto} + ${quartaCarta.texto} - pontuação ` + somaComputador)
  
  if(somaUsuário === somaComputador){
     console.log("Empate!")
  } else if (somaUsuário > somaComputador && somaUsuário<=21){
     console.log("O usuário ganhou!")
  } else if (somaUsuário < somaComputador && somaComputador<=21){
     console.log("O computador ganhou!")
  }

   
} else {
   console.log("O jogo acabou.")
}
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
   let cartasUsuario = []
   let cartasComputador = []  

   let i = 0
   let j = 0
   while (i<2) {
      cartasUsuario.push(comprarCarta())
      console.log(cartasUsuario)
      i++
   }
   while (j<2) {
      cartasComputador.push(comprarCarta())
      console.log(cartasComputador)
      j++
   }


   // while (confirm("Deseja comprar uma nova carta?"))
   
} else {
   console.log("O jogo acabou.")
}
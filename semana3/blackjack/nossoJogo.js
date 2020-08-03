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

console.log("Bem vindo ao Blackjack")

 if(confirm("Quer iniciar uma nova rodada?")){

 } else{
 	console.log("O jogo acabou")
 }
 	

let valor	
const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] 	
const naipes = ["♦️", "♥️", "♣️", "♠️"]


for (valor = 0; valor <= cartas.length; valor++) {
    if (cartas === "A") {
    valor = 11
  } else if (cartas === "J" || cartas === "Q" || cartas === "K") {
    valor = 10
  }
  
 

}


for ( naipe of naipes) {
	console.log(valor, naipe)
  
}


 


  

const carta = comprarCarta() 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)




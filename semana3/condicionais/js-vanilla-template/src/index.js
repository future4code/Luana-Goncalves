/* EXERCÍCIO 1
Se número que a pessoa digitou 
divido por 2 tiver resto igual a 0, é impressa
uma mensagem "Passou no teste", senão imprimi
"Não passou no teste"

EXERCÍCIO 2 
A- O código imprimi na tela o preço da fruta que 
a pessoa escolher.
B- O preço da fruta maçã é R$ 2,25
C- O preço da fruta pera é R$ 5,5
default

EXERCÍCIO 3
A- Pedindo para usuário digitar um número e
tranformando a resposta em Number
B- Para 10 a resposta é: " Esse número passou
no teste" Para -10 não exibe nada.
C- Sim, Let mensagem está dentro das
chaves do if e o pedido de impressão na tela 
está fora das chaves

*/

/*EXERCÍCIO 4
let idade = Number(prompt("Qual sua idade?"))

if(idade >= 18){
	console.log("Você pode dirigir" )
}
else{
	console.log("Você não pode dirigir")
}

*/

/* EXERCÍCIO 5
let turno = prompt("Qual seu turno?: M, V ou N")toUpperCase

if (turno === "M") {
	console.log("Bom dia!")
}

if (turno === "V") {
	console.log("Boa tarde!")
}
if (turno === "N") {
	console.log("Boa noite!")	
}

*/

/* EXERCÍCIO 6
let turno = prompt("Qual seu turno?: M, V ou N")
let bom
switch (turno) {
	case "M":
	bom = "Bom dia!"
	break

	case "V":
	bom = "Boa tarde!"
	break

	case "N":
	bom = "Boa noite!"
	break

}
console.log(bom)
*/
/* EXERCÍCIO 7
let filme = prompt("Qual o gênero do filme?")
let valor = prompt("Qual valor da entrada?")
if (filme ==="fantasia" && valor <= 15) {
	console.log("Bom filme!")

}

else {
	console.log("Escolha outro filme :(")
}
*/
/*DESAFIO 1
let filme = prompt("Qual o gênero do filme?").toLowerCase()
let valor = prompt("Qual valor da entrada?").toUpperCase()
let snack = prompt("Qual snack você gostaria de comprar?").toUpperCase()
if (filme ==="fantasia" && valor <= 15) {
	console.log("Bom filme! com ",snack )

}

else {
	console.log("Escolha outro filme :(")
}
*/

let nome = prompt("Qual seu nome completo?")
let tipo = prompt("Qual tipo do jogo? Digite IN para internacional ou DO para doméstico").toLowerCase()
let etapa = prompt("Qual estapa do jogo? Digite SF para semi-final; DT para decisão de terceiro lugar ou FI para final ").toLowerCase()
let etapa = prompt("Qual categoria do jogo? Digite 1, 2, 3 ou 4 ").toLowerCase()
let quantidade = prompt("Qual a quantidade de ingressos?")
let valor = 


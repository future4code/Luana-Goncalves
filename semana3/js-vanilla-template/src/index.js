
/* 1- imprimi -> 10 
imprimi -> 10 5 */

/* imiprimi -> 10 20 a */
 let nome
 let idade


console.log(typeof(nome), typeof(idade))
/* Duas variáveis undefined que não apresentam valores*/

nome= prompt("Qual seu nome?")
idade= prompt("Qual sua idade?")

console.log (typeof(nome), typeof(idade))
/* duas variáveis strig por ser de texto*/

console.log("Olá",nome, "você tem",idade, "anos") 

/*2*/
let cidade = prompt("Mora em qual cidade?")
console.log(cidade)

let cor = prompt("Qual sua cor favorita?")
console.log(cor)

let estacao = prompt("Prefere qual estação do ano?")
console.log(estacao)

let animais =  prompt("Tem animais de estimação?")
console.log(animais)

let viajar = prompt("Gosta de viajar?")
console.log(viajar)


/*3*/

let array =['sashimi', 'camarão', 'batata', 'sorvete', 'salgado' ]
console.log( array[0], array[1],array[2],array[3],array[4] )

console.log ("Essas são minhas comidas favoritas:")
console.log( array[0])
console.log( array[1])
console.log( array[2])
console.log( array[3])
console.log( array[4])


/*4*/

let pergunta =['Você gosta de sorvete?', 'Você gosta de comida japonesa?', 'Você gosta de camarão?']   

let resposta =['sim', 'não']

resposta[0]= true
resposta[1]= false

console.log ( pergunta[0], resposta[0], pergunta[1], resposta[0], pergunta[2], resposta[0])

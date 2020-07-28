/* a- false 
 b- false
 c- true (bool1 é true) 
 e - typeof retorna boolean*/

 /*a. undefilned
 b. null
 c. 11
 d. 3
 e. 11
 f. 9
*/



/* 1

const idade = prompt("Qual sua idade?")
const idadeAmigo = prompt("Qual idade do seu melhor amigo?")

const maior = Number(idade) > Number(idadeAmigo)
console.log("Sua idade é maior que do seu amigo?", maior)
console.log("Diferença", idade - idadeAmigo, ) */

/*2

let par = prompt("Insira um número par")
par = Number(par)
resto = par%2
console.log (resto)*/ 
/* Se o número é impar o resultado é 2*/

let listaDeTarefas = []
let pergunta1 = prompt("1- Cite uma tarefa do seu dia")
let pergunta2 = prompt("2- Cite mais uma tarefa do seu dia")
let pergunta3 = prompt("3- Cite mais uma tarefa do seu dia")
listaDeTarefas.push(pergunta1)
listaDeTarefas.push(pergunta2)
listaDeTarefas.push(pergunta3)
console.log(listaDeTarefas)
let remover = prompt("Entre 1, 2 e 3. Qual tarefa você já realizou?")
listaDeTarefas.splice(remover, 1)
console.log(listaDeTarefas)






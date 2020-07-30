/*EXERCÍCIO 1
Ele declara 0 para VALOR e declara que i
começa com 0 e vai atéum valor menor que 5; na sequencia declara 
que VALOR é igual a VALOR+i; Então fica uma 
sequencia depois que adiciona um número em i é 
adicionado esse valor em VALOR também.
0+0
1+0
2+1
3+3
4+6
console.log mostra 10


EXERCÍCIO 2
A- 19, 21, 23, 25, 27, 30
B- Sim

*/
/*EXERCÍCIO 3
A-*/

/*const arrayOriginal[0, 105, 200, 300, 400]
for (arrayOriginal of arrayOriginal){
	console.log(arrayOriginal)
}
 

B-

let arrayOriginal = [0, 105, 200, 300, 400]
for (arrayOriginal of arrayOriginal){
	arrayOriginal /= 10
	console.log(arrayOriginal)
}
*/

let arrayOriginal = [0, 105, 200, 300, 400]
for (arrayOriginal of arrayOriginal){
	  if(arrayOriginal %= 0){
	    console.log(arrayOriginal)
	}
}
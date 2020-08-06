
function armazenar(){
const tituloPost = document.getElementById("titulo-post").value

const autorPost = document.getElementById("autor-post").value

const conteudoPost = document.getElementById("conteudo-post").value



const post = {

	titulo: tituloPost,
	autor: autorPost,
	conteudo: conteudoPost,
}


function adicionaPost() {
     const container = document.getElementById("container-de-posts")
     container.innerHTML += `<p>${tituloPost.value}, ${autorPost.value}, ${conteudoPost.value}</p>`
     texto.value = ""
 }



 
 function apertarBotao(evento){
     console.log(evento)
     adicionaPost()
 }
const arrayPosts = []
arrayPosts.push(post)

console.log(arrayPosts)





tituloPost.value = ""
autorPost.value = "" 
conteudoPost.value = ""


}




 


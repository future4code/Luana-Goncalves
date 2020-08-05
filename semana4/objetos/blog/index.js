
function armazenar(){
const tituloPost = document.getElementById("titulo-post").value

const autorPost = document.getElementById("autor-post").value

const conteudoPost = document.getElementById("conteudo-post").value



const post = {

	titulo: tituloPost,
	autor: autorPost,
	conteudo: conteudoPost,
}

const arrayPosts = []
arrayPosts.push(post)

console.log(arrayPosts)





tituloPost.value = ""
autorPost.value = "" 
conteudoPost.value = ""


}


 function adicionaPost() {
     const container = document.getElementById("container-de-posts")
     container.innerHTML += `<p>${arrayPosts.value}</p>`
     texto.value = ""
 }

 function apertarBotao(evento){
     console.log(evento)
     adicionaPost()
 }

 


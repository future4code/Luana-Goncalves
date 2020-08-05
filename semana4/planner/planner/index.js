function adicionarItem() {
	let meuInput = document.getElementById("tarefa")
	let item = meuInput.value
	

	const dias = document.getElementById("dias-semana")
	let diasSemana = dias.value
	

	switch(diasSemana){
		case"domingo":
		const domingo = document.getElementById("domingo")
		domingo.innerHTML += '<p>${item}</p>'
		meuInput.value = ""
		break

		case"segunda":
		const segunda = document.getElementById("segunda")
		segunda.innerHTML += '<p>${item}</p>'
		meuInput.value = ""
		break

		case"terca":
		const terca = document.getElementById("terca")
		terca.innerHTML += '<p>${item}</p>'
		meuInput.value = ""
		break

		case"quarta":
		const quarta = document.getElementById("quarta")
		quarta.innerHTML +='<p>${item}</p>'
		meuInput.value = ""
		break

		case"quinta":
		const quinta = document.getElementById("quinta")
		quinta.innerHTML += '<p>${item}</p>'
		meuInput.value = ""
		break

		case"sexta":
		const sexta = document.getElementById("sexta")
		sexta.innerHTML += '<p>${item}</p>'
		meuInput.value = ""
		break

		case"sabado":
		const sabado = document.getElementById("sabado")
		sabado.innerHTML += '<p>${item}</p>'
		meuInput.value = ""
		break
	}
	
}	




	//let lista= document.getElementById("domingo")

	//lista.innerhtml += '<p>${lista}</p>'

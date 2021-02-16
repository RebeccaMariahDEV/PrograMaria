document.getElementById("enviar").addEventListener("click", formulario)

function formulario(){
    if(document.getElementById("nome").value !="" && document.getElementById("email").value !="" && document.getElementById("numero").value !=""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else {
        alert("Por favor, preencha todos os campos.")
    }

}



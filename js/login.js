function logar() {
    let login = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (login =='Davi'  &&  senha =='davilindo') {
        location.href = "inicio.html"
    }
    else{
        alert("Email ou senha incorretos")
    }

}
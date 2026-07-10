
const API_URL = "http://localhost:3000"

document.getElementById("loginForm").addEventListener('submit', async(e) => {
    e.preventDefault()

    const mensagem = document.getElementById("mensagem")

    const dados = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    }

    const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    })

    const resultado = await response.json()

    if (response.ok) {
        localStorage.setItem("token", resultado.token);
        mensagem.textContent = resultado.message
        mensagem.style.color = "green"

        setTimeout(() => {
            window.location.href = "/"
        })

    } else {
        mensagem.textContent = resultado.message
        mensagem.style.color = "red"
    }
})
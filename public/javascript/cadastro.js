
const API_URL = "https://projeto-despesas-pessoias.onrender.com"

document.getElementById("cadastroForm").addEventListener('submit', async(e) => {
    e.preventDefault()

    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    }

    const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    })

    const resultado = await response.json()

    if (response.ok) {
        mensagem.textContent = resultado.message
        mensagem.style.color = "green"

        setTimeout(() => {
            window.location.href = "/"
        }, 2000)
        
    } else {
        mensagem.textContent = resultado.message
        mensagem.style.color = "red"
    }
})
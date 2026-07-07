
const API_URL = "https://projeto-despesas-pessoias.onrender.com"

document.getElementById('expenseForm').addEventListener("submit", async(e) => {
    e.preventDefault();

    const despesas = {
        descricao: document.getElementById('descricao').value,
        valor: Number(document.getElementById('valor').value),
        categoria: document.getElementById('categoria').value,
        data: document.getElementById('data').value
    }

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/auth/expenses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(despesas)
    });

    console.log("STATUS:", response.status)

const data = await response.json()
console.log("DATA:", data)

    document.getElementById('mensagem').textContent =
    data.message
})


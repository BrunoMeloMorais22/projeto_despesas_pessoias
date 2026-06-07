
document.getElementById('expenseForm').addEventListener("submit", async(e) => {
    e.preventDefault();

    const despesas = {
        descricao: document.getElementById('descricao').value,
        valor: Number(document.getElementById('valor').value),
        categoria: document.getElementById('categoria').value,
        data: document.getElementById('data').value
    }

    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:3000/expenses', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(despesas)
    });

    const data = await response.json();
    alert(data.mensagem)
})


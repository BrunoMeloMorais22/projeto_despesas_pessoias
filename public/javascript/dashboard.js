async function carregarDashboard() {

    const response = await fetch(
        'http://localhost:3000/auth/expenses'
    )

    const despesas = await response.json()

    const tabela = document.getElementById('tabelaExpenses')

    tabela.innerHTML = ''

    despesas.forEach(despesa => {
        tabela.innerHTML += `
            <tr>
                <td>${despesa.descricao}</td>
                <td>${despesa.valor}</td>
                <td>${despesa.categoria}</td>
                <td>${despesa.data}</td>
            </tr>
        `
    })

    const categorias = {}

    despesas.forEach(despesa => {
        categorias[despesa.categoria] =
            (categorias[despesa.categoria] || 0) + Number(despesa.valor)
    })

    const ctx = document.getElementById('expenseChart')

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(categorias),
            datasets: [{
                data: Object.values(categorias)
            }]
        }
    })
}

carregarDashboard()
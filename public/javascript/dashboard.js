async function carregarDespesas() {
    const response = await fetch(
        'http://localhost:3000/auth/expenses'
    )

    const despesas = await response.json()

    const tabela = document.getElementById('tabelaExpenses')

    tabela.innerHTML = ''

    despesas.forEach(despesas => {
        tabela.innerHTML += `
            <tr>
                <td>${despesas.descricao}</td>
                <td>${despesas.valor}</td>
                <td>${despesas.categoria}</td>
                <td>${despesas.data}</td>
            </tr>
        `
    })
}

carregarDespesas()
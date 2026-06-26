let expenseChart
let despesaEditando = null

const API_URL = "https://projeto-despesas-pessoias.onrender.com"

async function carregarDashboard() {

    console.log('Dashboard carregado')

    const response = await fetch(
        `${API_URL}/auth/expenses`
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
                <td>${new Date(despesa.data).toLocaleDateString('pt-BR')}</td>
                <td> <button onclick="excluirDespesa(${despesa.id})">Excluir</button> </td>
                <td> <button onclick="editarDespesa(${despesa.id})">Editar</button> </td>
            </tr>
        `
    })

    const categorias = {}

    despesas.forEach(despesa => {
        categorias[despesa.categoria] =
            (categorias[despesa.categoria] || 0) + Number(despesa.valor)
    })

    const ctx = document.getElementById('expenseChart')

    if(expenseChart){
        expenseChart.destroy()
    }

    expenseChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(categorias),
            datasets: [{
                data: Object.values(categorias)
            }]
        }
    })
}

async function excluirDespesa(id) {
    const response = await fetch(
        `${API_URL}/auth/expenses/${id}`, {
            method: 'DELETE'
        }
    )

    if(response.ok){
        carregarDashboard()
    }   
}

async function editarDespesa(id){

    const response = await fetch(`${API_URL}/auth/expenses/${id}`)
    const despesa = await response.json()

    document.getElementById('descricao').value = despesa.descricao
    document.getElementById('valor').value = despesa.valor
    document.getElementById('categoria').value = despesa.categoria
    document.getElementById('data').value = despesa.data.split('T')[0]
    despesaEditando = id

    document.getElementById('modal').style.display = 'block'
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none'
}

async function salvarEdicao() {
    await fetch(`${API_URL}/auth/expenses/${despesaEditando}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            descricao: document.getElementById('descricao').value,
            valor: document.getElementById('valor').value,
            categoria: document.getElementById('categoria').value,
            data: document.getElementById('data').value
        })
    })

    await carregarDashboard()
    fecharModal()
    despesaEditando = null
}

carregarDashboard()
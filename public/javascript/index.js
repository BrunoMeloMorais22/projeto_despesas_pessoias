
const API_URL = "https://projeto-despesas-pessoias.onrender.com"

const token = localStorage.getItem("token");

const naoLogado = document.getElementById("naoLogado");
const logado = document.getElementById("logado");
const deletarConta = document.getElementById("deletarConta")

if (token) {
    naoLogado.style.display = "none";
    logado.style.display = "flex";
    deletar.style.display = "block"
} else {
    naoLogado.style.display = "flex";
    logado.style.display = "none";
    deletarConta.style.display = "none"
}

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.reload();
});

function openSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}

async function carregarPerfil() {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}/users/perfil`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const usuario = await response.json();

    document.getElementById("nomeUsuario").innerHTML = usuario.nome;
    document.getElementById("emailUsuario").innerHTML = usuario.email;
}

async function deletar() {

    try{
        const token = localStorage.getItem('token')
        const confirmar = confirm("Tem certeza que deseja excluir sua conta?");

        if(!confirmar){
            return;
        }
        const response = await fetch(`${API_URL}/users/deletarConta`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        const usuario = await response.json()

        if(response.ok) {
            alert("Conta deletada com sucesso")
            localStorage.removeItem('token')
            window.location.href = "/login"
        } else{
            alert(usuario.mensagem)
        }
    }catch (error) {
        console.error(error)
    }
   
}

if(token){
    carregarPerfil()
}


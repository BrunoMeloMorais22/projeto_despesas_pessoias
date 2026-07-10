
const API_URL = "https://projeto-despesas-pessoias.onrender.com"

const token = localStorage.getItem("token");

const naoLogado = document.getElementById("naoLogado");
const logado = document.getElementById("logado");

if (token) {
    naoLogado.style.display = "none";
    logado.style.display = "flex";
} else {
    naoLogado.style.display = "flex";
    logado.style.display = "none";
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

carregarPerfil()

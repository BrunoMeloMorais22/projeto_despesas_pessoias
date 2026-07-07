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

document.getElementById('loginForm').addEventListener("submit", async(e) => {
    e.preventDefault();

    const login = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
    }

    const response = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(login)
    });

    const data = await response.json();
    alert(data.message)
})


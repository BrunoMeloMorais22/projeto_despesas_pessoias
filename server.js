const express = require("express");
const path = require("path");

const app = express();

const expensesRoutes = require('./backend/src/routes/expenseRoutes')

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", expensesRoutes)

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.get("/despesas", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "despesas.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "dashboard.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
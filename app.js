const express = require('express')
const app = express()
const path = require('path')
const expenseRoutes = require('./backend/src/routes/expenseRoutes')
const expenseController = require('./backend/src/controller/expenseController')

app.use(express.json())

app.use('/auth', expenseRoutes)

app.get('/', (req, res) => {
    res.status(200).json({
        message: "API rodando"
    })
})

app.get("/auth/expenses/:id", expenseController.findById)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", '/public/html/index.html'))
})

app.get('/despesas', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "/public/html/despesas.html"))
})

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "/public/html/dashboard.html"))
})

module.exports = app
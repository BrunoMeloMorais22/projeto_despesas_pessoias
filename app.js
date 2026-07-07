const express = require('express')
const path = require('path')
const cors = require('cors')

const expenseRoutes = require('./backend/src/routes/expenseRoutes')
const userRoutes = require('./backend/src/routes/userRoutes')
const expenseController = require('./backend/src/controller/expenseController')

const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.use('/auth', expenseRoutes)
app.use('/users', userRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})

app.get('/despesas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'despesas.html'))
})

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'dashboard.html'))
})

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'cadastro.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'))
})

app.get('/auth/expenses/:id', expenseController.findById)

module.exports = app
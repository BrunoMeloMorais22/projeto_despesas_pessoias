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


module.exports = app
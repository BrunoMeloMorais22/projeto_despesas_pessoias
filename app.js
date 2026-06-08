const express = require('express')
const app = express()
const path = require('path')
const expenseRoutes = require('./backend/src/routes/expenseRoutes')

app.use(express.json())

app.use('/auth', expenseRoutes)

app.get('/', (req, res) => {
    res.status(200).json({
        message: "API rodando"
    })
})

app.use(express.static(path.join(__dirname, 'public')))


module.exports = app
const express = require('express')
const expenseController = require('../controller/expenseController')
const router = express.Router()

router.post('/expenses', expenseController.expenses)
router.get('/expenses', expenseController.getExpenses)
module.exports = router
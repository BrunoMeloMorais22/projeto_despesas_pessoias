const express = require('express')
const expenseController = require('../controller/expenseController')
const router = express.Router()

router.post('/expenses', expenseController.expenses)
router.get('/expenses', expenseController.getExpenses)
router.delete('/expenses/:id', expenseController.deleteExpense)
router.put('/expenses/:id', expenseController.updateExpenses)
router.get('/expenses/:id', expenseController.findById)
module.exports = router
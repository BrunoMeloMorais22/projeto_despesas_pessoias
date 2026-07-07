const express = require('express')
const expenseController = require('../controller/expenseController')
const authMiddleware = require('../middleware/auth')
const router = express.Router()

router.post('/expenses', authMiddleware, expenseController.expenses)
router.get('/expenses', authMiddleware, expenseController.getExpenses)
router.delete('/expenses/:id', authMiddleware, expenseController.deleteExpense)
router.put('/expenses/:id', authMiddleware, expenseController.updateExpenses)
router.get('/expenses/:id', authMiddleware, expenseController.findById)
module.exports = router
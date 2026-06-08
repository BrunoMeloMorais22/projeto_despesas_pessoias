const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()

router.post('/expenses', userController.expenses)
router.get('/expenses', userController.getExpenses)
module.exports = router
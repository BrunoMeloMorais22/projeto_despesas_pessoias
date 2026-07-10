const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()
const rateLimiter = require('../middleware/rateLimiter')
const auth = require('../middleware/auth')


router.post('/register', userController.register)
router.post('/login', rateLimiter, userController.login)
router.get('/perfil', auth, userController.perfil)

module.exports = router
const express = require('express')

const lRControllers = require('../controllers/loginRegister')

const router = express.Router()

router.post('/register', lRControllers.register)

router.post('/login', lRControllers.login)

// router.get('/register', )


module.exports = router
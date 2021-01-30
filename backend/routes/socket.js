const express = require('express')

const socketControllers = require('../controllers/socket')

const router = express.Router()

router.get('/', socketControllers.index)


module.exports = router
const express = require('express')

const userControllers = require('../controllers/users')

const router = express.Router()

router.get('/:userId', userControllers.findUser)

router.post('/addFriend/:userId', userControllers.addFriend)

router.post('/acceptFriend/:userId', userControllers.acceptFriend)

router.get('/getFriends/:userId', userControllers.getFriends)

module.exports = router

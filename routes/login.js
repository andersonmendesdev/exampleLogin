const express = require('express')
const router = express.Router()
const controllerLogin = require('../controllers/login')
const connection = require('../database/database')


router.get('/login', controllerLogin.login)
router.post('/login', controllerLogin.authenticateUser.bind(null, connection))
router.get('/createUser', controllerLogin.FormUser)
router.post('/createUser', controllerLogin.createUser.bind(null, connection))
router.get('/logout', controllerLogin.logoutUser)


module.exports = app => app.use('/', router)
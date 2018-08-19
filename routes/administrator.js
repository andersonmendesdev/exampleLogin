const express = require('express')
const router = express.Router()



router.get('/index', (req, res) => res.render('administrator/index'))



module.exports = app => app.use('/administrator', router)
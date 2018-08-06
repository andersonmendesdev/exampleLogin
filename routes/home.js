const express = require('express')
const router = express.Router()


//middleware checagem de usuario na sessao.
router.use((req, res, next) => {
    if('user' in req.session){
        return next()
    }
    res.redirect('/login')
})
//middleware add user in locals home
router.use((req,res, next) =>{
    if('user' in req.session){
        res.locals.user = req.session.user    
    }
    next()

})
router.get('/', (req, res) => res.render('home'))


module.exports = app => app.use('/', router)
const User = require('../models/user')
const login = (req, res) => {
    if(req.session.user){
        return res.redirect('/')
    }
    res.render('login/login',{error: false})
}

const FormUser = (req, res) => {
    res.render('login/create')
}

const createUser =  async (connection, req, res) => {
    await User.createUser(connection, req.body)
    res.redirect('/login')
}
const authenticateUser = async (connection,  req, res) => {
    
    const user = await User.findUser(connection, req.body.username)
    if(!user){
        return res.render('login/login',{error: true})
    }
    user.password = undefined
    req.session.user = user
    res.redirect('/')
}
const logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
}

module.exports = {
    login, FormUser, createUser, authenticateUser, logoutUser
}
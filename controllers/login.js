const User = require('../models/user')
const bcrypt = require('bcrypt')

//generator bcrypt salt and hash
const hashpass = (password) =>{
    return new Promise((resolve, reject) =>{
        bcrypt.genSalt((err, salt) =>{
            if(err){
                reject(err)
            }else{
                bcrypt.hash(password, salt,(err, hash)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(hash)
                    }
                })
            }
        })
    })
}



const login = (req, res) => {
    if(req.session.user){
        return res.redirect('/')
    }
    res.render('login/login',{error: false})
}

const FormUser = (req, res) => {
    res.render('login/create')
}
//bcrypt save hash
const createUser =  async (connection, req, res) => {
    req.body.password = await hashpass(req.body.password)
    await User.createUser(connection, req.body)
    res.redirect('/login')
}
//bcrypt compare hash
const authenticateUser = async (connection,  req, res) => {
    
    const user = await User.findUser(connection, req.body.username)
    if(!user){
        return res.render('login/login',{error: true})
    }
    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.render('login/login', {error: true})
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
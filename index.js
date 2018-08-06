const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const session = require('express-session')
const http = require('http').Server(app)

//view engine and folder views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//session
app.use(session({ 
    secret: 'andersonmendesdev',
    resave: false,
    saveUninitialized: true 
}))

//bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

//folder public
app.use(express.static('public'))

//routes
require('./routes/login')(app)
require('./routes/home')(app)


http.listen(port, () => console.log('Running in port '+port))









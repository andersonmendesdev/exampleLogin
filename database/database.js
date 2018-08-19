const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: '9240',
    database: 'myapp'
})

connection.connect((err) =>{
    if(err){
        console.log(err)
    }
    console.log('database on')
    
})
connection.query(`CREATE TABLE IF NOT EXISTS user (userId INT(11) NOT NULL AUTO_INCREMENT, username VARCHAR(50) DEFAULT NULL, password VARCHAR(60) DEFAULT NULL, role VARCHAR(60) DEFAULT NULL, PRIMARY KEY (userId))`, (err ,result) =>{
    if(err){
        console.log(err)
    }
})



module.exports = connection
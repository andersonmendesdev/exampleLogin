const createUser = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO user (username, password) VALUES ('${data.username}', '${data.password}')`, (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

const findUser = (connection, username) => {
    return new Promise ((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE username = '${username}'`, (err, result) =>{
            if(err){
                reject(err)
            }else{
                //console.log(result)
                if(result.length>0){
                    resolve(result[0])
                }
                else{
                    resolve(false)
                }
            }
        })
    })
}


module.exports = {
    createUser, findUser
}

# Login com mysql

A base dados deve ser criada manualmente, e o arquivo da pasta database 
deve ser configurado de acordo com suas credenciais do mysql.
```bash
database name: myapp
```
Instalar as dependencias
```bash
yarn
```

Inicilizar servidor
```bash
yarn start
```
Para Criar um nivel de privilegios seria muito simples apenas adicionando uma role a 
cada usuario e seria necessario implementar um middleware antes de cada rota.


Ex: Criar a rota /administrador.
middleware que barre os usuarios com role diferente de administrador.

Cria se um middleware na autenticação para adicionar a role a session.
```bash
router.use((req, res, next) => {
    if(!req.session.user)){
        res.locals.user = req.session.user        
    }
    next()
})
```

Cria se um middleware antes de cada rota com privilegios
Ex: /administrador
```bash
router.use((req, res, next) => {
    if(req.session.user){
        if(req.locals.user.role.indexOf('administrador')>=0){
            return next()
        }else{
            res.redirect('/administrador')
        }       
    }
    res.redirect('/login')
})
```

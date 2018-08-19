const authenticateUser = async (connection,  req, res) => {

    const user = await User.findUser(connection, req.body.username)
    if(!user){
        return res.render('login/login',{error: true})
    }
    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.render('login/login', {error: true})
    }
    else{
  //  user.password = undefined
    req.session.user = user
    res.locals.user=user;
      const nivel = await User.findnivel(connection, req.body.username)
      if(nivel==1){
        req.session.nivel = nivel

        console.log(1);
    res.redirect(307, '/Administration/index');
      }else if(nivel==2){
        req.session.nivel = nivel

        console.log(2);
      //  res.redirect('/Users')
      }else if(nivel==3){
        req.session.nivel = nivel

        console.log(3);
      //  res.redirect('/Administration')
    }else if(nivel==4){
        req.session.nivel = nivel

        console.log(4);
      //  res.redirect('/Administration')
      }
      else if(nivel==5){
        req.session.nivel = nivel

        console.log(5);
      //  res.redirect('/Administration')
    } else {
        console.log("banned");
    }
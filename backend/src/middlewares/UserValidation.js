const UserModel = require('../model/UserModel');

const UserValidation = async (req, res, next) => {

  const { user, email, password } = req.body; //crio uma constante de desestrutura��o


  if(!user)
  return res.status(400).json({ error: 'usu�rio obrigat�rio'});
  else if(!email)
  return res.status(400).json({ error: 'e-mail obrigat�rio'});
  else if(!password)
  return res.status(400).json({ error: 'password obrigat�rio'});
  
   else {
    next();
  }
}



module.exports = UserValidation;
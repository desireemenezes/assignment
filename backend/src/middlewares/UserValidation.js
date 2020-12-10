const UserModel = require('../model/UserModel');

const UserValidation = async (req, res, next) => {

  const { user, email, password } = req.body; //crio uma constante de desestruturação


  if(!user)
  return res.status(400).json({ error: 'usuário obrigatório'});
  else if(!email)
  return res.status(400).json({ error: 'e-mail obrigatório'});
  else if(!password)
  return res.status(400).json({ error: 'password obrigatório'});
  
   else {
    next();
  }
}



module.exports = UserValidation;
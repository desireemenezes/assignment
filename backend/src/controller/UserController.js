const UserModel = require('../model/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserController {

    async create(req, res){
      const user = new UserModel(req.body);
      user.password = bcrypt.hashSync(req.body.password,10);    
        await user
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
  
    async update(req, res){
        await UserModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
  
    }
  
    async all(req, res){
         await UserModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await UserModel.findById(req.params.id)
        .then(response => {
          response ? res.status(200).json(response) : res.status(404).json({error: 'USER NÃO ENCONTRADO'})
        })
        .catch(error => {
          return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await UserModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error); 
        });
    }

    async validateUser(req, res){
        console.log(req.body);
        if (req.body && req.body.user && req.body.password){
            const username = req.body.user;
            const password = req.body.password
            UserModel.findOne({user: username}, (err, user) => {
                if(err){
                    res.status(500).send(err);
                }
                const validateTrue = bcrypt.compare(password, username.password);
                if(req.body.user && validateTrue){
                    console.log('entrou')
                    const token = jwt.sign({
                        id: req.body.id
                    }, 'teste@hotmail.com', {expiresIn: "1h"});
                    res.status(201).send({"token":token});
                }
                else{
                    res.status(401).send("Usuario ou senha invalidos");
                }
            });
        }
    }

    async validateToken(req, res) {
       // const token = req.get("x-auth-token"); postman
       const token = req.header.authorization;
        if(!token) {
            res.status(401).send("Nao tem token de acesso");
        }
        else {
            jwt.verify(token,'teste@hotmail.com',(err,userId) =>{
                if(err){
                    res.status(401).send(err);
                }
                else {
                    console.log("Usuario autorizado: "+userId);
                    next();
                }
            })
        }
    }
 
}

module.exports = new UserController();
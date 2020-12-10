const TypeModel = require('../model/TypeModel');

class TypeController {

    async create(req, res){
        const type = new TypeModel(req.body);
          await type
          .save()
          .then(response => {
              return res.status(200).json(response);
          })
          .catch(error => {
              return res.status(500).json(error);
          });
      }
  
    async update(req, res){
        await TypeModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
  
    }
  
    async all(req, res){
         await TypeModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await TypeModel.findById(req.params.id)
        .then(response => {
          response ? res.status(200).json(response) : res.status(404).json({error: 'TIPO NÃO ENCONTRADO'})
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
}

module.exports = new TypeController();
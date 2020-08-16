const TaskModel = require('../model/TaskModel');

const { 
    startOfDay, 
    endOfDay, 
    startOfWeek, 
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear
   } = require('date-fns'); // começo do dia  e final do dia // começo da semana final da semana

const current =  new Date(); // devolve dia e hora atual

class TaskController {

    async create(req, res){
      const task = new TaskModel(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
  
    async update(req, res){
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
  
    }
  
    async all(req, res){
         await TaskModel.find({'macaddress': {'$in': req.body.macaddress}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await TaskModel.findById(req.params.id)
        .then(response => {
          response ? res.status(200).json(response) : res.status(404).json({error: 'tarefa não encontrada'})
        })
        .catch(error => {
          return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await TaskModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async done(req, res){
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'done': req.params.done},
            {new: true})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async late(req, res){
        await TaskModel.find({
            'when': {'$lt': current}, // last then '$lt' menor do que 
            'macaddress': {'$in': req.body.macaddress}
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async today(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.body.macaddress},
            'when': {'$gte': startOfDay(current), '$lt' : endOfDay(current)}, // '$gte' maior ou igual
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async week(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.body.macaddress},
            'when': {'$gte': startOfWeek(current), '$lt' : endOfWeek(current)}, // '$gte' maior ou igual
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async month(req, res){
        await TaskModel
            .find({ 
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}
            })
            .sort('when')
            .then(response => {
            return res.status(200).json(response);
            })
            .catch(error => {
            return res.status(500).json(error);
            });
      }
    
      async year(req, res){
        await TaskModel
            .find({ 
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)}
            })
            .sort('when')
            .then(response => {
            return res.status(200).json(response);
            })
            .catch(error => {
            return res.status(500).json(error);
            });
      }
}

module.exports = new TaskController();
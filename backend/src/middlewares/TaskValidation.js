const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

  const { macaddress, type, title, description, when } = req.body; //destruturação do que vai chegar no corpo da requisição

  if(!macaddress)
  return res.status(400).json({ error: 'macaddress é obrigatório'});
  else if(!type)
  return res.status(400).json({ error: 'tipo é obrigatório'});
  else if(!title)
  return res.status(400).json({ error: 'título é obrigatório'});
  else if(!description)
  return res.status(400).json({ error: 'Descrição é obrigatória'});
  else if(!when)
  return res.status(400).json({ error: 'Data e Hora são obrigatórios'});
  
  else {  // depois de validar os campos
    let exists; // crio variavel

    if(req.params.id){
      exists = await TaskModel.
                findOne(
                  { '_id': { '$ne': req.params.id },
                    'when': {'$eq': new Date(when) },  
                    'macaddress': {'$in': macaddress} // está contido $in
                  });
    }else {
      if(isPast(new Date(when))) // verifica se já tem uma tarefa cadastrada neste dia e horário
        return res.status(400).json({ error: 'escolha uma data e hora futura'});
      exists = await TaskModel.
        findOne(
          { 
            'when': {'$eq': new Date(when)},  
            'macaddress': {'$in': macaddress}
          });
    }
    
    if(exists){ // se existir tarefa no mesmo dia e horário
      return res.status(400).json({ error: 'já existe uma tarefa nesse dia e horário'});
    }

    next();
  }

}

module.exports = TaskValidation;
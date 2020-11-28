const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

  const { macaddress, type, title, description, when } = req.body;

  if(!macaddress)
  return res.status(400).json({ error: 'macaddress � obrigat�rio'});
  else if(!type)
  return res.status(400).json({ error: 'tipo � obrigat�rio'});
  else if(!title)
  return res.status(400).json({ error: 't�tulo � obrigat�rio'});
  else if(!description)
  return res.status(400).json({ error: 'Descri��o � obrigat�ria'});
  else if(!when)
  return res.status(400).json({ error: 'Data e Hora s�o obrigat�rios'});
  
  else{
    let exists;

    if(req.params.id){
      exists = await TaskModel.
                    findOne(
                      { '_id': { '$ne': req.params.id },
                        'when': {'$eq': new Date(when) },  
                        'macaddress': {'$in': macaddress}
                      });
    }else{
      if(isPast(new Date(when)))
        return res.status(400).json({ error: 'escolha uma data e hora futura'});
      exists = await TaskModel.
        findOne(
          { 
            'when': {'$eq': new Date(when)},  
            'macaddress': {'$in': macaddress}
          });
    }
    
    if(exists){
      return res.status(400).json({ error: 'j� existe uma tarefa nesse dia e hor�rio'});
    }

    next();
  }

}

module.exports = TaskValidation;
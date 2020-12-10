const express = require('express');
const router = express.Router();

const TypeController = require('../controller/TypeController');

router.post('/',  TypeController.create);
router.put('/:id',  TypeController.update);
router.get('/:id', TypeController.show);
router.delete('/:id', TypeController.delete);
router.get('/filter/all/',  TypeController.all);




module.exports = router;    
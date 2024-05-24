const express = require('express');
const router = express.Router();
const variableController = require('../controllers/variableController');

router.get('/', variableController.getAllVariables);

router.get('/:id', variableController.getVariableById);

router.post('/', variableController.createVariable);

router.put('/', variableController.updateVariable);

router.delete('/:id', variableController.deleteVariable);

module.exports = router;

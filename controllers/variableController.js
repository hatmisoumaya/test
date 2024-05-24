const VariableModel = require('../models/variableModel');
const VariableDTO = require('../dtos/variableDTO');

exports.getAllVariables = async (req, res) => {
  try {
    const variables = await VariableModel.getAllVariables();
    const variableDTOs = variables.map(variable => new VariableDTO(variable));
    res.json(variableDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getVariableById = async (req, res) => {
    const { id } = req.params;
    try {
      const variable = await VariableModel.getVariableById(id);
      if (!variable) {
        return res.status(404).json({ error: 'Variable not found' });
      }
      const variableDTO = new VariableDTO(variable)
      res.json(variableDTO);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
exports.createVariable = async (req, res) => {
    const { Key,Value,Type,DocumentId} = req.body;
    try {
      const newVariable = await VariableModel.createVariable(Key,Value,Type,DocumentId);
      const newVariableDTO = new VariableDTO(newVariable)
      res.status(201).json(newVariableDTO);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.updateVariable = async (req, res) => {
    const { VariableId,Key,Value,Type,DocumentId} = req.body;
    try {
      const updatedVariable = await VariableModel.updateVariable(VariableId,Key,Value,Type,DocumentId);
      if (!updatedVariable) {
        return res.status(404).json({ error: 'Variable not found' });
      }
      const updatedVariableDTO = new VariableDTO(updatedVariable)
      res.json(updatedVariableDTO);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.deleteVariable = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedVariable = await VariableModel.deleteVariable(id);
      if (!deletedVariable) {
        return res.status(404).json({ error: 'Variable not found' });
      }
      const deletedVariableDTO = new VariableDTO(deletedVariable)
      res.json(deletedVariableDTO);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
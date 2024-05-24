const usedTemplateModel = require('../models/usedTemplateModel');
const UsedTemplateDTO = require('../dtos/usedTemplateDTO');
exports.getAllUsedTemplates = async (req, res) => {
  try {
    const templates = await usedTemplateModel.getAllUsedTemplates();
    const templateDTOs= templates.map(template => new UsedTemplateDTO(template));
    res.json(templateDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUsedTemplateById = async (req, res) => {
  const { id } = req.params;
  try {
    const template = await usedTemplateModel.getUsedTemplateById(id);
    if (!template) {
      return res.status(404).json({ error: 'Used template not found' });
    }
    const templateDTO=new UsedTemplateDTO(template)
    res.json(templateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createUsedTemplate = async (req, res) => {
  const { UserId, SuggestedTemplateId, DocumentId } = req.body;
  try {
    const newTemplate = await usedTemplateModel.createUsedTemplate(UserId, SuggestedTemplateId, DocumentId);
    const newTemplateDTO=new UsedTemplateDTO(newTemplate)
    res.status(201).json(newTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteUsedTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTemplate = await usedTemplateModel.deleteUsedTemplate(id);
    if (!deletedTemplate) {
      return res.status(404).json({ error: 'Used template not found' });
    }
    const deletedTemplateDTO=new UsedTemplateDTO(deletedTemplate)
    res.json(deletedTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const suggestedTemplateModel = require('../models/suggestedTemplateModel');
const SuggestedTemplateDTO = require('../dtos/suggestedTemplateDTO');
exports.getAllSuggestedTemplates = async (req, res) => {
  try {
    const templates = await suggestedTemplateModel.getAllSuggestedTemplates();
    const templateDTOs = templates.map(template => new SuggestedTemplateDTO(template));
    res.json(templateDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSuggestedTemplateById = async (req, res) => {
  const { id } = req.params;
  try {
    const template = await suggestedTemplateModel.getSuggestedTemplateById(id);
    if (!template) {
      return res.status(404).json({ error: 'Suggested template not found' });
    }
    const templateDTO = new SuggestedTemplateDTO(template);
    res.json(templateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createSuggestedTemplate = async (req, res) => {
  const { Name, Content, Description, ScreenShot, CategoryId} = req.body;
  try {
    const newTemplate = await suggestedTemplateModel.createSuggestedTemplate( Name, Content, Description, ScreenShot, CategoryId);
    const newTemplateDTO = new SuggestedTemplateDTO(newTemplate);
    res.status(201).json(newTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateSuggestedTemplate = async (req, res) => {

  const {SuggestedTemplateId, Name, Content, Description, ScreenShot, CategoryId } = req.body;
  try {
    const updatedTemplate = await suggestedTemplateModel.updateSuggestedTemplate(SuggestedTemplateId, Name, Content, Description, ScreenShot, CategoryId);
    if (!updatedTemplate) {
      return res.status(404).json({ error: 'Suggested template not found' });
    }
    const newTemplateDTO = new SuggestedTemplateDTO(updatedTemplate);
    res.json(newTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSuggestedTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTemplate = await suggestedTemplateModel.deleteSuggestedTemplate(id);
    if (!deletedTemplate) {
      return res.status(404).json({ error: 'Suggested template not found' });
    }
    const deletedTemplateDTO = new SuggestedTemplateDTO(deletedTemplate);
    res.json(deletedTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

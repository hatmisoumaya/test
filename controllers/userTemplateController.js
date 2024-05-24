const userTemplateModel = require('../models/userTemplateModel');
const UserTemplateDTO = require('../dtos/userTemplateDTO');
exports.getAllUserTemplates = async (req, res) => {
  try {
    const templates = await userTemplateModel.getAllUserTemplates();
    const templateDTOs = templates.map(template => new UserTemplateDTO(template));
    res.json(templateDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserTemplateById = async (req, res) => {
  const { id } = req.params;
  try {
    const template = await userTemplateModel.getUserTemplateById(id);
    if (!template) {
      return res.status(404).json({ error: 'User template not found' });
    }
    const templateDTO = new UserTemplateDTO(template);
    res.json(templateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createUserTemplate = async (req, res) => {
  const { Name, Description, Content, ScreenShot, CategoryId, UserId } = req.body;
  try {
    const newTemplate = await userTemplateModel.createUserTemplate(Name, Description, Content, ScreenShot, CategoryId, UserId);
    const newTemplateDTO = new UserTemplateDTO(newTemplate);
    res.status(201).json(newTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateUserTemplate = async (req, res) => {
  
  const { UserTemplateId,Name, Description, Content, ScreenShot, CategoryId, UserId} = req.body;
  try {
    const updatedTemplate = await userTemplateModel.updateUserTemplate(UserTemplateId,Name, Description, Content, ScreenShot, CategoryId, UserId);
    if (!updatedTemplate) {
      return res.status(404).json({ error: 'User template not found' });
    }
    const updatedTemplateDTO = new UserTemplateDTO(updatedTemplate);
    res.json(updatedTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteUserTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTemplate = await userTemplateModel.deleteUserTemplate(id);
    if (!deletedTemplate) {
      return res.status(404).json({ error: 'User template not found' });
    }
    const deletedTemplateDTO = new UserTemplateDTO(deletedTemplate);
    res.json(deletedTemplateDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

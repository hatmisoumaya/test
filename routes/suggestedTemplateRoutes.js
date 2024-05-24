const express = require('express');
const router = express.Router();
const suggestedTemplateController = require('../controllers/suggestedTemplateController');

router.get('/', suggestedTemplateController.getAllSuggestedTemplates);
router.get('/:id', suggestedTemplateController.getSuggestedTemplateById);
router.post('/', suggestedTemplateController.createSuggestedTemplate);
router.put('/', suggestedTemplateController.updateSuggestedTemplate);
router.delete('/:id', suggestedTemplateController.deleteSuggestedTemplate);

module.exports = router;

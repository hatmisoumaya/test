const express = require('express');
const router = express.Router();
const usedTemplateController = require('../controllers/usedTemplateController');

router.get('/', usedTemplateController.getAllUsedTemplates);
router.get('/:id', usedTemplateController.getUsedTemplateById);
router.post('/', usedTemplateController.createUsedTemplate);
router.delete('/:id', usedTemplateController.deleteUsedTemplate);

module.exports = router;

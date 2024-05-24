const express = require('express');
const router = express.Router();
const userTemplateController = require('../controllers/userTemplateController');

router.get('/', userTemplateController.getAllUserTemplates);
router.get('/:id', userTemplateController.getUserTemplateById);
router.post('/', userTemplateController.createUserTemplate);
router.put('/', userTemplateController.updateUserTemplate);
router.delete('/:id', userTemplateController.deleteUserTemplate);

module.exports = router;

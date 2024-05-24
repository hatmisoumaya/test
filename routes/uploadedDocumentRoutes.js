const express = require('express');
const router = express.Router();
const uploadedDocumentController = require('../controllers/uploadedDocumentController');

router.get('/', uploadedDocumentController.getAllUploadedDocuments);
router.get('/:id', uploadedDocumentController.getUploadedDocumentById);
router.post('/', uploadedDocumentController.createUploadedDocument);
router.delete('/:id', uploadedDocumentController.deleteUploadedDocument);

module.exports = router;

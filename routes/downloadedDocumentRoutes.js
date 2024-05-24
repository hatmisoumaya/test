const express = require('express');
const router = express.Router();
const downloadedDocumentController = require('../controllers/downloadedDocumentController');

router.get('/', downloadedDocumentController.getAllDownloadedDocuments);
router.get('/:id', downloadedDocumentController.getDownloadedDocumentById);
router.post('/', downloadedDocumentController.createDownloadedDocument);
router.delete('/:id', downloadedDocumentController.deleteDownloadedDocument);

module.exports = router;

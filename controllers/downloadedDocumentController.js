const DownloadedDocumentDTO = require('../dtos/downloadedDocumentDTO');
const downloadedDocumentModel = require('../models/downloadedDocumentModel');

exports.getAllDownloadedDocuments = async (req, res) => {
  try {
    const documents = await downloadedDocumentModel.getAllDownloadedDocuments();
    const documentDTOs = documents.map(doc => new DownloadedDocumentDTO(doc));
    res.json(documentDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getDownloadedDocumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await downloadedDocumentModel.getDownloadedDocumentById(id);
    if (!document) {
      return res.status(404).json({ error: 'Downloaded document not found' });
    }
    const documentDTO = new DownloadedDocumentDTO(document);
    res.json(documentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createDownloadedDocument = async (req, res) => {
  const {Name, UserId, DocumentId, CategoryId } = req.body;
  try {
    const newDocument = await downloadedDocumentModel.createDownloadedDocument(Name, UserId, DocumentId, CategoryId);
    const newDocumentDTO = new DownloadedDocumentDTO(newDocument);
    res.status(201).json(newDocumentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err +  'Internal server error' });
  }
};

exports.deleteDownloadedDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDocument = await downloadedDocumentModel.deleteDownloadedDocument(id);
    if (!deletedDocument) {
      return res.status(404).json({ error: 'Downloaded document not found' });
    }
    const deletedDocumentDTO = new DownloadedDocumentDTO(deletedDocument);
    res.json(deletedDocumentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

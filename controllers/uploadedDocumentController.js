const uploadedDocumentModel = require('../models/uploadedDocumentModel');
const UploadedDocumentDTO=require('../dtos/uploadedDocumentDTO');

exports.getAllUploadedDocuments = async (req, res) => {
  try {
    const documents = await uploadedDocumentModel.getAllUploadedDocuments();
    const documentDTOs=documents.map(document => new UploadedDocumentDTO(document));

    res.json(documentDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUploadedDocumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await uploadedDocumentModel.getUploadedDocumentById(id);
    if (!document) {
      return res.status(404).json({ error: 'Uploaded document not found' });
    }
    const documentDTO=new UploadedDocumentDTO(document);
    res.json(documentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createUploadedDocument = async (req, res) => {
  const { UserId, DocumentId, Name, FileSize, FileType } = req.body;
  try {
    const newDocument = await uploadedDocumentModel.createUploadedDocument( UserId, DocumentId, Name, FileSize, FileType);
    const newDocumentDTO=new UploadedDocumentDTO(newDocument);
    res.status(201).json(newDocumentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteUploadedDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDocument = await uploadedDocumentModel.deleteUploadedDocument(id);
    if (!deletedDocument) {
      return res.status(404).json({ error: 'Uploaded document not found' });
    }
    const deletedDocumentDTO=new UploadedDocumentDTO(deletedDocument);
    res.json(deletedDocumentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

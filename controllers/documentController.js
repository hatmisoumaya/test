const DocumentModel = require('../models/documentModel');
const DocumentDTO=require('../dtos/documentDTO');

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await DocumentModel.getAllDocuments();
    const documentDTOs=documents.map(document => new DocumentDTO(document));
    res.json(documentDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getDocumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await DocumentModel.getDocumentById(id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    const documentDTO=new DocumentDTO(document)
    res.json(documentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createDocument = async (req, res) => {
  const { Name, Content, ScreenShot, CategoryId, UserId , Documenttate} = req.body;
  try {
    const newDocument = await DocumentModel.createDocument(  Name, Content, ScreenShot, CategoryId, UserId , Documenttate);
    const newDocumentDTO=new DocumentDTO(newDocument)

    res.status(201).json(newDocumentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateDocument = async (req, res) => {
 
  const { DocumentId, Name, Content, ScreenShot, CategoryId, UserId , Documenttate} = req.body;
  try {
    const updatedDocument = await DocumentModel.updateDocument( DocumentId, Name, Content, ScreenShot, CategoryId, UserId , Documenttate);
    if (!updatedDocument) {
      return res.status(404).json({ error: 'Document not found' });
    }
    const updatedDocumentDTO=new DocumentDTO(updatedDocument)
    res.json(updatedDocumentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDocument = await DocumentModel.deleteDocument(id);
    if (!deletedDocument) {
      return res.status(404).json({ error: 'Document not found' });
    }
    const deletedDocumentDTO=new DocumentDTO(deletedDocument)
    res.json(deletedDocumentDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

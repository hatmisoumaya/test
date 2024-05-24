const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const categoryRoutes = require('./routes/categoryRoutes');
const documentRoutes = require('./routes/documentRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
const variableRoutes = require('./routes/variableRoutes');
const suggestedTemplateRoutes = require('./routes/suggestedTemplateRoutes');
const userTemplateRoutes = require('./routes/userTemplateRoutes');
const usedTemplateRoutes = require('./routes/usedTemplateRoutes');
const uploadedDocumentRoutes = require('./routes/uploadedDocumentRoutes');
const downloadedDocumentRoutes = require('./routes/downloadedDocumentRoutes');


app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50, 
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use(limiter);

app.use(express.json());
app.use('/api/userS', userRoutes);
app.use('/api/categorieS', categoryRoutes);
app.use('/api/documentS', documentRoutes);
app.use('/api/favoriteS',favoriteRoutes);
app.use('/api/variableS',variableRoutes);
app.use('/api/suggested_templateS', suggestedTemplateRoutes);
app.use('/api/user_templateS', userTemplateRoutes);
app.use('/api/used_templateS', usedTemplateRoutes);
app.use('/api/uploaded_documentS', uploadedDocumentRoutes);
app.use('/api/downloaded_documentS', downloadedDocumentRoutes);
app.use(errorHandler);
module.exports = app;

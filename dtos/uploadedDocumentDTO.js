class UploadedDocumentDTO {
    constructor({ upload_id, user_id, document_id, name, file_size, file_type, upload_date }) {
      this.UploadId = upload_id;
      this.UserId = user_id;
      this.DocumentId = document_id;
      this.Name = name;
      this.FileSize = file_size;
      this.FileType = file_type;
      this.UploadDate = upload_date;
    }
  }
  
  module.exports = UploadedDocumentDTO;
  
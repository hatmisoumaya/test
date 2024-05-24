

class DownloadedDocumentDTO {
    constructor({ download_id, name, user_id, document_id, download_date, category_id }) {
      this.DownloadId = download_id;
      this.Name = name;
      this.UserId = user_id;
      this.DocumentId = document_id;
      this.DownloadDate = download_date;
      this.CategoryId = category_id;
    }
  }
  
  module.exports = DownloadedDocumentDTO;
  

class DocumentDTO {
    constructor({ document_id,name, content, creation_date,modificaton_date, screen_shot, category_id, user_id , document_state}) {
      this.DocumentId = document_id;
      this.Name = name;
      this.Content = content;
      this.CreationDate = creation_date;
      this.ModificatonDate = modificaton_date;
      this.ScreenShot = screen_shot;
      this.CategoryId = category_id;
      this.UserId = user_id;
      this.Documenttate = document_state;
    }
  }
  
  module.exports = DocumentDTO;
  
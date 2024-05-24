// dtos/suggestedTemplateDTO.js

class SuggestedTemplateDTO {
    constructor({ suggested_template_id, name, content, description, creation_date, modification_date, screen_shot, category_id }) {
      this.SuggestedTemplateId = suggested_template_id;
      this.Name = name;
      this.Content = content;
      this.Description = description;
      this.CreationDate = creation_date;
      this.ModificationDate = modification_date;
      this.ScreenShot = screen_shot;
      this.CategoryId = category_id;
    }
  }
  
  module.exports = SuggestedTemplateDTO;
  
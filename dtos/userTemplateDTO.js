

class UserTemplateDTO {
    constructor({ user_template_id, name, description, creation_date, modification_date, content, screen_shot, category_id, user_id }) {
      this.UserTemplateId = user_template_id;
      this.Name = name;
      this.Description = description;
      this.CreationDate = creation_date;
      this.ModificationDate = modification_date;
      this.Content = content;
      this.ScreenShot = screen_shot;
      this.CategoryId = category_id;
      this.UserId = user_id;
    }
  }
  
  module.exports = UserTemplateDTO;
  
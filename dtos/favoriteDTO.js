class FavoriteDTO {
    constructor({ favorite_id,document_id, user_id}) {
      this.FavoriteId = favorite_id;
      this.DocumentId = document_id;
      this.UserId = user_id;
    }
  }
  
  module.exports = FavoriteDTO;
  
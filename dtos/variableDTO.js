
class VariableDTO {
    constructor({variable_id,key,value,type,creation_date,document_id}) {
      this.VariableId = variable_id;
      this.Key = key;
      this.Value = value;
      this.Type = type;
      this.Creation_date = creation_date;
      this.DocumentId = document_id;

    }
  }
  
  module.exports = VariableDTO;
  
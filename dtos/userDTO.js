
class UserDTO {
    constructor({ user_id,username, email, password, phone_number, address}) {
      this.UserId = user_id;
      this.UserName = username;
      this.Email = email;
      this.Password = password;
      this.PhoneNumber = phone_number;
      this.Address = address;
    }
  }
  
  module.exports = UserDTO;
  
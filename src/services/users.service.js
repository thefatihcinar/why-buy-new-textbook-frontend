
/* This class is responsible for all the user related operations
  such as login, register, get user profile, update user profile, etc.
*/
class UsersService {
  static async getUserProfile() {
    // Provide token.
    // GET {{ API_URL }}/users/profile
  }

  static async updateUserProfile(updatedUser) {
    // Provide token.
    // PUT {{ API_URL }}/users/profile
  }

  static async loginUser(email, password) {
    // No token needed.
    // POST {{ API_URL }}/users/login
  }

  static async registerUser(newUser) {
    // No token needed.
    // POST {{ API_URL }}/users/
  }
  
}

export default UsersService;
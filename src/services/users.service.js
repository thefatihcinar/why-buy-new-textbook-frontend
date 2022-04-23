import { UserBroker } from "../agents";

/* This class is responsible for all the user related operations
  such as login, register, get user profile, update user profile, etc.
*/
class UsersService {

  async getUserProfile() {
    /* this service is responsible for getting the user profile data from the server */
    const user = await UserBroker.get("/profile", {});
    // TO-DO: What if the user is not logged in?
    return user;
  }

  async updateUserProfile(updatedUser) {
    /* this service is responsible for updating the user profile data on the server */
    const justUpdatedUser = await UserBroker.put("/profile", updatedUser, {});
    // TO-DO: What if the user is not logged in?
    return justUpdatedUser;
  }

  async loginUser(email, password) {
    // No token needed.
    // POST {{ API_URL }}/users/login
    /* this service is responsible for logging in the user */
    const loginParameters = {
      email,
      password
    };
    const loginResponse = await UserBroker.post("/login", loginParameters, {});

    return loginResponse;
  }

  async registerUser(newUser) {
    /* this service is responsible for registering a new user */
    const createdUser = await UserBroker.post("/", newUser, {});
    return createdUser;
  }
}

export default new UsersService();

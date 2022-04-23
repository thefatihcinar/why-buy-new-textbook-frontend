import { FormsBroker } from "../agents";

/*
  This class is responsible for fetching all the data
  about forms that are going to be used in this application.
*/
class FormsService {

  async getCreatePostFormData() {
    /* this service is responsible for getting the form data when creating
    a new post */

    const createPostFormData = await FormsBroker.get("/create-post", {});
    return createPostFormData;
  }

  async getRegisterFormData(){
    /* this service is responsible for getting the form data
      when registering a new user */

    const registerFormData = await FormsBroker.get("/register", {});
    return registerFormData;
  }

  async getUpdatePostFormData(){
    /* this service is responsible for getting the form data when updating
    a post */
    const updatePostFormData = await FormsBroker.get("/update-post", {});
    return updatePostFormData;
  }

  async getSearchPageData(){
    /* this service is responsible for getting the form data
      when searching for posts */
    const searchPageData = await FormsBroker.get("/search", {});
    return searchPageData;
  }

}

export default new FormsService();

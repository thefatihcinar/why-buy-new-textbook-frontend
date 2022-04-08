/* 
  This class is responsible for fetching all the data
  about forms that are going to be used in this application.
*/
class FormsService {

  static async getCreatePostFormData() {
    // Provide token.
    // GET {{ API_URL }}/forms/create-post
  }

  static async getRegisterFormData(){
    // No token needed.
    // GET {{ API_URL }}/forms/register
  }

  static async getUpdatePostFormData(){
    // Provide token.
    // GET {{ API_URL }}/forms/update-post
  }
  
}

export default FormsService;
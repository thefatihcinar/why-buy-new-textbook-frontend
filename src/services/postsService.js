
/*
  The Posts Service class will be responsible for all the post related stuff.
  Post creation, Post update, Post Fetching, Post deletion, etc.
*/  
class PostsService {

  static async getRecommendedPosts(){}
  
  static async getSpecificPost(postID) {
    /* this service will fetch a post with a given id from the api */
    //const response = await fetch(`${process.env.MAIN_API_URL}/posts/${id}`);
    const response = {
      "title": "Matematik Calculus Üniversite İngilizce Kitabı Thomas' Calculus",
      "author": "Thomas Calculus",
      "price": 200,
      "isShippable": true,
      "isAvailableForFacetoFaceSelling": true,
      "mainImage": "https://i0.shbdn.com/photos/03/75/09/x5_1010037509vp0.jpg",
      "description": "Üniversite İngilizce Calculus Matematik Kitabı. Mühendislik bölümlerine uygun. Yırtık veya aşınma yoktur. Temiz kullanılmıştır. Thomas Calculus, 13th Edition in SI Units, 2016 basım.",
      "type": "Ders Kitabı",
      "condition": "Temiz, Az Kullanılmış",
      "images": [
        "https://i0.shbdn.com/photos/03/75/09/x5_1010037509vp0.jpg",
        "https://i0.shbdn.com/photos/03/75/09/x5_10100375092bn.jpg"
      ]
    };
    return response;
  }

  static async createNewPost(post) {}

  static async updatePost(post) {}

  static async deletePost(id) {}

  static async starPost(postID){}

  static async markPostAsSold(postID){}

}

export default PostsService;
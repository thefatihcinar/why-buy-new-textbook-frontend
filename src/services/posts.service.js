import { PostsBroker } from "../agents";

/*
  The Posts Service class will be responsible for all the post related stuff.
  Posts creation, Posts update, Posts Fetching, Posts deletion, etc.
*/
class PostsService {

    async getRecommendedPosts() {
        /* this service is responsible for getting recommended posts */
        const recommendedPosts = await PostsBroker.get("/", {});
        return recommendedPosts;
    }
    async getRecommendedPostsForBanner() {
        /* this service is responsible for getting recommended posts for banner */
        const recommendedPosts = await PostsBroker.get("", { params: { place: "banner" } });
        return recommendedPosts;
    }

    async getSpecificPost(postID) {
        /* this service will fetch a post with a given id from server */
        const thePost = await PostsBroker.get(`/${postID}`, {});
        return thePost;
    }

    async createNewPost(post) {
        /* this service creates a new post */
        // TO-DO: Make validations.
        const newPost = await PostsBroker.post("/", post, {});
        return newPost;
    }

    async updatePost(postID, post) {
        /* this services updates the post with a given id */
        // TO-DO: Make validations.
        const updatedPost = await PostsBroker.put(`/${postID}`, post, {});
        return updatedPost;
    }

    async deletePost(postID) {
        /* this service deletes the post with a given id */
        const deletedPost = await PostsBroker.delete(`/${postID}`, {});
        if(deletedPost) return true;
        else return false;
    }

    async starPost(postID) {
        /* this service stars the post with a given id */
        /* the user is known by the user since the token is sent in the request */
        const starredPost = await PostsBroker.put(`/${postID}/star`, {}, {});
        if(starredPost) return true;
        else return false;
    }

    async markPostAsSold(postID) {
        /* this service marks the post with the given id as sold */
        const soldPost = await PostsBroker.put(`/${postID}/sold`, {}, {});
        if(soldPost) return true;
        else return false;
    }

    async searchForPosts(searchParams) {
        /* this service searches for posts with a given query */
        const searchResult = await PostsBroker.get("/search", { params: searchParams });
        return searchResult;
    }
}

export default new PostsService();

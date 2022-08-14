import axios from "axios";
import PostModel from "../Models/PostModel";
import { authStore } from "../Redux/AuthState";
import { addPostAction, deletePostAction, fetchAllPostsAction, postsStore, updatePostAction } from "../Redux/PostsState";
import appConfig from "../Utils/Config";

class PostService{
    public async getAllForAdmin(): Promise<PostModel[]>{
        if(authStore.getState().token !=null){
            if(postsStore.getState().posts.length === 0){
                const response = await axios.get<PostModel[]>(appConfig.postsUrl);
                const posts = response.data;
                postsStore.dispatch(fetchAllPostsAction(posts));
                return posts;
            }else{
                return postsStore.getState().posts;
            }
    }
        return null;
    }

    public async getAll(): Promise<PostModel[]>{
        if(postsStore.getState().posts.length === 0){
            const response = await axios.get<PostModel[]>(appConfig.postsUrl);
            const posts = response.data;
            postsStore.dispatch(fetchAllPostsAction(posts));
            return posts;
        }

        return postsStore.getState().posts;
    }

    public async getByCatergoryBycategory(categoryId: number): Promise<PostModel[]>{
        return postsStore.getState().posts.filter(p=>p.categoryId === categoryId);
    }


    public async get(id: number): Promise<PostModel> {
        return postsStore.getState().posts.find(p=>p.id === id);
    }

    public async add(pst: PostModel): Promise<void>{
        const response = await axios.post<PostModel>(appConfig.adminPostUrl,pst);
        const addedPst= response.data;

        postsStore.dispatch(addPostAction(addedPst));
    }

    public async update(pst: PostModel): Promise<void>{

        const response = await axios.put<PostModel>(appConfig.adminPostUrl,pst);
        const updatedPst= response.data;

        postsStore.dispatch(updatePostAction(updatedPst));
    }

    public async delete(id: number): Promise<void>{
        await axios.delete<PostModel>(appConfig.adminPostUrl + id);
        
        postsStore.dispatch(deletePostAction(id));
    }
}

const postService = new PostService();

export default postService;
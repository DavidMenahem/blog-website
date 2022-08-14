import axios from "axios";
import CommentsModel from "../Models/CommentsModel";
import { addCommentAction, deleteCommentAction, postsStore } from "../Redux/PostsState";
import appConfig from "../Utils/Config";

class CommentsService{

    public async addComment(comment: CommentsModel) : Promise<void>{
        const response = await axios.post<CommentsModel>(appConfig.commentsUrl,comment);
        const addedComment = response.data;
        postsStore.dispatch(addCommentAction(addedComment));
    }

    public async deleteComment(id: number[]): Promise<void>{
        await axios.delete<void>(appConfig.adminCommentsUrl + id[1]);
        postsStore.dispatch(deleteCommentAction(id));
    }
}
const commentsService = new CommentsService();

export default commentsService;
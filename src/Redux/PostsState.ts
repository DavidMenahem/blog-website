import { createStore } from "redux";
import CommentsModel from "../Models/CommentsModel";
import PostModel from "../Models/PostModel";

export class postsState{
    public posts: PostModel[] = [];
}

export enum PostsActionType{
    FetchAllPosts,
    AddPost,
    UpdatePost,
    DeletePost,
    AddComment,
    DeleteComment
}

export interface PostsAction{
    type: PostsActionType;
    payload: any;
}

export function fetchAllPostsAction(posts: PostModel[]): PostsAction{
    return{type: PostsActionType.FetchAllPosts,payload: posts}
}

export function addPostAction(post: PostModel): PostsAction{
    return{type: PostsActionType.AddPost,payload: post}
}

export function updatePostAction(post: PostModel): PostsAction{
    return{type: PostsActionType.UpdatePost,payload: post}
}

export function deletePostAction(id: number): PostsAction{
    return{type: PostsActionType.DeletePost,payload: id}
}

export function addCommentAction(comment : CommentsModel): PostsAction{
    return{type:PostsActionType.AddComment,payload: comment}
}

export function deleteCommentAction(id: number[]): PostsAction{
    return{type: PostsActionType.DeleteComment,payload: id}
}


export function postsReducer(currenState = new postsState(), action: PostsAction): postsState{
    const newState = {...currenState}

    switch(action.type){
        case PostsActionType.FetchAllPosts:
            newState.posts = action.payload;
            break;
        
        case PostsActionType.AddPost:
            newState.posts.push(action.payload);
            break;
        
        case PostsActionType.UpdatePost:
            const indexToUpdate = newState.posts.findIndex(p=> p.id = action.payload.id);
            if(indexToUpdate >= 0)newState.posts[indexToUpdate] = action.payload;
            break;

        case PostsActionType.DeletePost:
            const indexToDelete = newState.posts.findIndex(p=>p.id = action.payload);
            if(indexToDelete >= 0)newState.posts.splice(indexToDelete,1);
            break;
        
        case PostsActionType.AddComment:
            const postIndexToUpdate = newState.posts.findIndex(p=> p.id = action.payload.postId);
            if(postIndexToUpdate >=0){
                newState.posts[postIndexToUpdate].comments.push(action.payload);
            }
            break;

        case PostsActionType.DeleteComment:
            const postIndexToDelete = newState.posts.findIndex(p=> p.id = action.payload[0]);
            if(postIndexToDelete >=0){
                const commentIndexToDelete = newState.posts[postIndexToDelete].comments.findIndex(c=>c.id ===action.payload[1]);

                if(commentIndexToDelete>=0){
                    newState.posts[postIndexToDelete].comments.splice(commentIndexToDelete,1);
                }
            }
            break;
    }
        return newState;
    }

export const postsStore = createStore(postsReducer);
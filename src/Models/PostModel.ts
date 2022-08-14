import CommentsModel from "./CommentsModel";
import ImageModel from "./ImageModel";

class PostModel{
    public id?: number;
    public title?: string;
    public descriptionA?: string;
    public descriptionB?: string;
    public images?: ImageModel[];
    public categoryId?: number;
    public comments:CommentsModel[];
}

export default PostModel;
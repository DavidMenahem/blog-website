import axios from "axios";
import ImageModel from "../Models/ImageModel";
import appConfig from "../Utils/Config";

class ImageService{
    public async addImage(image: ImageModel): Promise<void>{
        const formData = new FormData();
        formData.append("postId",image.postId.toString());
        formData.append("image",image.image as File);
        await axios.post<ImageModel>(appConfig.adminImageUrl,formData); 
    }
}
const imageService = new ImageService();
export default imageService;
class ImageModel{
    public id:number;
    public postId: number;
    public image?: File | FileList;
    public imageBlob?: Blob;
    
}
export default ImageModel;
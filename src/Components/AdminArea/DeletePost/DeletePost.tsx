import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postsStore } from "../../../Redux/PostsState";
import postService from "../../../Services/PostsService";
import notificationService from "../../../Services/NotificationService";
import "./DeletePost.css";


function DeletePost() : JSX.Element{



    const params = useParams();
    const id = +params.pId;

    const navigate = useNavigate();


useEffect(()=>{

        try{
            const pst = postsStore.getState().posts.find(p=>p.id === id);
            const ok = window.confirm("האם את בטוחה שאת רוצה למחוק את הפוסט? " + pst.title)
            if(ok){
                postService.delete(id)
                notificationService.success(" פוסט נמחק" + pst.title);
            }else{
                notificationService.success(" פוסט נשאר" + pst.title);
            }
            navigate("/admin");
        }catch(err: any){
            notificationService.error(err);
        }
        
},[]);
    return null;
}

export default DeletePost;

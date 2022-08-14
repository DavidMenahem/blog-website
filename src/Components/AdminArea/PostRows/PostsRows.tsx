import { NavLink } from "react-router-dom";
import PostModel from "../../../Models/PostModel";
import CommentRows from "../CommentRows/CommentRows";
import "./PostRows.css";

interface PostRowsProps{
    psts: PostModel;
}

function PostRows(props: PostRowsProps): JSX.Element {

    return (
			<><tr>
            <td>{props.psts.title}</td>
            <td>{props.psts.descriptionA.slice(0,50)}...</td>
            <td>
                <NavLink to={"/admin/delete_post/" + props.psts.id}><button>🗑</button></NavLink>
                <NavLink to={"/admin/update_post/" + props.psts.id}><button>✏️</button></NavLink>
            </td>
        </tr>


                {props.psts.comments.map(c => <CommentRows key={c.id} comment={c} />)}
        </>
    );
}

export default PostRows;

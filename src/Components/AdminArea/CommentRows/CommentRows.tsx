import { NavLink } from "react-router-dom";
import CommentsModel from "../../../Models/CommentsModel";
import "./CommentRows.css";

interface CommentRowsProps{
    comment: CommentsModel;
}
function CommentRows(props: CommentRowsProps): JSX.Element {
    return (
            <tr key={`${props.comment.id}commentId`}>
                <td>{props.comment.name}</td>
                <td>{props.comment.comment.slice(0,30)}</td>
                <td>
                    <NavLink to={`/admin/delete_comment/${props.comment.postId}/${props.comment.id}`}><button>🗑</button></NavLink>
                </td>
            </tr>
    );
}

export default CommentRows;

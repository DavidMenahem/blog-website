import CommentsModel from "../../../Models/CommentsModel";
import "./CommentCard.css";

interface CommentCardProps{
    comments: CommentsModel;
}


function CommentCard(props: CommentCardProps): JSX.Element {

    return (
        <div className="CommentCard">
            <h4>שם: {props.comments.name}</h4>
            <pre>{props.comments.comment}</pre>
        </div>
    );
}

export default CommentCard;

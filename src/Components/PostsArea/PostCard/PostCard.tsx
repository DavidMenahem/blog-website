import './PostCard.css'
import PostModel from '../../../Models/PostModel'

interface PostsCardProps {
  pst: PostModel
}

function PostCard(props: PostsCardProps): JSX.Element {
  let img = ''
  if (props.pst.images.length > 0) {
    img = 'data:image/jpeg;base64,' + props.pst.images[0].imageBlob
  }
  return (
    <div className="PostCard">
      <div>
      <div className="postTitle">{props.pst.title}</div>
      <img src={img} alt="" width="100%"></img>
      </div>
    </div>
  )
}

export default PostCard

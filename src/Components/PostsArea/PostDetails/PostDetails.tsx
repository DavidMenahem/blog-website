import CommentCard from '../../CommentArea/CommentCard/CommentCard'
import AddComment from '../../CommentArea/AddComment/AddComment'
import PostModel from '../../../Models/PostModel'
import './PostDetails.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import postService from '../../../Services/PostsService'
import notificationService from '../../../Services/NotificationService'

function PostDetails(): JSX.Element {
  const params = useParams()
  const pId = +params.pId

  const [posts, setPosts] = useState<PostModel[]>([])

  useEffect(() => {
    postService
      .getAll()
      .then((p) => setPosts(p))
      .catch((err) => notificationService.error(err))
  }, [])
  const post = posts.find((p) => p.id === pId)
  return (
    <div className="PostDetails Box">
      {post && (
        <>
          <h2>{post.title}</h2>
          <div>{post.descriptionA}</div>
          <>
            {post.images.map((image) => (
              <img width="100%"
                key={image.id}
                src={'data:image/jpeg;base64,' + image.imageBlob}
                alt=""
              ></img>
            ))}
          </>
          <div>{post.descriptionB}</div>
          <h4>תגובות:</h4>

          {post.comments.length !== 0 &&
            post.comments.map((c) => (
              <CommentCard key={`${c.id}comment`} comments={c} />
            ))}
          <AddComment key={`${post.id}}add_comment`} id={post.id} />
        </>
      )}
    </div>
  )
}

export default PostDetails

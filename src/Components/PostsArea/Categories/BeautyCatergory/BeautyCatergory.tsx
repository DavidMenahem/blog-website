import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PostModel from '../../../../Models/PostModel'
import postService from '../../../../Services/PostsService'
import notificationService from '../../../../Services/NotificationService'
import PostCard from '../../PostCard/PostCard'
import './BeautyCatergory.css'

function BeautyCatergory(): JSX.Element {
  const [posts, setPosts] = useState<PostModel[]>([])

  useEffect(() => {
    postService
      .getAll()
      .then((p) => setPosts(p))
      .catch((err) => notificationService.error(err))
  }, [])

  return (
    <div className="BeautyCatergory">
      {posts
        .filter((p) => p.categoryId === 2)
        .map((p) => (
          <NavLink key={`${p.id}link`} to={'/posts/beauty/' + p.id}>
            <PostCard key={p.id} pst={p} />
          </NavLink>
        ))}
    </div>
  )
}

export default BeautyCatergory

import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PostModel from '../../../Models/PostModel'
import postService from '../../../Services/PostsService'
import notificationService from '../../../Services/NotificationService'
import PostRows from '../PostRows/PostsRows'
import './Admin.css'

function Admin(): JSX.Element {
  const [posts, setPosts] = useState<PostModel[]>([])

  useEffect(() => {
    postService
      .getAllForAdmin()
      .then((p) => setPosts(p))
      .catch((err) => notificationService.error(err))
},[])
  return (
    <div className="Admin">
      <table border={1}>
        <thead>
          <tr>
            <th>כותרת</th>
            <th>תגובה</th>
            <th>פעולה</th>
          </tr>
        </thead>
        <tbody>
          {posts && <>{posts.map((p) => (
            <PostRows key={p.id} psts={p} />
          ))
          }</>}
          
        </tbody>
      </table>
      <NavLink to="/admin/add_post/">
        <button>✚</button>
      </NavLink>
    </div>
  )
}

export default Admin

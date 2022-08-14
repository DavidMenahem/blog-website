import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import commentsService from '../../../../Services/CommentsService'
import notificationService from '../../../../Services/NotificationService'
import './DeleteComment.css'

function DeleteComment(): JSX.Element {
  const params = useParams()
  const pId = +params.pID
  const cId = +params.cId

  const navigate = useNavigate()
  useEffect(() => {
    try {
      commentsService.deleteComment([pId, cId])
      notificationService.success('תגובה נמחקה');
      navigate("/admin");
    } catch (err) {
      notificationService.error(err)
    }
  }, [])
  return null
}

export default DeleteComment

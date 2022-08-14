import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CommentsModel from '../../../Models/CommentsModel'
import commentsService from '../../../Services/CommentsService'
import notificationService from '../../../Services/NotificationService'
import './AddComment.css'

interface AddCommentProps {
  id: number
}
function AddComment(props: AddCommentProps): JSX.Element {
  const { register, handleSubmit, formState } = useForm<CommentsModel>()

  const navigate = useNavigate()

  async function send(comment: CommentsModel) {
    try {
      await commentsService.addComment(comment)
      notificationService.success('התגובה נשמרה')
    } catch (err) {
      notificationService.error(err)
    }
  }

  return (
    <div className="AddComment">
      <form onSubmit={handleSubmit(send)}>
        <input type="hidden" value={props.id} {...register('postId')} />

        <label>שם:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          {...register('name', {
            required: { value: true, message: 'שם הוא שדה חובה' },
          })}
        />
        <span>{formState.errors?.name?.message}</span>
        <br />
        <label>תגובה:</label>
        <textarea
          {...register('comment', {
            required: { value: true, message: 'תגובה היא שדה חובה' },
          })}
        />
        <span>{formState.errors?.comment?.message}</span>

        <br />
        <button>✚</button>
      </form>
    </div>
  )
}

export default AddComment

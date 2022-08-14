import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PostModel from '../../../Models/PostModel'
import postService from '../../../Services/PostsService'
import notificationService from '../../../Services/NotificationService'
import './AddPost.css'

function AddPost(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<PostModel>()

  const navigate = useNavigate()

  async function send(pst: PostModel) {
    try {
      await postService.add(pst)
      notificationService.success('Post added')
      navigate("/admin");
    } catch (err) {
      notificationService.error(err)
    }
  }

  return (
    <div className="AddPost Box">
      <h2>הוספת פוסט:</h2>
      <form onSubmit={handleSubmit(send)}>
        <label>כותרת:</label>
        <br />
        <select {...register('categoryId')}>
          <option value="1">אופנה</option>
          <option value="2">ביוטי</option>
          <option value="3">אוכל</option>
          <option value="4">השראה</option>
        </select>
        <input
          type="text"
          {...register('title', {
            required: { value: true, message: 'כותרת הוא שדה חובה' },
          })}
        />
        <span>{formState.errors?.title?.message}</span>
        <br />
        <label>חלק ראשון של פוסט (לפני התמונה):</label>
        <br />
        <textarea
          className="textArea"
          {...register('descriptionA', {
            required: {
              value: true,
              message: 'החלק ראשון של הפוסט הוא שדה חובה',
            },
          })}
        ></textarea>
        <br />
        <span>{formState.errors?.descriptionA?.message}</span>
        <br />
        <label>חלק שני של פוסט (אחרי התמונה)</label>
        <textarea
          className="textArea"
          {...register('descriptionB', {
            required: {
              value: true,
              message: 'החלק שני של הפוסט הוא שדה חובה',
            },
          })}
        ></textarea>
        <span>{formState.errors?.descriptionB?.message}</span>
        <br />
        <button>✚</button>
      </form>
      <h4>הוסף תמונות</h4>
      <NavLink to={'/posts/images/'}>
        <button>✚</button>
      </NavLink>
    </div>
  )
}

export default AddPost

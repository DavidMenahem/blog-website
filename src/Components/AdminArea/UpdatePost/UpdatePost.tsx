import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import PostModel from '../../../Models/PostModel'
import postService from '../../../Services/PostsService'
import notificationService from '../../../Services/NotificationService'
import './UpdatePost.css'

function UpdatePost(): JSX.Element {
  const { register, handleSubmit, formState, setValue } = useForm<PostModel>()

  const params = useParams()
  const id = +params.pId
  const navigate = useNavigate();
  useEffect(() => {
    postService
      .get(id)
      .then((pst) => {
        setValue('id',pst.id);
        setValue('categoryId', pst.categoryId)
        setValue('title', pst.title)
        setValue('descriptionA', pst.descriptionA)
        setValue('descriptionB', pst.descriptionB)
      })
      .catch((err) => notificationService.error(err.message))
  }, [])

  async function send(pst: PostModel) {
    try {
      await postService.update(pst)
      notificationService.success('Post Updated');
      navigate("/admin");
    } catch (err) {
      notificationService.error(err)
    }
  }
  return (
    <div className="UpdatePost">
      <form onSubmit={handleSubmit(send)}>
        <label>כותרת:</label>
        <br />
        <input type="hidden"{...register("id")} />
        <input type="hidden" {...register('categoryId')} />
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
    </div>
  )
}

export default UpdatePost

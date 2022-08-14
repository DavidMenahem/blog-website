import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import ImageModel from '../../../Models/ImageModel'
import PostModel from '../../../Models/PostModel'
import { postsStore } from '../../../Redux/PostsState'
import imageService from '../../../Services/ImageService'
import notificationService from '../../../Services/NotificationService'
import './AddImage.css'

function AddImage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<ImageModel>()

  const [posts, setPosts] = useState<PostModel[]>([])

  async function send(image: ImageModel) {
    try {
      image.image = (image.image as FileList)[0]
      await imageService.addImage(image)
      notificationService.success('נוסף תמונה')
    } catch (err) {
      notificationService.error(err)
    }
  }
  useEffect(() => {
    setPosts(postsStore.getState().posts)
  }, [])

  return (
    <div className="AddImage">
      <form encType="multipart/form-data" onSubmit={handleSubmit(send)}>
        <label>בחרי פוסט</label>
        <select {...register('postId')}>
          {posts.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
        <br />
        <label>תמונה:</label>
        <input type="file" {...register('image')} />
        <br />
        <span>{formState.errors?.image?.message}</span>
        <button>✚</button>
      </form>
    </div>
  )
}

export default AddImage

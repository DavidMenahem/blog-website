import { Route, Routes } from 'react-router-dom'
import Admin from '../../AdminArea/Admin/Admin'
import UpdatePost from '../../AdminArea/UpdatePost/UpdatePost'
import AddPost from '../../AdminArea/AddPost/AddPost'
import DeletePost from '../../AdminArea/DeletePost/DeletePost'
import Contact from '../../Pages/Contact/Contact'
import Home from '../../Pages/Home/Home'
import PageNotFound from '../../Pages/PageNotFound/PageNotFound'

import './Routing.css'
import Register from '../../AuthArea/Register/Register'
import Login from '../../AuthArea/Login/Login'
import Logout from '../../AuthArea/Logout/Logout'
import DeleteComment from '../../AdminArea/Admin/DeleteComment/DeleteComment'
import InspireCatergory from '../../PostsArea/Categories/InspireCatergory/InspireCatergory'
import FoodCatergory from '../../PostsArea/Categories/FoodCatergory/FoodCatergory'
import BeautyCatergory from '../../PostsArea/Categories/BeautyCatergory/BeautyCatergory'
import FashionCatergory from '../../PostsArea/Categories/FashionCatergory/FashionCatergory'
import PostDetails from '../../PostsArea/PostDetails/PostDetails'
import AddImage from '../../ImagesArea/AddImage/AddImage'
import MainAbout from '../../About/MainAbout/MainAbout'

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/home" element={<Home />} />
        <Route path="/posts/fashion" element={<FashionCatergory />} />
        <Route path="/posts/beauty" element={<BeautyCatergory />} />
        <Route path="/posts/food" element={<FoodCatergory />} />
        <Route path="/posts/inspiration" element={<InspireCatergory />} />
        <Route path="/posts/fashion/:pId" element={<PostDetails />} />
        <Route path="/posts/beauty/:pId" element={<PostDetails />} />
        <Route path="/posts/food/:pId" element={<PostDetails />} />
        <Route path="/posts/inspire/:pId" element={<PostDetails />} />

        <Route path="/about" element={<MainAbout />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add_post" element={<AddPost />} />
        <Route path="/admin/update_post/:pId" element={<UpdatePost />} />
        <Route path="/admin/delete_post/:pId" element={<DeletePost />} />

        <Route path="/posts/images" element={<AddImage />} />
        <Route
          path="/admin/delete_comment/:pId/:cId"
          element={<DeleteComment />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default Routing

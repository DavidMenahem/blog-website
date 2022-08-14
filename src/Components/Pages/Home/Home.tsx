import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PostModel from "../../../Models/PostModel";
import postService from "../../../Services/PostsService";
import notificationService from "../../../Services/NotificationService";
import PostCard from "../../PostsArea/PostCard/PostCard";
import "./Home.css";

function Home(): JSX.Element {

    const [posts,setPosts] = useState<PostModel[]>([]);

    useEffect(()=>{

        postService.getAll()
        .then(p=>setPosts(p))
        .catch(err=>notificationService.error(err));
    })
    return (
        <div className="Home Box">
        {posts.map((p) => (
          <NavLink key={`${p.id}link`} to={'/posts/fashion/' + p.id}>
            <PostCard key={p.id} pst={p} />
          </NavLink>
        ))}
        </div>
    );
}

export default Home;

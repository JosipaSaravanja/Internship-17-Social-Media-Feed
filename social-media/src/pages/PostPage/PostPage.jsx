import posts from "../../data/posts.json";
import users from "../../data/users.json";
import comments from "../../data/comments.json";
import { Post } from "../../components/Post";
import { useParams } from "react-router-dom";
import  {useNavigate} from "react-router-dom";

export const PostPage = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id == postId);
  const navigate = useNavigate();
  if (!posts.find(el=>el.id==postId)) {
    navigate("/missing")
  } else {
    return (
      <div>
        <Post
          isComment={false}
          post={post}
          user={users.find((user) => user.id === post.userId)}
        />
        <div className="ccc">
          {post.comments.map((commentId) => {
            console.log(commentId);
            const props = comments.find((el) => el.id == commentId);
            return (
              <Post
                isComment={true}
                post={props}
                user={users.find((user) => user.id === props.userId)}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

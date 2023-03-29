import posts from "../../data/posts.json";
import users from "../../data/users.json";
import { Post } from "../../components/Post";
import { useParams } from "react-router-dom";
import  {useNavigate} from "react-router-dom";

export const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  if (!posts.find(el=>el.id==postId)) {
    navigate("/notAvailable")
  } else {
    const post = posts.find((post) => post.id == postId);
    return (
      <div>
        <Post
          isComment={false}
          post={post}
          user={users.find((user) => user.id === post.userId)}
        />
        <div className="ccc">
          {post.comments.map((showComments) => {
            return (
              <Post
                isComment={true}
                post={showComments}
                user={users.find((user) => user.id === showComments.userId)}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

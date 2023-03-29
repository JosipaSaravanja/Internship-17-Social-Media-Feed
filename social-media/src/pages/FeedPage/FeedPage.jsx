import posts from "../../data/posts.json";
import users from "../../data/users.json";
import {Post} from "../../components/Post"
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const FeedPage=()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchPosts, setSearchPosts] = useState(posts);
    useEffect(() => {
      if (searchParams.get('search') === null) {
        setSearchPosts(posts);
      }
      else {
        setSearchPosts(posts.filter(
              (post) => {
                const user=users.find(el=>el.id==post.userId);
                  return (post.text.toLowerCase().includes(searchParams.get('search').toLowerCase()) || user.username.toLowerCase().includes(searchParams.get('search').toLowerCase()))
              }
          ))
      }
  }, [searchParams])
  
    return <div>
        {searchPosts.map(product=>{
            return <Post post={product} user={users.find(user=>user.id===product.userId)}/>
        })}
    </div>
}
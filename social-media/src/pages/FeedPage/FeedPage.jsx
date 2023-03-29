import posts from "../../data/posts.json";
import users from "../../data/users.json";
import {Post} from "../../components/Post"
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const FeedPage=()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [showPosts, setShowPosts] = useState(posts);
    return <div>
        {showPosts.map(product=>{
            return <Post post={product} user={users.find(user=>user.id===product.userId)}/>
        })}
    </div>
}
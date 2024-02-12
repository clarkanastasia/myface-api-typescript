import {useState, useEffect} from 'react'
import {Page} from '../models/api/page'
import {PostModel} from '../models/api/postModel'
import {Links} from './Links'
import moment from 'moment'
import { useSearchParams } from 'react-router-dom'

export default function PostList(){
    const [myData, setMyData] = useState<Page<PostModel>|undefined>(undefined);
    const [searchParams] = useSearchParams();


    useEffect(() => {
    fetch(`http://localhost:3001/posts/?${searchParams}`).then(response => response.json()).then(data => setMyData(data));
    }, [searchParams])
    
    if(!myData){
        return <h1>Waiting for data</h1>
    }

    const handleClick = (postId : number, reaction : string) =>{
        console.log(postId);
        fetch(`http://localhost:3001/posts/${postId}/${reaction}/`, {
            method: 'POST',
        })
            .then((response) => {
                console.log(response.status)
                if (response.status !== 200) {
                throw new Error(response.statusText);
                }
            })
            .then(() => {
                alert(`Your ${reaction} was added`);
            })
        .catch((err) => {
                console.log(err.toString());
        });
    }
    
    return (
        <div className="flexContainer">
            <h1 className="subtitle">Posts</h1>
            <div className="postsContainer">
            {myData.results.map((post) =>
                <div className="postContainer" key={post.id}>
                    <img className="postImage" src={post.imageUrl}></img>
                    <div className ="postInfo">
                        <h3>{post.message}</h3>
                        <p>By {post.postedBy.username}</p>
                        <p>{moment(post.createdAt).format("Do MMM, YYYY")}</p>
                        <p>Liked by: {post.likedBy.length}</p>
                            <p>{post.likedBy.map(user =>
                                user.username
                            ).join(', ')}</p>
                        <p>Disliked by: {post.dislikedBy.length}</p>
                            <p>{post.dislikedBy.map(user =>
                            user.username
                            ).join(', ')}
                            </p>
                    </div>
                    <div className= "postButtonContainer">
                        <button type="submit" onClick={() => handleClick(post.id, "dislike")}>Dislike</button>  
                        <button type="submit" onClick={() => handleClick(post.id, "like")}>Like</button>  
                    </div>
                </div>
            )}
            </div>
            <Links {...myData}/>
        </div>
    )
}
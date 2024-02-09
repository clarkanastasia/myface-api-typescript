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

    let likes : string[] = [];
    let dislikes : string[] = [];

    myData.results.forEach((post) =>
        post.likedBy.forEach((user) => {
            likes.push(user.username)
            }
        )
    )
    myData.results.forEach((post) =>
        post.dislikedBy.forEach((user) => {
            dislikes.push(user.username)
            }
        )
    )
    
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
                        <p>Liked by: {likes.length}</p>
                        <p>{likes.join(', ')}</p>
                        <p>Disliked by: {dislikes.length}</p>
                        <p>{dislikes.join(', ')}</p>
                    </div>
                    <div className= "postButtonContainer">
                        <button type="submit">Dislike</button>  
                        <button type="submit">Like</button>  
                    </div>
                </div>
            )}
            </div>
            <Links {...myData}/>
        </div>
    )
}
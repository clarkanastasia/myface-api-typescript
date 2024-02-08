import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {UserModel} from '../models/api/userModel'

export default function UserDetail() {
    const [myData, setMyData] = useState<UserModel|null>(null);
    const { userId } = useParams();

    useEffect(() => {
    fetch(`http://localhost:3001/users/${userId}`).then(response => response.json()).then(data => setMyData(data));
    }, []);

    if(!myData){
        return <h1>Waiting for data</h1>
    }

    return(
        <div className = "flexContainer">
            <div className="profileContainer">
                <img className="coverImage" src={myData.coverImageUrl}></img>
                <div className="transparentDiv"></div>
                <img className="profileImage" src = {myData.profileImageUrl}/> 
                <p className="profileName">{myData.name}</p>
                <div className="profileInfo">
                    <p className="profileUsername">{myData.username}</p>
                    <p className="profileEmail">{myData.email}</p>
                </div>    
            </div>
            <h2 className="subtitle">{myData.name}'s Posts</h2>
            <div className="postsContainer">
            {myData.posts.map((post: any) =>
                <div className="postContainer" key={post.id}>
                    <img className="postImage" src={post.imageUrl}></img>
                    <div className="postInfo">
                        <p className="profileUsername">{myData.username}</p>
                        <p className="postCreatedAt">{post.createdAt}</p>
                        <p className="postMessage">{post.message}</p>
                    </div>
                </div>
            )}
            </div>
            <div className="postButtonContainer">
                <form method="post">
                    <button type="submit">Load More</button>  
                </form>
            </div>
        </div>
    )
}

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetail() {
    const [myData, setMyData] = useState<any>(null);
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
                <h3>{myData.name}</h3>
                <div className="profileInfo">
                    <p className="profileName">{myData.username}</p>
                    <p className="profileEmail">{myData.email}</p>
                </div>    
            </div>
            <h2 className="subtitle">{myData.name}'s Posts</h2>
            <ol className="postsContainer">
            {myData.posts.map((post: any) =>
                <li className="postContainer" key={post.id}>
                    <img className="postImage" src={post.imageUrl}></img>
                    <div className="postInfo">
                        <p className="postUsername">{post.username}</p>
                        <p className="postCreatedAt">{post.createdAt}</p>
                        <p className="postMessage">{post.message}</p>
                    </div>
                </li>
            )}
            </ol>
        </div>
    )
}

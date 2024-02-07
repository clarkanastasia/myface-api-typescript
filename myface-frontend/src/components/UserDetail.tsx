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
        <div className = "main">
            <div className="profileContainer">
                <img src={myData.coverImageUrl}></img>
                <img src = {myData.profileImageUrl}/> 
                <h3>{myData.name}</h3>
                <p>{myData.username}</p>
                <p>{myData.email}</p>
            </div>
            <div className="postsContainer">
            {myData.posts.map((post: any) =>
                <div className="post" key={post.id}>
                    <h3>{post.message}</h3>
                    <p>{post.createdAt}</p>
                    <img src={post.imageUrl}></img>
                </div>
            )}
            </div>
        </div>
    )
}

import {useState, useEffect} from 'react'

export default function PostList(){
    const [myData, setMyData] = useState<any>(null);

    useEffect(() => {
    fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setMyData(data));
    }, [])
    
    if(!myData){
        return <h1>Waiting for data</h1>
    }
    
    return (
        <div className="flexContainer">
            <h1 className="subtitle">Posts</h1>
            <div className="postsContainer">
            {myData.results.map((post: any) =>
                <div className="postContainer" key={post.id}>
                    <h3>{post.message}</h3>
                    <p>{post.createdAt}</p>
                    <img className="postImage" src={post.imageUrl}></img>
                    <p>Posted by: {post.postedBy.name} - {post.postedBy.username}</p>
                    <p>Liked by:</p>
                    {post.likedBy.map((user: any) =>
                        <li>{user.username}</li>
                    )}
                    <form method="post" action="/posts/{post.id}/like">
                        <button type="submit">Like</button>  
                    </form>
                    <p>Disliked by:</p>
                    {post.dislikedBy.map((user: any) =>
                        <li>{user.username}</li>
                    )}
                    <form className= "postButtonContainer" method="post" action="/posts/{post.id}/dislike">
                        <button type="submit">Dislike</button>  
                    </form>
                </div>
            )}
            </div>
        </div>
    )
}
import {useState, useEffect} from 'react'

export default function PostList(){
    
    const [myData, setMyData] = useState<any>(null);

    useEffect(() => {
    fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setMyData(data));
    }, [])
    
    if(!myData){
        return (
        <>
        <h1>Waiting for data</h1>
        </>
    )}
    
    return (
        <div className="flexContainer">
            <h1> Posts</h1>
            <div className="postsContainer">
            {myData.results.map((post: any) =>
                <div className="post">
                    <img src={post.imageUrl}></img>
                    <h3>{post.postedBy.name}</h3>
                    <p>{post.message}</p>
                    <p>{post.createdAt}</p>
                </div>
            )}    
            </div>
        </div>
    )
}
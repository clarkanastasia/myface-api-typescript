import { useState, useEffect } from 'react'

export default function UserList() {
    const [myData, setMyData] = useState<any>(null);

    useEffect(() => {
        fetch("http://localhost:3001/users/").then(response => response.json()).then(data => setMyData(data));
    }, []);

    if(!myData){
        return <h1>Waiting for data</h1>
    }

    return (
        <div>
            <h1>Users</h1>
            <div className ="userList">
            {myData.results.map((user: any) =>
                <div className="user" key={user.id}>
                    <img src={user.profileImageUrl}></img>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </div>
            )}
            </div>
        </div>
    )
}

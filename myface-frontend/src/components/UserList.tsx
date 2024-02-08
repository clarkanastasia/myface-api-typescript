import { useState, useEffect } from 'react';
import {Page} from '../models/api/page'
import {UserModel} from '../models/api/userModel'

export default function UserList() {
    const [myData, setMyData] = useState<Page<UserModel>|null>(null);

    useEffect(() => {
        fetch("http://localhost:3001/users/").then(response => response.json()).then(data => setMyData(data));
    }, []);

    if(!myData){
        return <h1>Waiting for data</h1>
    }

    return (
        <div className="flexContainer">
            <h1 className="subtitle">Users</h1>
            <div className ="postsContainer">
            {myData.results.map((user) =>
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
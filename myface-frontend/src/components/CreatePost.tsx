import {CreatePostRequest} from '../models/api/createPostRequest'
import { useState, FormEventHandler, ChangeEventHandler } from 'react'

export default function CreatePost(){
    
    const [input, setInput] = useState<CreatePostRequest>({
        message : '',
        imageUrl : '',
    })

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>{
        const {name, value} = event.target;
        setInput(prev => ({...prev, [name]:value}));
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(input);
        fetch("http://localhost:3001/posts/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        })
            .then((response) => {
                if (response.status !== 200) {
                throw new Error(response.statusText);
                }
            })
            .then(() => {
                console.log("Success! A new post has been created.");
            })
        .catch((err) => {
            console.log(err.toString());
        });
    }

    return(
        <div className="flexContainer">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="formContainer">
                <label>
                    Message:
                    <br/>
                    <input type="text" placeholder="message" name="message" value={input.message} onChange={handleChange}/>
                </label>
                <label>
                    ImageUrl:
                    <br/>
                    <input type="text" placeholder="imageUrl" name="imageUrl" value={input.imageUrl} onChange={handleChange}/>
                </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
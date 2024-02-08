import {CreateUserRequest} from '../models/api/createUserRequest'
import { useState, FormEventHandler, ChangeEventHandler } from "react";

export interface ErrorMessageProps{
    isValidated : boolean;
    errors : string | undefined;
}

function ErrorMessage(props : ErrorMessageProps){
    if (props.isValidated === false){
        return <div>Submit failed: {props.errors}</div>
    }
}

export default function CreateUser(){
    const [user, setUser] = useState<CreateUserRequest>({
    name: '',
    username: '',
    email: '',
    profileImageUrl: '',
    coverImageUrl:'',  
    })

    const [isValidated, setIsValidated] = useState<boolean>(true);
    const [errors, setErrors]= useState<string | undefined>(undefined);

    const validateInput = (user : CreateUserRequest) => {
        let error : string = ''; 

    if(user.username.length < 2){
        error = "the username is too short";
        setErrors(error);
        setIsValidated(false);
    } 
    if(user.email === ''){ 
        error="email cannot be empty";
        setErrors(error);
        setIsValidated(false);
    }
}

const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>{
    const {name, value} = event.target;
    setUser(prev => ({...prev, [name]:value}));
}

const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(user);
    validateInput(user);

    if(isValidated === true) {
        fetch("http://localhost:3001/users/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (response.status !== 200) {
                throw new Error(response.statusText);
                }
            })
            .then(() => {
                console.log("Success! A new user has been created.");
            })
        .catch((err) => {
            console.log(err.toString());
        });
    }
    };

    return(
        <div className="flexContainer">
            <h1>Create User</h1>
            <ErrorMessage errors={errors} isValidated={isValidated} />
            <form onSubmit={handleSubmit}>
                <div className="formContainer">
                <label>
                    Name: 
                    <br/>
                    <input type="text" name="name" value ={user.name} onChange={handleChange}/>     
                </label>
                <label>
                    Username:
                    <br/>
                    <input type="text" name="username" value={user.username} onChange={handleChange}/>
                </label>
                <label>
                Email:
                <br/>
                    <input type="text" name="email" value = {user.email} onChange={handleChange}/>
                </label>
                <label>
                ProfileImageUrl:
                <br/>
                    <input type="text" name="profileImageUrl" value={user.profileImageUrl} onChange={handleChange}/>
                </label>
                <label>
                CoverImageUrl:
                <br/>
                    <input type="text" name="coverImageUrl" value={user.coverImageUrl} onChange={handleChange}/>
                </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
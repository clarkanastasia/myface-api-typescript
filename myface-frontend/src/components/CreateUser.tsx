export default function CreateUser(){

    return(
        <div>
            <h1>Create User</h1>
            <form method="post" action="/users/create">
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <label>
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label>
                Email:
                    <input type="text" name="email"/>
                </label>
                <label>
                ProfileImageUrl:
                    <input type="text" name="profileImageUrl"/>
                </label>
                <label>
                CoverImageUrl:
                    <input type="text" name="coverImageUrl"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
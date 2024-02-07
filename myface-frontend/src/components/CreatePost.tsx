
export default function CreatePost(){

    return(
        <div>
            <h1>Create Post</h1>
            <form method="post" action="/posts/create">
                <label>
                    Message:
                    <input type="text" name="message"/>
                </label>
                <label>
                    ImageUrl:
                    <input type="text" name="imageUrl"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default function PostForm({setNewPost}) {
    return <div className="post">
            <form onSubmit={setNewPost} className="vstack">
                <label htmlFor="title">Title: <input type="text" name="title" id="title" required/>
                </label> <label htmlFor="body">Body: <input type="text" name="body" id="body" required/></label>
                <button type="submit">Submit</button>
            </form>
        </div>
}
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";
import { useState, useEffect } from "react";

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setData(data);
        setLoading(false);
    }

    const handleAddData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); 
        const newPost = {
            userId: 1,
            id: data.length + 1,
            title: formData.get('title'),
            body: formData.get('body')
        };
        setData([...data, newPost]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!loading) {
        return <div className="vstack">
            <PostForm posts={data} setNewPost={handleAddData}/>
            <PostsContainer posts={data}/>
        </div>
    }
    else {
        return <pre>Loading...</pre>
    }
}
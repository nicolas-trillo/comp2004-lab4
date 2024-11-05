import PostCard from "./PostCard"
export default function PostsContainer({posts}) {
    return <div className="post-cont vstack">
        {posts.sort((a, b) => b.id - a.id).map((post) => (
            <PostCard title={post.title} body={post.body} />
        ))}
    </div>
}
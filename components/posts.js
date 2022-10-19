import Post from "./post"

const Posts = ({posts}) => {
    return (

    <ul>
        {posts?.data?.map((post, index) => (
        <Post post={post} key={post.id}>{post.attributes.title}</Post>
        ))}
    </ul>

    )
}

export default Posts;
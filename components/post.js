import Link from 'next/link'
const Post = ({post}) => {
    return(
        <>
            <h2 className="text-3xl"><Link href={`/postitem/${post.id}`}>{post.attributes.title}</Link></h2>
            <p className="mb-10">{post.attributes.description}</p>
        </>
    )
}

export default Post;
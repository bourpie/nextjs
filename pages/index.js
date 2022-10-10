import axios from 'axios';

const Home = ({ posts, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {posts.data.map(post => (
        <li key={post.id}>{post.attributes.title}</li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://strapi-production-714e.up.railway.app/api/posts');
    const posts = res.data;
    console.log(posts)
    return { posts };
  } catch (error) {
    return { error };
  }
};

export default Home;

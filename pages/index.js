import axios from 'axios';
import Layout from "../components/layout";

const Home = ({ posts, error }) => {
  if (error) {
    return <div>Une erreur est survenue : {error.message}</div>;
  }
  return (
    <Layout>
      <ul>
          {posts.data.map(post => (
          <li key={post.id}>{post.attributes.title}</li>
          ))}
      </ul>
    </Layout>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://strapi-production-714e.up.railway.app/api/posts');
    const posts = res.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};

export default Home;

import axios from 'axios';
import Layout from "../layouts/layout";

const Home = ({ posts, error }) => {
  if (error) {
    return <div>Une erreur est survenue : {error.message}</div>;
  }
  return (
    <Layout>
      <section aria-label="Nouvelles" className="container max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <ul>
            {posts.data.map(post => (
            <li key={post.id}>{post.attributes.title}</li>
            ))}
        </ul>
      </section>
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

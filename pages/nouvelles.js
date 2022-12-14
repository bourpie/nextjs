import Layout from "../layouts/layout";
import Posts from "../components/posts"

const Nouvelles = ({ posts }) => {

  return (
    <Layout>
      <section aria-label="Nouvelles" className="container h-full max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0">
      <Posts posts={posts}></Posts>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await fetch(`https://strapi-production-714e.up.railway.app/api/posts/`);
  const posts = await data.json();
  return { props: { posts } }
}

export default Nouvelles;

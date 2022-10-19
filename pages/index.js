import Layout from "../layouts/layout";
import Posts from "../components/posts"

const Home = ({ posts }) => {

  return (
    <Layout>
      <section aria-label="Nouvelles" className="container h-full text-center center max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {/* <Posts posts={posts}></Posts> */}

      <div className="flex justify-center h-full flex-col">
        <h3 className="text-4xl md:text-6xl lg:text-8xl font-poppins font-extrabold mb-8">PIERRE <span className="text-cyan-400">BOURGEOIS</span></h3>
        <h3 className="text-3xl text-stone-400 font-poppins mb-10">Développeur <span className="text-white font-bold">Web</span></h3>
        <button className="px-2 py-3 text-lg hover:bg-cyan-600 transition w-52 rounded-3xl mx-auto bg-cyan-400 text-black font-bold">Contactez-moi</button>
      </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await fetch(`https://strapi-production-714e.up.railway.app/api/posts/`);
  const posts = await data.json();
  return { props: { posts } }
}

export default Home;

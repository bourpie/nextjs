import Layout from "../layouts/layout";
import Link from "next/link"

const Home = ({accueil}) => {

  return (
    <Layout>
      <section aria-label="Nouvelles" className="container h-full max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex justify-center text-center h-full flex-col">
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-poppins font-extrabold mb-8">{accueil.data.attributes.Titre} <span className="text-cyan-400">{accueil.data.attributes.Titre2}</span></h3>
          <h3 className="text-3xl text-stone-400 font-poppins mb-10">{accueil.data.attributes.Description} <span className="text-white font-bold">{accueil.data.attributes.Description2}</span></h3>
          <Link href="/contact" className="px-2 py-3 text-lg hover:bg-cyan-600 transition w-52 rounded-3xl mx-auto bg-cyan-400 text-black font-bold"><button>{accueil.data.attributes.BoutonTexte}</button></Link> 
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await fetch(`https://strapi-production-714e.up.railway.app/api/Accueil`);
  const accueil = await data.json();
  return { props: { accueil } }
}


export default Home;

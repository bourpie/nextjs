import Head from "next/head";
import Entete from "./entete";
import Pied from "./pied";

const Layout = props => (
  <div className="flex flex-col h-full">
    <Head>
      <title>Boomer blogue</title>
      <meta name="description" content="Put your description here."></meta>
    </Head>
    
    <Entete />
    <main className="mb-auto py-10 border-t">
      {props.children}
    </main>
    <Pied />
  </div>
);

export default Layout;
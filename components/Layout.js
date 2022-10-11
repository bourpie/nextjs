import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = props => (
  <>
    <Head>
      <title>Boomer blogue</title>
      <meta name="description" content="Put your description here."></meta>
    </Head>
    
    <Header />
    <main className="mb-auto">
      {props.children}
    </main>
    <Footer />
  </>
);

export default Layout;
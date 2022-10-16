import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = props => (
  <div className="flex flex-col h-full">
    <Head>
      <title>Boomer blogue</title>
      <meta name="description" content="Put your description here."></meta>
    </Head>
    
    <Header />
    <main className="mb-auto py-10 border-t">
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;
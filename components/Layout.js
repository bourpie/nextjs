import Head from "next/head";
import Header from "./Header";
import NavBar from "./Navbar";

const Layout = props => (
  <div className="Layout">

    <Head>
      <title>Boomer blogue</title>
      <meta name="description" content="Put your description here."></meta>
    </Head>
    <Header />
    <div className="Content">
      {props.children}
    </div>
    <NavBar />
  </div>
);

export default Layout;
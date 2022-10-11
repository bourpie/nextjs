import NavBar from "./navbar";
import Image from "next/image";
import Logo from "../public/me2-art.png"

const Header = () => (
    <header>
        <h1>
            {/* <Image src={Logo} alt="logo" className="rounded-full w-32" /> */}
            Boomer blogue
        </h1>
        <NavBar />
    </header>
);
  
export default Header;
import NavBar from "./navbar";
import Link from 'next/link';
import Image from "next/image";
import Logo from "../public/me2-art.png"

const Header = () => (
    <header>
        <div className="container max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex items-center justify-between py-10">
            <h1 className="flex items-center">
                <div className="mr-3 w-12">
                    <Link href="/"><a><Image src={Logo} alt="logo" className="rounded-full w-32" /></a></Link>
                </div>
                <Link href="/">Boomer blogue</Link>
            </h1>
            <NavBar />
        </div>      
    </header>
);
  
export default Header;
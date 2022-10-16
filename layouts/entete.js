import NavBar from "./navbar";
import Link from 'next/link';
import Image from "next/image";
import Logo from "../public/me2-art.png"

const Entete = () => (
    <header>
        <div className="container max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex items-center justify-between py-10">
            <Link href="/">
                <a className="flex items-center h1">
                    <div className="mr-3 w-16">
                        <Image src={Logo} alt="logo" className="rounded-full w-32" />
                    </div>
                    <div className="hidden text-2xl font-semibold sm:block">Bourpie blog</div>
                </a>
            </Link>
            <NavBar />
        </div>      
    </header>
);
  
export default Entete;
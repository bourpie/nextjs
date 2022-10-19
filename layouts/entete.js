import Navbar from "./navbar";
import Link from 'next/link';
import Image from "next/image";
import Logo from "../public/me2-art.png"

const Entete = () => (
    <header>
        <div className="container font-poppins max-w-2xl px-4 sm:px-6 xl:max-w-4xl xl:px-0 flex items-center justify-between py-10">
            <Link href="/">
                <a className="flex items-center">
                    <div className="mr-3 w-12">
                        <Image src={Logo} alt="logo" className="rounded-full w-32" />
                    </div>
                    <div className="hidden text-2xl italic font-semibold sm:block">PB</div>
                </a>
            </Link>
            <Navbar />
        </div>      
    </header>
);
  
export default Entete;
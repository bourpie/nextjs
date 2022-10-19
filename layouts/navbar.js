import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => { 

    const router = useRouter();
    const style = "transition text-white hover:text-cyan-400"
    const active = (path) => router.pathname == path ? `active ${style}` : "";

    return (
        <nav aria-label="Navigation principale" className='flex gap-8 font-bold'>
            <Link href="/"><a className={active('/')}>Accueil</a></Link>
            <Link href="/nouvelles"><a className={active('/nouvelles')}>Nouvelles</a></Link>
            <Link href="/contact"><a className={active('/contact')}>Contact</a></Link>
        </nav>
)};

export default Navbar;
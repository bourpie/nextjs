import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => { 

    const router = useRouter();
    const defaultStyles = "transition text-white hover:text-cyan-400"
    const linkStyles = (path) => router.pathname == path ? `active ${defaultStyles}` : `${defaultStyles}`;

    return (
        <nav aria-label="Navigation primaire" className='flex gap-8 font-bold'>
            <Link href="/"><a className={linkStyles('/')}>Accueil</a></Link>
            <Link href="/nouvelles"><a className={linkStyles('/nouvelles')}>Nouvelles</a></Link>
            <Link href="/contact"><a className={linkStyles('/contact')}>Contact</a></Link>
        </nav>
)};

export default Navbar;
import NavLink from '../components/nav-link';

const Navbar = () => { 

    return (
        <nav aria-label="Navigation principale" className='flex gap-8 font-bold'>
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/nouvelles">Nouvelles</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </nav>
)};

export default Navbar;
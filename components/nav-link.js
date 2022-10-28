import Link from "next/link";
import { useRouter } from 'next/router';

export default function NavLink({href, children}) {

    const router = useRouter();
    const style = "transition hover:text-white"
    const activeStyle = "text-white"
    const active = (path) => router.pathname == path ? `${activeStyle}` : `${style}`;

    return (
        <Link 
            className={active(href)}
            href={href}>
            {children}
        </Link>
    )
}
import Image from "next/image"

const Pied = () => {
    return (
        <footer className=" border-t">
            <div className="container max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-8 text-center">
                <a 
                    rel="license" 
                    href="http://creativecommons.org/licenses/by/4.0/">
                    <Image width="88px" height="15px" alt="Licence Creative Commons" src="https://licensebuttons.net/l/by/4.0/80x15.png" /></a>
                    <br />Ce(tte) œuvre est mise à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Licence Creative Commons Attribution 4.0 International
                </a>.
            </div>
        </footer>
    )
}

export default Pied;
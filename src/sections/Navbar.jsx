import React from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = ()=>{
    return(
        <ul className="nav-ul">
            {navLinks.map((link) => (
                <li key={link.id} className={"nav-li"}>
                    <a href={link.href} className={"nav-li_a"}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    let toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <header className={"fixed top-0 left-0 right-0 bg-black/90 z-50"}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="font-bold text-2xl text-neutral-400 hover:text-white transition-colors ">Portfolio</a>

                    {/*Menu Button Hidden For Mobile Devices*/}
                    <button onClick={toggleMenu} className={"text-neutral-400 hover:text-white transition-colors sm:hidden flex"} aria-label={"Toggle menu"}>
                        <img
                            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                            alt="Menu"
                            className={"w-6 h-6 mx-auto"}
                        />
                    </button>

                    {/* Nav Items */}
                    <nav className="hidden sm:flex ">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar

import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="flex items-center justify-between py-6 w-full navbar">
            <img src={logo} alt="bank" className="w-[124px] h-8" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-x-10">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-base text-white`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>

                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-7 h-7 object-contain"
                    onClick={() => { setToggle(prev => !prev) }}
                />
                <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-4">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-base text-white`}
                            >
                                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                                    {nav.title}
                                </a>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>)
}
export default Navbar
import { useState } from "react";
import Logo from "../assets/img/Logo.svg"
import Burger from '../assets/img/menu-btn.svg';

function Header() {

  const [visibleMenu, setVisibleMenu] = useState(false)

  const openMenu = () => {
    setVisibleMenu((current) => !current)
  }

  return (
    <div className="container sticky top-0">
      <header>
        <div className="flex justify-between items-center p-4 bg-white ">
          <div className="lg:px-7">
            <img className="" src={Logo} alt="Logo" />
          </div>
          <nav className="">

            <ul className="max-sm:hidden sm:flex items-center space-x-6 list-none font-semibold text-grey-dark">
              <li>
                <a className="hover:text-lavender ease-in duration-200" href="#main">
                  Main
                </a>
              </li>
              <li>
                <a className="hover:text-lavender ease-in duration-200" href="#about">About</a>
              </li>
              <li>
                <a className="hover:text-lavender ease-in duration-200" href="#getin">Get in Touch</a>
              </li>
            </ul>
            {/* mobile menu */}
            {visibleMenu &&
              <ul className="grid place-items-center list-none font-semibold text-grey-dark">
                <li>
                  <a className="active:text-lavender hover:text-lavender ease-in duration-200" href="#main">
                    Main
                  </a>
                </li>
                <li>
                  <a className="hover:text-lavender ease-in duration-200" href="#about">About</a>
                </li>
                <li>
                  <a className="hover:text-lavender ease-in duration-200" href="#getin">Get in Touch</a>
                </li>
              </ul>
            }
          </nav>
          <div onClick={openMenu} className="sm:hidden cursor-pointer z-50">
            <img className="" src={Burger} alt="Menu" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
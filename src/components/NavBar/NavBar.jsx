import { useState } from 'react';

import './NavBar.css'
import { Menu, X } from 'lucide-react';


export function NavBar ({brandName, mobileView,...props}){
    const [mobileMenu, setMobileMenu] = useState(mobileView.menuOpen)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    let navClass = mobileView.isMobile ? "main_nav mobile_nav" : "main_nav";
    let menuClass = mobileMenu ? " menu_open" : "menu_closed";
    let brand = brandName;
    let brand_sec="";
    if (typeof brandName == 'string' ){
        brand.toUpperCase();
        if (brandName.split(' ').length > 1){
            let brand_words = brandName.split(' ')
            brand = brand_words[0]
            brand_sec = brand_words.slice(1).join(" ")
    }}
    return(
        <nav 
        className={navClass}
        {...props}>
            <div className='nav_header'>
                <button
                className="menu_toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileView.menuOpen}
                onClick={toggleMobileMenu}
                >
                {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="logo">
                    <h1>{brand}</h1>
                    {brand_sec ? <h3>{brand_sec}</h3> : null}
                </div>
            </div>
            <ul className={menuClass}>
                <li>Home</li>
                <li className="dropdown">
                    <button 
                        className="dropdown-trigger"
                        data-testid="dropdown"
                        // aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        // onClick={mobileView.isMobile ? toggleDropdown : undefined}
                        // onMouseEnter={!mobileView.isMobile ? () => setDropdownOpen(true) : undefined}
                        // onMouseLeave={!mobileView.isMobile ? () => setDropdownOpen(false) : undefined}
                    >
                        Menu
                    </button>
                    <ul className="dropdown-menu" aria-label="Coffee menu options">
                        <li>All Coffee</li>
                        <li>Single Origin</li>
                        <li>Espresso</li>
                        <li>Coffee Mugs</li>
                    </ul>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


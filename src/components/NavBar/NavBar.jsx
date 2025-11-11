import './NavBar.css'
import { Menu, X } from 'lucide-react';


export const NavBar = ({
    brandName,
    mobileView,
    ...props}) =>{
    let navClass = mobileView.isMobile ? "main_nav mobile_nav" : "main_nav";
    let menuClass = mobileView.isMobile && mobileView.menuOpen ? " menu_open" : "menu_closed";
    return(
        <nav 
        className={navClass}
        {...props}>
            <div className='nav_header'>
                {mobileView.isMobile ?
                    mobileView.menuOpen ? <X /> : <Menu size={24} className='menu_icon'/> : null}
                <h1>{brandName.toUpperCase()}</h1>
            </div>
            <ul className={menuClass}>
                <li>Home</li>
                <li className="dropdown">
                    <span className="dropdown-trigger">Menu</span>
                    <ul className="dropdown-menu">
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
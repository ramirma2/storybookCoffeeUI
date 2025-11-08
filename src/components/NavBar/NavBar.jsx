import './NavBar.css'
import { Menu, X } from 'lucide-react';


export const NavBar = ({
    brandName,
    mobileView,
    ...props}) =>{
    let navClass = "main_nav";
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
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
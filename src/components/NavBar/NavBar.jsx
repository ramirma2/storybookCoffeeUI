import './NavBar.css'

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
                <h1>{brandName.toUpperCase()}</h1>
            <ul className={menuClass}>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
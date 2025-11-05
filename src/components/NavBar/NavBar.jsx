
export const NavBar = ({
    brandName,
    ...props}) =>{
    return(
        <nav 
        className="main_nav"
        {...props}>
            <ul>
                <li><h1>{brandName.toUpperCase()}</h1></li>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
            </ul>
        </nav>
    )
}
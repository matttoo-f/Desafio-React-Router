import { NavLink } from "react-router-dom"
import '../styles/NavBar.css'


const NavBar = () => {

    const Active = ({isActive}) => (isActive ? 'active' : 'idle')

    return (
        <>
        <nav>
            <div >
                <NavLink to={'/'}><img className="logo" src="https://pngimg.es/d/pokeball_PNG11.png" alt="" /></NavLink>
            </div>

            <div className="link-container">
                <NavLink to={'/'} className={Active} >Home</NavLink>
                <NavLink to={'/pokemones'} className={Active} >pokemones</NavLink>
            </div>

        </nav>
        </>
    )
}
export default NavBar
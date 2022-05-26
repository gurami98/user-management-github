import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './Navbar.css'
import GitHubLogo from '../../assets/github-icon.webp'
import {Link} from "react-router-dom";
import {FavoritesContext} from "../../context/FavoritesContext";
function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const location = window.location.pathname.split('/')[1]

    const {clearFavorites} = useContext(FavoritesContext)

    const logOut = () => {
        clearFavorites()
        logout()
    }

    return (
        <div className='navbar'>
            <div className="logo-container">
                <p className='location-text'>{location}</p>
                <img src={GitHubLogo} alt='icon' className='main-logo'/>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                       <Link className="nav-item" to='/dashboard'>Dashboard </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='/search'>Search </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='/favorites'>Favorites </Link>
                    </li>
                </ul>
            </div>
            <div className='user-container'>
                <p className='user-info'> Hello, {user.username}</p>
                <button className='logout-btn' onClick={logOut}>Log Out</button>
            </div>
        </div>
    );
}

export default Navbar;

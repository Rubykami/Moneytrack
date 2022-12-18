import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar__items">
                <div className="navbar__logo">Organizzeta</div>
                <ul className="navbar__list">
                    <li className="navbar__list__item">
                        <Link
                            reloadDocument
                            to="/"
                            className="navbar__list__link"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="navbar__list__item">
                        <Link
                            reloadDocument
                            to="/login"
                            className="navbar__list__link"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header

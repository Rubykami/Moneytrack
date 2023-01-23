import './Header.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { BalanceContext } from '../../contexts/BalanceContext'


const Header: React.FC = () => {
    const { user, Logout }: any = useContext(BalanceContext)


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
                    {user && (   // eslint-disable-line
                        <>
                            <li className="navbar__list__item">
                                <Link
                                    reloadDocument
                                    to="/profile"
                                    className="navbar__list__link"
                                >
                                    Perfil
                                </Link>
                            </li>
                            <li className="navbar__logoutbtn">
                                <button type='button' onClick={Logout}>Log out</button>  
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Header;

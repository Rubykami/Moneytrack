import './Header.scss'



const Header = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__items'>
                <div className='navbar__logo'>
                    Organizzeta
                </div>
                <ul className='navbar__list'>
                    <li className='navbar__list__item'>
                        <a className='navbar__list__link' href='/'>Home</a>
                    </li>
                    <li className='navbar__list__item'>
                        <a className='navbar__list__link' href='/Profile'>Perfil</a>
                    </li>
                    <li className='navbar__list__item'>
                        <a className='navbar__list__link' href='/Deposit'>Depositar</a>
                    </li>
                    <li className='navbar__list__item'>
                        <a className='navbar__list__link' href='/Withdraw'>Saque</a>
                    </li>
                    <li className='navbar__list__item'>
                        <a className='navbar__list__link' href='/Transfer'>Transferência</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
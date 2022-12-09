import './Footer.scss'
import { CgFacebook } from 'react-icons/cg'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__items'>
                    <li className='footer__CompanyInfo'>
                        <span>© 2022 Organizzeta Tecnologia Ltda. CNPJ 99.999.999/9999-99</span>
                    </li>
                <ul className='footer__list'>
                    <li className="footer__list__item"><BsLinkedin/></li>
                    <li className="footer__list__item"><SiInstagram/></li>
                    <li className="footer__list__item"><BsTwitter/></li>
                    <li className="footer__list__item"><CgFacebook/></li>
                    <li className="footer__list__item">Política de Privacidade</li>
                    <li className="footer__list__item">Termos de Serviço</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
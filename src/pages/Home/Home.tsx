import './Home.scss'
import './Footer.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MdPhonelink, MdLockOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { CgFacebook } from 'react-icons/cg'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'

const Home = (): any => {
    const Navigate = useNavigate()

    const RedirectToSignupPage = (): any => {
        Navigate('/signup')
    }

    return (
        <>
            <main className="main">
                <section className="main__firstsection">
                    <span className="main__firstsection__firstitem">
                        <span className="main__firstsection__firstitem__controle">
                            Controle{' '}
                        </span>
                        total das finanças na palma da sua mão
                    </span>

                    <div className="main__firstsection__seconditem">
                        Organize seu dinheiro em tempo real em uma solução
                        completa, prática e segura, e garanta o controle total
                        das suas finanças.
                    </div>

                    <button
                        className="main__firstsection__signupbtn"
                        type="button"
                        onClick={RedirectToSignupPage}
                    >
                        Teste Gratuitamente
                        <div className="main__firstsection__signupbtn__arrowsection">
                            <AiOutlineArrowRight className="main__firstsection__signupbtn__arrow" />
                        </div>
                    </button>

                    <div className="main__firstsection__bottom">
                        <ul className="main__firstsection__bottom__items">
                            <li className="main__firstsection__bottom__item">
                                <MdLockOutline className="main__firstsection__bottom__item__lockicon" />
                                <span className="main__firstsection__bottom__item__text">
                                    Segurança dos seus dados em primeiro lugar
                                </span>
                            </li>
                            <li className="main__firstsection__bottom__item">
                                <MdPhonelink className="main__firstsection__bottom__item__computerphoneicon" />
                                <span className="main__firstsection__bottom__item__text">
                                    Acesse quando quiser, no celular ou
                                    computador
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="main__secondsection">
                    <img
                        alt="FinanceImg"
                        src={require('../../assets/images/pig.jpg')}
                        height={400}
                        width={600}
                        className="main__secondsection__image"
                    />
                </section>
            </main>

            <footer className="footer">
                <div className="footer__items">
                    <li className="footer__companyinfo">
                        <span>
                            © 2022 Organizzeta Tecnologia Ltda. CNPJ
                            99.999.999/9999-99
                        </span>
                    </li>
                    <ul className="footer__list">
                        <li className="footer__list__item">
                            <BsLinkedin />
                        </li>
                        <li className="footer__list__item">
                            <SiInstagram />
                        </li>
                        <li className="footer__list__item">
                            <BsTwitter />
                        </li>
                        <li className="footer__list__item">
                            <CgFacebook />
                        </li>
                        <li className="footer__list__item">
                            Política de Privacidade
                        </li>
                        <li className="footer__list__item">
                            Termos de Serviço
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Home

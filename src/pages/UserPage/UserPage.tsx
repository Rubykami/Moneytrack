import './UserPage.scss'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState, useEffect, useRef } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const UserPage = () => {
    const BalanceSection = useRef(null)

    const [Eye, SetEye] = useState<String>('closedeye')
    const [EyeIcon, SetEyeIcon] = useState<JSX.Element>(
        <AiOutlineEyeInvisible />
    )
    const [Balance, setBalance] = useState('hiddenbalance')
    const [BalanceInfo, setBalanceInfo] = useState('**********')

    const ChangeEyeStatus = () => {
        if (Eye === 'closedeye') {
            SetEyeIcon(<AiOutlineEyeInvisible />)
            SetEye('openedeye')
            setBalance('visiblebalance')
            setBalanceInfo('**********')
        } else {
            SetEyeIcon(<AiOutlineEye />)
            SetEye('closedeye')
            setBalanceInfo('9000,00')
        }
    }

    return (
        <main className="mainsection">
            <section className="mainsection__firstsection">
                <section className="mainsection__personaldatasection">
                    <section className="mainsection__personaldatasection__div">
                        <h1 className="mainsection__personaldatasection__div__title">
                            Bom dia Bruno!
                        </h1>
                        <div className="mainsection__personaldatasection__div__notification">
                            <IoMdNotificationsOutline />
                        </div>
                    </section>
                </section>
                <section className="mainsection__balancesection">
                    <div className="mainsection__balancesection__div">
                        <div className="mainsection__balancesection__div__balancetitle">
                            <h1 className="mainsection__balancesection__div__title">
                                Carteira
                            </h1>
                            <h2
                                ref={BalanceSection}
                                className={`mainsection__balancesection__div__${Balance}`}
                            >
                                R$ {BalanceInfo}
                            </h2>
                        </div>
                        <div
                            onClick={ChangeEyeStatus}
                            className={`mainsection__balancesection__div__${Eye}`}
                        >
                            {EyeIcon}
                        </div>
                    </div>
                    <section className="mainsection__bankdatasection">
                        <h3 className="mainsection__bankdatasection__title">
                            Minhas contas
                        </h3>
                        <div className="mainsection__bankdatasection__accountinfo__div">
                            <h1 className="mainsection__bankdatasection__accountinfo__div__bankname">
                                Nubank
                            </h1>
                            <h2 className="mainsection__bankdatasection__accountinfo__div__bankaccountinfo">
                                Conta Corrente
                            </h2>
                            <div className="mainsection__bankdatasection accountinfo__div__balance__div">
                                <h1 className="mainsection__bankdatasection__accountinfo__div__balance__div__balanceinfo">
                                    R$ {BalanceInfo}
                                </h1>
                            </div>
                        </div>
                        <div className="mainsection__bankdatasection__accountinfo__div">
                            <h1 className="mainsection__bankdatasection__accountinfo__div__bankname">
                                Banco Inter
                            </h1>
                            <h2 className="mainsection__bankdatasection__accountinfo__div__bankaccountinfo">
                                Conta Corrente
                            </h2>
                            <div className="mainsection__bankdatasection__accountinfo__div__balance__div">
                                <h1 className="mainsection__bankdatasection__accountinfo__div__balance__div__balanceinfo">
                                    R$ {BalanceInfo}
                                </h1>
                            </div>
                        </div>
                    </section>
                    <button className="mainsection__bankdatasection__manageaccountbtn">
                        Gerenciar contas
                    </button>
                    <section className="mainsection__useractions">
                        <button className="mainsection__useractions__transferbtn">
                            Fazer uma transferência
                        </button>
                        <button className="mainsection__useractions__depositbtn">
                            Fazer um depósito
                        </button>
                    </section>
                </section>
                <div className="mainsection__bottomdiv"></div>
            </section>
            <section className="mainsection__secondsection">
                <h1 className='mainsection__secondsection__title'>Bem-Vindo ao Organizzeta!</h1>
                <section className='mainsection__secondsection__companyinfo'>
                    <h1 className='mainsection__secondsection__companyinfo__title'>Quem somos</h1>
                    <p className='mainsection__secondsection__companyinfo__description'>
                        O Organizzeta é um gerenciador financeiro de verdade.
                        Trabalhado em cada detalhe com muito carinho e paixão
                        pelo nosso fantástico time.
                    </p>
                    <div className='mainsection__secondsection__companyinfo__firstaddinfo'>
                        <div className='mainsection__secondsection__companyinfo__firstaddinfo__div'>
                            <div className='mainsection__secondsection__companyinfo__firstaddinfo__div__checkedicon'>
                                <BsFillPatchCheckFill />
                            </div>
                            <p className='mainsection__secondsection__companyinfo__firstaddinfo__div__description'><b>Mais de 30 anos <br/> de história</b> <br/>desde 1989!</p>
                        </div>
                        <div className='mainsection__secondsection__companyinfo__secondaddinfo'>
                            <div className='mainsection__secondsection__companyinfo__secondaddinfo__div__checkedicon'>
                                <BsFillPatchCheckFill />
                            </div>
                            <p className='mainsection__secondsection__companyinfo__secondaddinfo__div__downloadinfo'>
                            <b>Mais de 10 milhões <br/> de downloads</b> <br/> na App Store e Google Play!
                            </p>
                        </div>
                    </div>
                    <div className='mainsection__secondsection__instructions'>
                        <h1 className='mainsection__secondsection__instructions__title'>
                            Como utilizar o site?
                        </h1>
                        <p className='mainsection__secondsection__instructions__description'>
                            <ul className='mainsection__secondsection__instructions__description__list'>
                                <li className='mainsection__secondsection__instructions__description__list__item'>
                            <b>1. </b> Primeiramente, você deve clicar no botão de <b>+</b> logo abaixo de <b>Minhas contas</b> do lado esquerdo da sua tela para escolher quais bancos você irá utilizar e o quanto de dinheiro cada um tem.
                                </li>
                                <li className='mainsection__secondsection__instructions__description__list__item'>
                                    <b> 2.</b> Após ter configurado corretamente as suas contas de banco, você poderá fazer depósitos para essas contas usando diretamente o dinheiro da sua <b>carteira Organizzeta!</b>.
                                    Basta clicar em <b>Fazer uma transferência</b>.
                                </li>
                                <li className='mainsection__secondsection__instructions__description__list__item'>
                                    <b>3.</b> Para adicionar dinheiro a sua <b>carteira Organizzeta</b>, clique em <b>Fazer um depósito</b>.
                                </li>
                                <li className='mainsection__secondsection__instructions__description__list__item'>
                                    <b>4. </b> Para gerenciar as suas contas de banco(<b>como mudar os dados cadastrados</b>), clique em <b>Gerenciar contas</b>.
                                </li>
                            </ul>
                        </p>
                    </div>
                </section>

                <p className='mainsection__secondsection__footer'>
                © 2022 Organizzeta Tecnologia Ltda. - Todos os direitos reservados.
                </p>
            </section>
        </main>
    )
}

export default UserPage

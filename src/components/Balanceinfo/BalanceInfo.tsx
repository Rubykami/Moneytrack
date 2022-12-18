import './BalanceInfo.scss'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState, useRef, useMemo} from 'react'
import { Link } from 'react-router-dom'


const BalanceInfo = () => {
    const balanceSection = useRef<HTMLHeadingElement>(null)

    const notificationIcon = <IoMdNotificationsOutline />

    const OPENED_EYE_CLASS = 'openedeye'
    const CLOSED_EYE_CLASS = 'closedeye'
    const HIDDEN_BALANCE = 'hiddenbalance'
    const VISIBLE_BALANCE = 'visiblebalance'
    const HIDDEN_NUMBER = '**********'

    const [visible, setVisibility] = useState<Boolean>(false)
   
    const eyeIcon = useMemo<JSX.Element>(() => {
        return visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
    }, [visible])
    const balanceClass = useMemo<String>(() => {
        return visible ? VISIBLE_BALANCE : HIDDEN_BALANCE
    }, [visible])
    const eyeClass = useMemo<String>(() => {
        return visible ? OPENED_EYE_CLASS : CLOSED_EYE_CLASS
    }, [visible])
    const balance = useMemo<String>(() => {
        return visible ? '9000' : HIDDEN_NUMBER
    }, [visible])

    const toggleBalanceVisiblity = () => {
        setVisibility(!visible)
    }

    return (
        <>
            <section className="mainsection__firstsection">
                <section className="mainsection__personaldatasection">
                    <section className="mainsection__personaldatasection__div">
                        <h1 className="mainsection__personaldatasection__div__title">
                            Bom dia Bruno!
                        </h1>
                        <div className="mainsection__personaldatasection__div__notification">
                            {notificationIcon}
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
                                ref={balanceSection}
                                className={`mainsection__balancesection__div__${balanceClass}`}
                            >
                                R$ {balance}
                            </h2>
                        </div>
                        <div
                            onClick={toggleBalanceVisiblity}
                            className={`mainsection__balancesection__div__${eyeClass}`}
                        >
                            {eyeIcon}
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
                                    R$ {balance}
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
                                    R$ {balance}
                                </h1>
                            </div>
                        </div>
                    </section>
                    <Link to="/profile/manageaccount">
                        <button className="mainsection__bankdatasection__manageaccountbtn">
                            Gerenciar contas
                        </button>
                    </Link>
                    <section className="mainsection__useractions">
                        <Link to="/profile/transfers">
                            <button className="mainsection__useractions__transferbtn">
                                Fazer uma transferência
                            </button>
                        </Link>
                        <Link to="/profile/deposit">
                            <button className="mainsection__useractions__depositbtn">
                                Fazer um depósito
                            </button>
                        </Link>
                    </section>
                </section>
                <div className="mainsection__bottomdiv"></div>
            </section>
        </>
    )
}

export default BalanceInfo

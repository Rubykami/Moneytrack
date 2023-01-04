import './BalanceInfo.scss'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import BankAccount from '../BankAccount/BankAccount'
import { BalanceContext } from '../../contexts/BalanceContext'

const BalanceInfo = (): any => {
    const {
        firstAccount,
        secondAccount,
        notificationIcon,
        balanceSection,
        balanceClass,
        balance,
        eyeClass,
        eyeIcon,
        toggleBalanceVisiblity,
    }: any = useContext(BalanceContext)

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
                                className={`mainsection__balancesection__div__${String(balanceClass)}`}
                            >
                                R$ {balance}
                            </h2>
                        </div>
                        <div
                            onClick={toggleBalanceVisiblity}
                            className={`mainsection__balancesection__div__${String(eyeClass)}`}
                        >
                            {eyeIcon}
                        </div>
                    </div>
                    <section className="mainsection__bankdatasection">
                        <h3 className="mainsection__bankdatasection__title">
                            Minhas contas
                        </h3>
                        {Object.keys(firstAccount).length !== 0 ||
                        Object.keys(secondAccount).length !== 0 ? (
                            <>
                                {Object.keys(secondAccount).length !== 0 ? (
                                    <>
                                        <BankAccount
                                            bankName={Object(firstAccount).name}
                                            accountType={
                                                Object(firstAccount).accounttype
                                            }
                                            balance={
                                                Object(firstAccount)
                                                    .balancevalue
                                            }
                                        />
                                        <BankAccount
                                            bankName={
                                                Object(secondAccount).name
                                            }
                                            accountType={
                                                Object(secondAccount)
                                                    .accounttype
                                            }
                                            balance={
                                                Object(secondAccount)
                                                    .balancevalue
                                            }
                                        />
                                    </>
                                ) : (
                                        <BankAccount
                                            bankName={Object(firstAccount).name}
                                            accountType={
                                                Object(firstAccount).accounttype
                                            }
                                            balance={
                                                Object(firstAccount)
                                                    .balancevalue
                                            }
                                        />
                                )}
                            </>
                        ) : (
                            <Link to="/profile/manageaccount">
                                <BsFillPlusCircleFill className="mainsection__bankdatasection__plus" />
                            </Link>
                        )}
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

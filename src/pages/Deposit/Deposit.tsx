import './Deposit.scss'
import { useState, ChangeEvent, FormEvent, useContext } from 'react'
import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'
import Balanceinfo from '../../components/Balanceinfo/BalanceInfo'
import { DepositType } from '../../types/Deposit'
import axios from 'axios'
import { BalanceContext } from '../../contexts/BalanceContext'

const Deposit = () => {
    const { CURRENT_USER_INFO, balanceValue }: any = useContext(BalanceContext)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const [FormValues, setFormValues] = useState<DepositType>({
        depositbalancevalue: '',
        accounttype: '',
    })

    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        axios.patch(CURRENT_USER_INFO, {
            balancevalue: String(
                Number(balanceValue) + Number(FormValues.depositbalancevalue)
            ),
        })
    }

    return (
        <main className="mainsection">
            <Balanceinfo />
            <section className="mainsection__secondsectiondeposit">
                <h1 className="mainsection__secondsectiondeposit__title">
                    Deposite agora mesmo em sua carteira Organizzeta e comece a
                    ter o controle do seu dinheiro!
                </h1>
                <h2 className="mainsection__secondsectiondeposit__subtitle">
                    Formas de pagamento <br />
                    PIX: CPF: 999.999.999-99, email: contato@organizzeta.com
                </h2>
                <form
                    onSubmit={FormSubmit}
                    className="mainsection__secondsectiondeposit__form"
                >
                    <section className="mainsection__secondsectiondeposit__form__section">
                        <Input
                            name="depositbalancevalue"
                            type="number"
                            OnChange={handleInputChange}
                            placeholder="Insira a quantidade a ser depositada"
                            text="Saldo"
                            value={FormValues.depositbalancevalue}
                        />
                        <div className="mainsection__secondsectiondeposit__form__selectdiv">
                            <Select
                                onChange={handleSelectChange}
                                value={FormValues.accounttype}
                                name="accounttype"
                                selectinfo="Depositar através de:"
                                optionA="CPF"
                                optionB="Email"
                                optionC=""
                            />
                        </div>
                        <button className="mainsection__secondsectiondeposit__form__btn">
                            Depositar
                        </button>
                    </section>
                </form>
            </section>
        </main>
    )
}

export default Deposit

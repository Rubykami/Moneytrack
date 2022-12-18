import './Deposit.scss'
import { useState, ChangeEvent, FormEvent } from 'react'
import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'
import Balanceinfo from '../../components/Balanceinfo/BalanceInfo'
import { DepositType } from '../../types/Deposit'
import axios from 'axios'

const Deposit = () => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const [FormValues, setFormValues] = useState<DepositType>({
        depositbalancevalue: '',
    })

    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(e)
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
                <form onSubmit={FormSubmit} className="mainsection__secondsectiondeposit__form">
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
                                name="depositlocation"
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

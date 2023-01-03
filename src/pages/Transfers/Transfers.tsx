import './Transfers.scss'
import { useState, ChangeEvent, FormEvent } from 'react'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Balanceinfo from '../../components/Balanceinfo/BalanceInfo'
import { TransfersType } from '../../types/Transfers'
import axios from 'axios'
import getCookie from '../../hooks/getCookie'

const Transfers = () => {

    const [withdrawAccount, setWithdrawAccount] = useState('Carteira')
    const [depositAccount, setDepositAccount] = useState('Carteira')
    const [firstBankName, setFirstBankName] = useState('')
    const [secondBankName, setSecondBankName] = useState('')

    const userID = getCookie('OrganizzetaCookie_')?.slice(22, 58)

    const CURRENT_USER = `http://localhost:3001/api/v1/user/${userID}`
    const ALL_ACCOUNTS = 'http://localhost:3001/api/v1/account'

    const [FormValues, setFormValues] = useState<TransfersType>({
        transfersvalue: '',
        withdrawAccount: withdrawAccount,
        depositAccount: depositAccount
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        axios.get(ALL_ACCOUNTS)
        .then((response) => {
            const CURRENT_USER_ACCOUNTS = response.data.filter((x: any) => x['user_id'] === userID)
            setFirstBankName(CURRENT_USER_ACCOUNTS[0].name)
            setSecondBankName(CURRENT_USER_ACCOUNTS[1].name)
            if (withdrawAccount === 'Carteira' && depositAccount === 'Carteira') {
                alert('Não é permitido transferir dinheiro da sua carteira para ela mesma.')
            } else if (withdrawAccount === 'Carteira' && depositAccount === firstBankName) {

            }
        })
        e.preventDefault()
    }


    return (
        <main className="mainsection">
            <Balanceinfo />
            <section className="mainsection__transferssection">
                <h1 className="mainsection__transferssection__title">
                    Faça uma transferência de forma rápida e prática com o
                    Organizzeta!
                </h1>
                <form onSubmit={handleSubmit} className="mainsection__transferssection__form">
                    <section className="mainsection__transferssection__form__section">
                        <Input
                            name="transfersvalue"
                            type="number"
                            OnChange={handleInputChange}
                            placeholder="Insira a quantidade a ser transferida"
                            text="Saldo"
                            value={FormValues.transfersvalue}
                        />
                        <div className="mainsection__transferssection__form__selectdiv">
                            <Select
                            onChange={handleSelectChange}
                            value={FormValues.withdrawAccount}
                                name="transferlocation"
                                selectinfo="Transferir de:"
                                optionA="Carteira"
                                optionB="Banco A"
                                optionC="Banco B"
                            />
                            <Select
                            onChange={handleSelectChange}
                            value={FormValues.depositAccount}
                                name="transferdestination"
                                selectinfo="Transferir para: "
                                optionA="Carteira"
                                optionB={firstBankName}
                                optionC={secondBankName}
                            />
                        </div>
                        <button className="mainsection__transferssection__form__btn">
                            Transferir
                        </button>
                    </section>
                </form>
            </section>
        </main>
    )
}

export default Transfers

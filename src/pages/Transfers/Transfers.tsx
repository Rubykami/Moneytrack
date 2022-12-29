import './Transfers.scss'
import { useState, ChangeEvent, FormEvent } from 'react'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Balanceinfo from '../../components/Balanceinfo/BalanceInfo'
import { TransfersType } from '../../types/Transfers'
import axios from 'axios'

const Transfers = () => {


    const [FormValues, setFormValues] = useState<TransfersType>({
        transfersvalue: '',
        accounttype: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
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
                <form onSubmit={FormSubmit} className="mainsection__transferssection__form">
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
                            value={FormValues.accounttype}
                                name="transferlocation"
                                selectinfo="Transferir de:"
                                optionA="Carteira"
                                optionB="Banco A"
                                optionC="Banco B"
                            />
                            <Select
                            onChange={handleSelectChange}
                            value={FormValues.accounttype}
                                name="transferdestination"
                                selectinfo="Transferir para: "
                                optionA="Carteira"
                                optionB="Banco A"
                                optionC="Banco B"
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

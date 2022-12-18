import './ManageAccount.scss'
import { useState, ChangeEvent, FormEvent } from 'react'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import BalanceInfo from '../../components/Balanceinfo/BalanceInfo'
import { ManageAccountTypes } from '../../types/ManageAccount'
import axios from 'axios'

const ManageAccount = () => {

    const [FormValues, setFormValues] = useState<ManageAccountTypes>({
        bank1name: '',
        bank1ownername: '',
        bank1CPFvalue: '',
        bank1accountnumber: '',
        bank1agencynumber: '',
        bank1balancevalue: '',
        bank2name: '',
        bank2ownername: '',
        bank2CPFvalue: '',
        bank2accountnumber: '',
        bank2agencynumber: '',
        bank2balancevalue: '',
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const FormSubmit = (e:  FormEvent<HTMLFormElement>) => {
        console.log(e)
    }


    return (
        <main className="mainsection">
            <BalanceInfo />
            <section className="mainsection__secondsectionmngacc">
                <div className="mainsection__secondsectionmngacc__firstbank">
                    <h1 className="mainsection__secondsectionmngacc__firstbank__title">
                        Nubank
                    </h1>
                    <h2 className="mainsection__secondsectionmngacc__firstbank__subtitle">
                        Dados cadastrados
                    </h2>
                    <form onSubmit={FormSubmit} className="mainsection__secondsectionmngacc__firstbank__form">
                        <Input
                            name="bank1name"
                            type="text"
                            text="Nome do Banco"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.bank1name}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank1ownername"
                            type="text"
                            text="Nome do Titular"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.bank1ownername}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank1CPFownername"
                            type="text"
                            text="CPF do Titular"
                            placeholder="Insira o CPF do Titular"
                            value={FormValues.bank1CPFvalue}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank1accountnumber"
                            type="text"
                            text="Número da conta"
                            placeholder="Insira o número da conta"
                            value={FormValues.bank1accountnumber}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank1agencynumbername"
                            type="text"
                            text="Número da agência"
                            placeholder="Insira o número da agência"
                            value={FormValues.bank1agencynumber}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank1balancevalue"
                            type="text"
                            text="Quantidade de saldo"
                            placeholder="Insira a quantidade de saldo disponível"
                            value={FormValues.bank1balancevalue}
                            OnChange={handleInputChange}
                        />
                        <Select
                            name="accounttype"
                            selectinfo="Tipo de conta"
                            optionA="Conta Corrente"
                            optionB="Conta Poupança"
                            optionC=""
                        />
                        <button className="mainsection__secondsectionmngacc__btn">
                            Cadastrar
                        </button>
                    </form>
                </div>
                <div className="mainsection__secondsectionmngacc__secondbank">
                    <h1 className="mainsection__secondsectionmngacc__secondbank__title">
                        Banco Inter
                    </h1>
                    <h2 className="mainsection__secondsectionmngacc__secondbank__subtitle">
                        Dados cadastrados
                    </h2>
                    <form className="mainsection__secondsectionmngacc__secondbank__form">
                        <Input
                            name="bank2name"
                            type="text"
                            text="Nome do Banco"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.bank2name}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank2ownername"
                            type="text"
                            text="Nome do Titular"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.bank2ownername}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank2CPFownervalue"
                            type="text"
                            text="CPF do Titular"
                            placeholder="Insira o CPF do Titular"
                            value={FormValues.bank2CPFvalue}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank2accountnumber"
                            type="text"
                            text="Número da conta"
                            placeholder="Insira o número da conta"
                            value={FormValues.bank2accountnumber}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank2agencynumber"
                            type="text"
                            text="Número da agência"
                            placeholder="Insira o número da agência"
                            value={FormValues.bank2agencynumber}
                            OnChange={handleInputChange}
                        />
                        <Input
                            name="bank2balancevalue"
                            type="text"
                            text="Quantidade de saldo"
                            placeholder="Insira a quantidade de saldo disponível"
                            value={FormValues.bank2balancevalue}
                            OnChange={handleInputChange}
                        />
                        <Select
                            name="accounttype"
                            selectinfo="Tipo de conta"
                            optionA="Conta Corrente"
                            optionB="Conta Poupança"
                            optionC=""
                        />
                        <button className="mainsection__secondsectionmngacc__btn">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default ManageAccount

import './ManageAccount.scss'
import { useState, ChangeEvent, FormEvent } from 'react'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import BalanceInfo from '../../components/Balanceinfo/BalanceInfo'
import { IManageAccount } from '../../interfaces/ManageAccount'
import axios from 'axios'
import Cookie from 'js-cookie'

interface ManageAccountValidation {
    name?: string
    user_id?: string
    ownercpfnumber?: string
    accountnumber?: string
    securitycode?: string
    balancevalue?: string
    accounttype?: string
}

const ManageAccount: React.FC = () => {

    const [FormValues, setFormValues] = useState<IManageAccount>({
        name: '',
        user_id: Cookie.get('OrganizzetaCookie_')?.slice(22, 58),
        ownercpfnumber: '',
        accountnumber: '',
        securitycode: '',
        balancevalue: '',
        accounttype: 'Conta Poupança',
    })
    const [formErrors, setFormErrors] = useState<ManageAccountValidation>({})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const API_ACCOUNT_URL = 'http://localhost:3001/api/v1/account'

    const validate = (
        values: ManageAccountValidation
    ): ManageAccountValidation => {
        const errors: ManageAccountValidation = {}
        const regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
        if (!values.name) {    // eslint-disable-line
            errors.name = 'Inserir o nome do banco é obrigatório!'
        }
        if (!values.ownercpfnumber) {    // eslint-disable-line
            errors.ownercpfnumber = 'Inserir o CPF do titular é obrigatório!'
        } if (!regex.test(values.ownercpfnumber ?? '')) {
            errors.ownercpfnumber = 'Insira um número de CPF válido!'
        }
        if (!values.accountnumber) {       // eslint-disable-line
            errors.accountnumber = 'Inserir o número da conta é obrigatório!'
        } if ((values.accountnumber ?? '').length < 16) {
            errors.accountnumber = 'A conta deve ter 16 números'
        }
        if (!values.securitycode) {       // eslint-disable-line
            errors.securitycode = 'O código de segurança é obrigatório!'
        } if ((values.securitycode ?? '').length < 3) {
            errors.securitycode = 'O código de segurança deve ter 3 dígitos'
        }
        if (!values.balancevalue) {          // eslint-disable-line

            errors.balancevalue = 'Inserir a quantidade de saldo é obrigatório!'
        }
        return errors
    }

    
    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
        ): Promise<any> => {
            e.preventDefault()
        if (Object.keys(validate(FormValues)).length === 0) {
            await axios
                .post(API_ACCOUNT_URL, FormValues)
                .then((response) => {
                    alert('Conta criada com sucesso!')
                    window.location.reload()
                })
                .catch((response) => {
                    alert('Só é permitido ter 2 contas de banco por usuário.')
                })
        } else {
            setFormErrors(validate(FormValues))
        }
    }

    return (
        <main className="mainsection">
            <BalanceInfo />
            <section className="mainsection__secondsectionmngacc">
                <div className="mainsection__secondsectionmngacc__div">
                    <h1 className="mainsection__secondsectionmngacc__div__title">
                        Banco
                    </h1>
                    <h2 className="mainsection__secondsectionmngacc__div__subtitle">
                        Dados cadastrais
                    </h2>
                    <form 
                        onSubmit={handleSubmit}      // eslint-disable-line
                        className="mainsection__secondsectionmngacc__div__form"
                    >
                        <Input
                            name="name"
                            type="text"
                            text="Nome do Banco"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.name}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankname__errors">
                            {formErrors.name}
                        </p>
                        <Input
                            name="ownercpfnumber"
                            type="text"
                            text="CPF do Titular"
                            placeholder="Insira o CPF do Titular"
                            value={FormValues.ownercpfnumber}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankCPFvalue__errors">
                            {formErrors.ownercpfnumber}
                        </p>
                        <Input
                            name="accountnumber"
                            type="text"
                            text="Número da conta"
                            placeholder="Insira o número da conta"
                            value={FormValues.accountnumber}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankaccountnumber__errors">
                            {formErrors.accountnumber}
                        </p>
                        <Input
                            name="securitycode"
                            type="text"
                            text="Código de segurança"
                            placeholder="Insira o código de segurança"
                            value={FormValues.securitycode}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__banksecuritynumber__errors">
                            {formErrors.securitycode}
                        </p>
                        <Input
                            name="balancevalue"
                            type="text"
                            text="Quantidade de saldo"
                            placeholder="Insira a quantidade de saldo disponível"
                            value={FormValues.balancevalue}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankbalancevalue__errors">
                            {formErrors.balancevalue}
                        </p>
                        <Select
                            onChange={handleSelectChange}
                            value={FormValues.accounttype}
                            name="accounttype"
                            selectinfo="Tipo de conta"
                            optionA="Conta Poupança"
                            optionB="Conta Corrente"
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

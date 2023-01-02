import './ManageAccount.scss'
import {
    useState,
    ChangeEvent,
    FormEvent,
    useMemo,
    useEffect,
} from 'react'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import BalanceInfo from '../../components/Balanceinfo/BalanceInfo'
import { ManageAccountTypes } from '../../types/ManageAccount'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import getCookie from '../../hooks/getCookie'

interface ManageAccountValidation {
    name?: string
    user_id?: string
    ownercpfnumber?: string
    accountnumber?: string
    securitycode?: string
    balancevalue?: string
    accounttype?: string
}

const ManageAccount = () => {
    const navigate = useNavigate()

    const [FormValues, setFormValues] = useState<ManageAccountTypes>({
        name: '',
        user_id: getCookie('OrganizzetaCookie_')?.slice(22, 58)!,
        ownercpfnumber: '',
        accountnumber: '',
        securitycode: '',
        balancevalue: '',
        accounttype: 'Conta Poupança',
    })
    const [formErrors, setFormErrors] = useState<ManageAccountValidation>({})
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const API_ACCOUNT_URL = 'http://localhost:3001/api/v1/account'

    const validate = (
        values: ManageAccountValidation
    ): ManageAccountValidation => {
        const errors: ManageAccountValidation = {}
        const regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
        if (!values.name) {
            errors.name = 'Inserir o nome do banco é obrigatório!'
        }
        if (!values.ownercpfnumber) {
            errors.ownercpfnumber = 'Inserir o CPF do titular é obrigatório!'
        } else if (!regex.test(values.ownercpfnumber)) {
            errors.ownercpfnumber = 'Insira um número de CPF válido!'
        }
        if (!values.accountnumber) {
            errors.accountnumber =
                'Inserir o número da conta é obrigatório!'
        } else if (values.accountnumber.length < 16) {
            errors.accountnumber = 'A conta deve ter 16 números'
        }
        if (!values.securitycode) {
            errors.securitycode = 'O código de segurança é obrigatório!'
        } else if (values.securitycode.length < 3) {
            errors.securitycode =
                'O código de segurança deve ter 3 dígitos'
        }
        if (!values.balancevalue) {
            errors.balancevalue =
                'Inserir a quantidade de saldo é obrigatório!'
        }
        return errors
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (Object.keys(validate(FormValues)).length === 0) {
                setIsSubmit(true)
                axios.post(API_ACCOUNT_URL, FormValues).then((response) => {
                    alert('Conta criada com sucesso!')
                }).catch((response) => {
                    alert('Só é permitido ter 2 contas de banco por usuário.')
                })
        } else {
            setFormErrors(validate(FormValues))
        }
        e.preventDefault()
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
                        onSubmit={handleSubmit}
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

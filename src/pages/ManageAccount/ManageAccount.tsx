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

interface ManageAccountValidation {
    bankname?: string
    bankownername?: string
    bankCPFvalue?: string
    bankaccountnumber?: string
    banksecuritynumber?: string
    bankbalancevalue?: string
    accounttype?: string
}

const ManageAccount = () => {
    const navigate = useNavigate()

    const [FormValues, setFormValues] = useState<ManageAccountTypes>({
        bankname: '',
        bankownername: '',
        bankCPFvalue: '',
        bankaccountnumber: '',
        banksecuritynumber: '',
        bankbalancevalue: '',
        accounttype: '',
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

    const ALL_ACCOUNTS = useMemo<any>(() => {
        return []
    }, [])

    const validate = (
        values: ManageAccountValidation
    ): ManageAccountValidation => {
        const errors: ManageAccountValidation = {}
        const regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
        if (!values.bankname) {
            errors.bankname = 'Inserir o nome do banco é obrigatório!'
        }
        if (!values.bankownername) {
            errors.bankownername = 'Inserir o nome do titular é obrigatório!'
        }
        if (!values.bankCPFvalue) {
            errors.bankCPFvalue = 'Inserir o CPF do titular é obrigatório!'
        } else if (!regex.test(values.bankCPFvalue)) {
            errors.bankCPFvalue = 'Insira um número de CPF válido!'
        }
        if (!values.bankaccountnumber) {
            errors.bankaccountnumber =
                'Inserir o número da conta é obrigatório!'
        } else if (values.bankaccountnumber.length < 16) {
            errors.bankaccountnumber = 'A conta deve ter 16 números'
        }
        if (!values.banksecuritynumber) {
            errors.banksecuritynumber = 'O código de segurança é obrigatório!'
        } else if (values.banksecuritynumber.length < 3) {
            errors.banksecuritynumber =
                'O código de segurança deve ter 3 dígitos'
        }
        if (!values.bankbalancevalue) {
            errors.bankbalancevalue =
                'Inserir a quantidade de saldo é obrigatório!'
        }
        return errors
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (Object.keys(validate(FormValues)).length === 0) {
            if (ALL_ACCOUNTS.length < 2) {
                setIsSubmit(true)
                axios.post(API_ACCOUNT_URL, FormValues).then((response) => {
                    ALL_ACCOUNTS.push(response)
                })
            } else {
                alert('Só é possível ter 2 contas de banco ativas!')
                e.preventDefault()
            }
        } else {
            e.preventDefault()
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
                        Dados cadastrados
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="mainsection__secondsectionmngacc__div__form"
                    >
                        <Input
                            name="bankname"
                            type="text"
                            text="Nome do Banco"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.bankname}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankname__errors">
                            {formErrors.bankname}
                        </p>
                        <Input
                            name="bankownername"
                            type="text"
                            text="Nome do Titular"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.bankownername}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankownername__errors">
                            {formErrors.bankownername}
                        </p>
                        <Input
                            name="bankCPFvalue"
                            type="text"
                            text="CPF do Titular"
                            placeholder="Insira o CPF do Titular"
                            value={FormValues.bankCPFvalue}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankCPFvalue__errors">
                            {formErrors.bankCPFvalue}
                        </p>
                        <Input
                            name="bankaccountnumber"
                            type="text"
                            text="Número da conta"
                            placeholder="Insira o número da conta"
                            value={FormValues.bankaccountnumber}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankaccountnumber__errors">
                            {formErrors.bankaccountnumber}
                        </p>
                        <Input
                            name="banksecuritynumber"
                            type="text"
                            text="Código de segurança"
                            placeholder="Insira o código de segurança"
                            value={FormValues.banksecuritynumber}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__banksecuritynumber__errors">
                            {formErrors.banksecuritynumber}
                        </p>
                        <Input
                            name="bankbalancevalue"
                            type="text"
                            text="Quantidade de saldo"
                            placeholder="Insira a quantidade de saldo disponível"
                            value={FormValues.bankbalancevalue}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankbalancevalue__errors">
                            {formErrors.bankbalancevalue}
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

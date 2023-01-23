import { IManageAccount } from "../interfaces/ManageAccount";
import axios from 'axios'
import Cookie from 'js-cookie'
import { BalanceContext } from "./BalanceContext";
import { useState, ChangeEvent, FormEvent, useContext, createContext } from 'react'

export const ManageAccountContext = createContext({})

interface ManageAccountValidation {
    name?: string
    user_id?: string
    ownercpfnumber?: string
    accountnumber?: string
    securitycode?: string
    balancevalue?: string
    accounttype?: string
}

export const ManageAccountContextProvider: React.FC<any> = ({children}) => {

    const { CURRENT_USER_INFO }: any = useContext(BalanceContext)

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
            const CURRENT_USER = axios.get(CURRENT_USER_INFO)
            if ((await CURRENT_USER).data.accounts.length < 2) {
                await axios
                    .post(API_ACCOUNT_URL, FormValues)
                    .then(() => {
                        alert('Conta criada com sucesso!')
                        window.location.reload()
                    })
            } else {
                alert('Só é permitido 2 contas ativas por usuário.')
            }
        } else {
            setFormErrors(validate(FormValues))
        }
    }

    return (
        <ManageAccountContext.Provider value={{
            handleSubmit, handleInputChange, handleSelectChange, formErrors
        }}>
            {children}
        </ManageAccountContext.Provider>
    )
}
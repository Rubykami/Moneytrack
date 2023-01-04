import {
    createContext,
    ChangeEvent,
    FormEvent,
    useState,
    useContext,
} from 'react'
import { DepositType } from '../interfaces/Deposit'
import { BalanceContext } from './BalanceContext'
import axios from 'axios'

export const DepositContext = createContext({})

export const DepositContextProvider = ({ children }: any): any => {
    const { CURRENT_USER_INFO, balanceValue }: any = useContext(BalanceContext)

    const [FormValues, setFormValues] = useState<DepositType>({
        depositbalancevalue: '',
        accounttype: '',
    })

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): any => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): any => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const FormSubmit = (e: FormEvent<HTMLFormElement>): any => {
        return axios.patch(CURRENT_USER_INFO, {
            balancevalue: String(
                Number(balanceValue) + Number(FormValues.depositbalancevalue)
            ),
        })
    }

    return (
        <DepositContext.Provider
            value={{
                FormSubmit,
                handleInputChange,
                handleSelectChange,
                FormValues,
            }}
        >
            {children}
        </DepositContext.Provider>
    )
}

import {
    createContext,
    ChangeEvent,
    FormEvent,
    useState,
    useContext,
} from 'react'
import { IDeposit } from '../interfaces/Deposit'
import { BalanceContext } from './BalanceContext'
import axios from 'axios'
import { IDepositProps } from '../interfaces/DepositProps'
import { BalanceConsts } from '../interfaces/DepositBalanceConsts'

export const DepositContext = createContext({})

export const DepositContextProvider: React.FC<IDepositProps> = ({
    children,
}) => {
    const { CURRENT_USER_INFO, balanceValue }: BalanceConsts =
        useContext(BalanceContext)

    const [FormValues, setFormValues] = useState<IDeposit>({
        depositbalancevalue: '',
        accounttype: '',
    })

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const FormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
        return await axios.patch(String(CURRENT_USER_INFO), {
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

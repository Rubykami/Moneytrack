import { ChangeEventHandler } from "react"
import { IDeposit } from "./Deposit"

export interface IDepositContextProps {
    FormSubmit?: any,
    handleInputChange?: ChangeEventHandler<HTMLSelectElement>,
    handleSelectChange?: ChangeEventHandler<HTMLSelectElement>,
    FormValues?: IDeposit
}
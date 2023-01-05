import { ChangeEventHandler } from "react"
import { IDeposit } from "./Deposit"

export interface IDepositContextProps {
    FormSubmit?: any,
    handleInputChange?: any,
    handleSelectChange?: any,
    FormValues?: IDeposit
}
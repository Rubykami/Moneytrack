import { useContext, ChangeEvent, FormEvent, createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { BalanceContext } from './BalanceContext'
import { ITransfers } from '../interfaces/Transfers'
import { ManageAccountContext } from './ManageAccountContext'

export const TransfersContext = createContext({})

export const TransfersContextProvider: React.FC<any> = ({children}) => {

    const {
        balanceValue,
        firstAccount,
        userID,
        secondAccount,
        CURRENT_USER_INFO,
    }: any = useContext(BalanceContext)
    
    const [withdrawAccount, setWithdrawAccount] = useState('Carteira')
    const [depositAccount, setDepositAccount] = useState('Carteira')
    const [firstBankName, setFirstBankName] = useState('')
    const [secondBankName, setSecondBankName] = useState('')

    const firstAccountID = firstAccount ? firstAccount.id : [] // eslint-disable-line
    const secondAccountID = secondAccount ? secondAccount.id : [] // eslint-disable-line

    const CURRENT_USER_FIRST_ACCOUNT = `${String(
        process.env.REACT_APP_USERS_ACCOUNT_INFO
    )}`.concat(`/${String(firstAccountID)}`)
    const CURRENT_USER_SECOND_ACCOUNT = `${String(
        process.env.REACT_APP_USERS_ACCOUNT_INFO
    )}`.concat(`/${String(secondAccountID)}`)

    const [FormValues, setFormValues] = useState<ITransfers>({
        transfersvalue: '', 
        withdrawAccount: withdrawAccount,      // eslint-disable-line
        depositAccount: depositAccount,  // eslint-disable-line
    })

    const USERS_ACCOUNT_INFO = `${String(
        process.env.REACT_APP_USERS_ACCOUNT_INFO
    )}`

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
        switch (name) {
            case 'withdrawAccount':
                setWithdrawAccount(value)
                break
            case 'depositAccount':
                setDepositAccount(value)
                break
        }
    }


    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<any> => {
        if (withdrawAccount === 'Carteira' && depositAccount === 'Carteira') {
            e.preventDefault()
            alert(
                'Não é permitido transferir dinheiro da sua carteira para ela mesma.'
            )
        } else if (
            withdrawAccount === 'Carteira' &&
            depositAccount === firstBankName
        ) {
            e.preventDefault()
            await axios.patch(CURRENT_USER_INFO, {
                balancevalue: String(
                    Number(balanceValue) - Number(FormValues.transfersvalue)
                    ),
                })
                await axios.patch(CURRENT_USER_FIRST_ACCOUNT, {
                    // eslint-disable-line
                    balancevalue: String(
                        Number(firstAccount.balancevalue) +
                        Number(FormValues.transfersvalue)
                        ),
                    })
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } else if (
            withdrawAccount === 'Carteira' &&
            depositAccount === secondBankName
        ) {
            e.preventDefault()
            await axios.patch(CURRENT_USER_SECOND_ACCOUNT, { 
                balancevalue: String(
                    Number(secondAccount.balancevalue) + Number(FormValues.transfersvalue)
                    ),
                }) 
                await axios.patch(CURRENT_USER_INFO, {   // eslint-disable-line
                    balancevalue: String(
                        Number(balanceValue) - Number(FormValues.transfersvalue)
                    ),
                })
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
        } else if (
            withdrawAccount === firstBankName &&
            depositAccount === 'Carteira'
        ) {
            e.preventDefault()
            await axios.patch(CURRENT_USER_FIRST_ACCOUNT, {
                balancevalue: String(
                    Number(firstAccount.balancevalue) -
                        Number(FormValues.transfersvalue)
                ),
            })
            await axios.patch(CURRENT_USER_INFO, {
                balancevalue: String(
                    Number(balanceValue) + Number(FormValues.transfersvalue)
                ),
            })
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        } else if (
            withdrawAccount === secondBankName &&
            depositAccount === 'Carteira'
        ) {
            e.preventDefault()
            await axios.patch(CURRENT_USER_SECOND_ACCOUNT, {
                balancevalue: String(
                    Number(secondAccount.balancevalue) -
                        Number(FormValues.transfersvalue)
                ),
            })
            await axios.patch(CURRENT_USER_INFO, {
                balancevalue: String(
                    Number(balanceValue) + Number(FormValues.transfersvalue)
                ),
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } else if (
            withdrawAccount === firstBankName &&
            depositAccount === secondBankName
        ) {
            e.preventDefault()
            await axios.patch(CURRENT_USER_FIRST_ACCOUNT, {
                balancevalue: String(
                    Number(firstAccount.balancevalue) -
                        Number(FormValues.transfersvalue)
                ),
            })
            await axios.patch(CURRENT_USER_SECOND_ACCOUNT, {
                balancevalue: String(
                    Number(secondAccount.balancevalue) +
                        Number(FormValues.transfersvalue)
                ),
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } else if (
            withdrawAccount === secondBankName &&
            depositAccount === firstBankName
        ) {
            e.preventDefault()
            await axios.patch(CURRENT_USER_SECOND_ACCOUNT, {
                balancevalue: String(
                    Number(secondAccount.balancevalue) -
                        Number(FormValues.transfersvalue)
                ),
            })
            await axios.patch(CURRENT_USER_FIRST_ACCOUNT, {
                balancevalue: String(
                    Number(firstAccount.balancevalue) +
                        Number(FormValues.transfersvalue)
                ),
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        }
        else if (
            withdrawAccount === firstBankName &&
            depositAccount === firstBankName
        ) {
            e.preventDefault()
            alert('Não é permitido transferir entre duas contas de banco iguais.')
        }
        else if (
            withdrawAccount === secondBankName &&
            depositAccount === secondBankName
        ) {
            e.preventDefault()
            alert('Não é permitido transferir entre duas contas de banco iguais.')
        }
    }

    const getUsersAccountInfo = async (): Promise<void> => {
        await axios.get(USERS_ACCOUNT_INFO).then(async (response) => {
            const sortedData = response.data.sort(
                (a: any, b: any) => a.id - b.id
            )
            const CURRENT_USER_ACCOUNTS = await sortedData.filter(
                (x: { user_id: string }) => x.user_id === userID
            )
            setFirstBankName(CURRENT_USER_ACCOUNTS[0].name)
            setSecondBankName(CURRENT_USER_ACCOUNTS[1].name)
        })
    }

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getUsersAccountInfo()
    }, [])


    return (
        <ManageAccountContext.Provider value={{
            handleInputChange, handleSelectChange, handleSubmit
        }}>
            {children}
        </ManageAccountContext.Provider>
    )
}
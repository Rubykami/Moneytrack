/* eslint-disable object-shorthand */
import './Transfers.scss'
import { useState, ChangeEvent, FormEvent, useEffect, useContext } from 'react'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Balanceinfo from '../../components/Balanceinfo/BalanceInfo'
import { ITransfers } from '../../interfaces/Transfers'
import axios from 'axios'
import { BalanceContext } from '../../contexts/BalanceContext'

const Transfers: React.FC = () => {
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
        withdrawAccount: withdrawAccount,
        depositAccount: depositAccount,
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
        <main className="mainsection">
            <Balanceinfo />
            <section className="mainsection__transferssection">
                <h1 className="mainsection__transferssection__title">
                    Faça uma transferência de forma rápida e prática com o
                    Organizzeta!
                </h1>
                <form
                    onSubmit={handleSubmit} // eslint-disable-line
                    className="mainsection__transferssection__form"
                >
                    <section className="mainsection__transferssection__form__section">
                        <Input
                            name="transfersvalue"
                            type="number"
                            OnChange={handleInputChange}
                            placeholder="Insira a quantidade a ser transferida"
                            text="Saldo"
                            value={FormValues.transfersvalue}
                        />
                        <div className="mainsection__transferssection__form__selectdiv">
                            <Select
                                onChange={handleSelectChange}
                                value={FormValues.withdrawAccount}
                                name="withdrawAccount"
                                selectinfo="Transferir de:"
                                optionA="Carteira"
                                optionB={firstBankName}
                                optionC={secondBankName}
                            />
                            <Select
                                onChange={handleSelectChange}
                                value={FormValues.depositAccount}
                                name="depositAccount"
                                selectinfo="Transferir para: "
                                optionA="Carteira"
                                optionB={firstBankName}
                                optionC={secondBankName}
                            />
                        </div>
                        <button className="mainsection__transferssection__form__btn">
                            Transferir
                        </button>
                    </section>
                </form>
            </section>
        </main>
    )
}

export default Transfers

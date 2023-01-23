import { createContext } from 'react'
import { BalanceContextProvider } from './BalanceContext'
import { IChildrenProps } from '../interfaces/ChildrenProps'
import { LoginContextProvider } from './LoginContext'
import { SignupContextProvider } from './SignupContext'
import { DepositContextProvider } from './DepositContext'
import { useNavigate } from 'react-router-dom'
import { ManageAccountContextProvider } from './ManageAccountContext'
import { TransfersContextProvider } from './TransfersContext'

export const GlobalContext = createContext({})

export const GlobalContextProvider: React.FC<IChildrenProps> = ({
    children,
}) => {
    const Navigate = useNavigate()

    const RedirectToSignupPage = (): void => {
        Navigate('/signup')
    }

    return (
        <BalanceContextProvider>
            <DepositContextProvider>
                <SignupContextProvider>
                    <LoginContextProvider>
                        <ManageAccountContextProvider>
                            <TransfersContextProvider>
                                <GlobalContext.Provider
                                    value={{
                                        RedirectToSignupPage,
                                    }}
                                >
                                    {children}
                                </GlobalContext.Provider>
                            </TransfersContextProvider>
                        </ManageAccountContextProvider>
                    </LoginContextProvider>
                </SignupContextProvider>
            </DepositContextProvider>
        </BalanceContextProvider>
    )
}

export default GlobalContextProvider

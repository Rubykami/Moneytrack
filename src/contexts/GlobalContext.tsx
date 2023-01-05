import { createContext } from 'react'
import { BalanceContextProvider } from './BalanceContext'
import { IChildrenProps } from '../interfaces/ChildrenProps'
import { LoginContextProvider } from './LoginContext'
import { SignupContextProvider } from './SignupContext'
import { DepositContextProvider } from './DepositContext'

export const GlobalContext = createContext({})

export const GlobalContextProvider: React.FC<IChildrenProps> = ({
    children,
}) => {
    return (
        <BalanceContextProvider>
            <DepositContextProvider>
                <SignupContextProvider>
                    <LoginContextProvider>
                        <GlobalContext.Provider value={{}}>
                            {children}
                        </GlobalContext.Provider>
                    </LoginContextProvider>
                </SignupContextProvider>
            </DepositContextProvider>
        </BalanceContextProvider>
    )
}

export default GlobalContextProvider

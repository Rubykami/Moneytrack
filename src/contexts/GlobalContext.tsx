import { createContext } from 'react'
import { BalanceContextProvider } from './BalanceContext'
import { IChildrenProps } from '../interfaces/ChildrenProps'
import { LoginContextProvider } from './LoginContext'
import { SignupContextProvider } from './SignupContext'

export const GlobalContext = createContext({})

export const GlobalContextProvider: React.FC<IChildrenProps> = ({
    children,
}) => {
    return (
        <SignupContextProvider>
            <LoginContextProvider>
                <BalanceContextProvider>
                    <GlobalContext.Provider value={{}}>
                        {children}
                    </GlobalContext.Provider>
                </BalanceContextProvider>
            </LoginContextProvider>
        </SignupContextProvider>
    )
}

export default GlobalContextProvider

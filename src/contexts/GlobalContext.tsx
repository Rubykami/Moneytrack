import { createContext } from 'react'
import { BalanceContextProvider } from './BalanceContext'
import { IChildrenProps } from '../interfaces/ChildrenProps'

export const GlobalContext = createContext({})

export const GlobalContextProvider: React.FC<IChildrenProps> = ({
    children,
}) => {
    return (
        <BalanceContextProvider>
            <GlobalContext.Provider value={{}}>
                {children}
            </GlobalContext.Provider>
        </BalanceContextProvider>
    )
}

export default GlobalContextProvider

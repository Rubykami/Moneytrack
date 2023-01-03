import { createContext } from 'react'
import { BalanceContextProvider } from './BalanceContext'

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({ children }: any) => {
    return (
        <BalanceContextProvider>
            <GlobalContext.Provider value={{}}>
                {children}
            </GlobalContext.Provider>
        </BalanceContextProvider>
    )
}

export default GlobalContextProvider

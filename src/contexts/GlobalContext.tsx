import { createContext, useContext} from 'react'

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}: any) => {



    return (
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
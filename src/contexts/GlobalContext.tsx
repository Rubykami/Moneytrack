import { createContext} from 'react'

const GlobalContext = createContext({})

const GlobalContextProvider = ({children}: any) => {

    return (
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
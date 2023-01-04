
import { createContext, useState, useRef, useMemo, useEffect} from 'react'
import getCookie from '../hooks/getCookie'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from 'axios'


export const BalanceContext = createContext({})

export const BalanceContextProvider = ({children}: any) => {

    
    const [balanceValue, setBalanceValue] = useState(0)
    const [firstAccount, setFirstAccount] = useState({})
    const [secondAccount, setSecondAccount] = useState({})
    const [visible, setVisibility] = useState<Boolean>(false)
    
    const balanceSection = useRef<HTMLHeadingElement>(null)
    
    const userID = getCookie('OrganizzetaCookie_')?.slice(22, 58)
    const CURRENT_USER_INFO = `${process.env.REACT_APP_USERS_INFO}`.concat(`/${userID}`)
    
    const notificationIcon = <IoMdNotificationsOutline />
    
    const HIDDEN_NUMBERS = '*'.repeat(String(balanceValue).length)
    
    const HIDDEN_BALANCE = 'hiddenbalance'
    const OPENED_EYE_CLASS = 'openedeye'
    const CLOSED_EYE_CLASS = 'closedeye'
    const VISIBLE_BALANCE = 'visiblebalance'
    
    const balance = visible ? balanceValue : HIDDEN_NUMBERS

    const eyeIcon = useMemo<JSX.Element>(() => {
        return visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
    }, [visible])
    const balanceClass = useMemo<String>(() => {
        return visible ? VISIBLE_BALANCE : HIDDEN_BALANCE
    }, [visible])
    const eyeClass = useMemo<String>(() => {
        return visible ? OPENED_EYE_CLASS : CLOSED_EYE_CLASS
    }, [visible])


    const toggleBalanceVisiblity = () => {
        setVisibility(!visible)
    }

    const getCurrentUserInfo = () => {
        axios.get(CURRENT_USER_INFO).then((CURRENT_USER) => {
            setFirstAccount(CURRENT_USER.data.accounts[0])
            setSecondAccount(CURRENT_USER.data.accounts[1])
            setBalanceValue(CURRENT_USER.data.balancevalue)
            console.log(CURRENT_USER)
        })}

        useEffect(() => {
            getCurrentUserInfo()
        },[]) // eslint-disable-line



    return (
        <BalanceContext.Provider
            value={{
                setBalanceValue,
                setFirstAccount,
                setSecondAccount,
                setVisibility,
                toggleBalanceVisiblity,
                balanceValue,
                firstAccount,
                secondAccount,
                balanceSection,
                notificationIcon,
                OPENED_EYE_CLASS,
                CLOSED_EYE_CLASS,
                HIDDEN_BALANCE,
                VISIBLE_BALANCE,
                HIDDEN_NUMBERS,
                visible,
                eyeIcon,
                balanceClass,
                eyeClass,
                balance,
                CURRENT_USER_INFO,
                userID

            }}
        >
            {children}
        </BalanceContext.Provider>
    )
}

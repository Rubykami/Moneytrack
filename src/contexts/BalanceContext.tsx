import React, {
    createContext,
    useState,
    useRef,
    useMemo,
    useEffect,
} from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from 'axios'
import { IBalanceProps } from '../interfaces/BalanceProps'
import { IAccountProps } from '../interfaces/AccountProps'
import Cookie from 'js-cookie'

export const BalanceContext = createContext({})

export const BalanceContextProvider: React.FC<IBalanceProps> = ({
    children,
}) => {
    const [balanceValue, setBalanceValue] = useState<string>('0')
    const [firstAccount, setFirstAccount] = useState<IAccountProps>({
        balancevalue: '',
        name: '',
        ownercpfnumber: '',
        accountnumber: '',
        securitycode: 0,
        accounttype: '',
        user_id: '',
    })
    const [secondAccount, setSecondAccount] = useState<IAccountProps>({
        balancevalue: '',
        name: '',
        ownercpfnumber: '',
        accountnumber: '',
        securitycode: 0,
        accounttype: '',
        user_id: '',
    })
    const [visible, setVisibility] = useState<boolean>(false)

    const firstAcountKeys = firstAccount ? Object.keys(firstAccount) : []            // eslint-disable-line
    const secondAcountKeys = secondAccount ? Object.keys(secondAccount) : []            // eslint-disable-line

    const balanceSection = useRef<HTMLHeadingElement>(null)

    const userID = Cookie.get('OrganizzetaCookie_')?.slice(22, 58)
    const CURRENT_USER_INFO = `${String(
        process.env.REACT_APP_USERS_INFO
    )}`.concat(`/${String(userID)}`)

    const notificationIcon = <IoMdNotificationsOutline />

    const HIDDEN_NUMBERS: string = '*'.repeat(String(balanceValue).length)

    const HIDDEN_BALANCE: string = 'hiddenbalance'
    const OPENED_EYE_CLASS: string = 'openedeye'
    const CLOSED_EYE_CLASS: string = 'closedeye'
    const VISIBLE_BALANCE: string = 'visiblebalance'

    const balance: string = visible ? balanceValue : HIDDEN_NUMBERS //eslint-disable-line

    const eyeIcon = useMemo<JSX.Element>(() => {
        return visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> //eslint-disable-line
    }, [visible])
    const balanceClass = useMemo<String>(() => {
        return visible ? VISIBLE_BALANCE : HIDDEN_BALANCE //eslint-disable-line
    }, [visible])
    const eyeClass = useMemo<String>(() => {
        return visible ? OPENED_EYE_CLASS : CLOSED_EYE_CLASS //eslint-disable-line
    }, [visible])

    const toggleBalanceVisiblity = (): void => {
        setVisibility(!visible) //eslint-disable-line
    }

    const getCurrentUserInfo = async (): Promise<any> => {
        await axios.get(CURRENT_USER_INFO).then((CURRENT_USER) => {
            setFirstAccount(CURRENT_USER.data.accounts[0])
            setSecondAccount(CURRENT_USER.data.accounts[1])
            setBalanceValue(CURRENT_USER.data.balancevalue)
        })
    }

    useEffect(() => {
        void getCurrentUserInfo()
    }, []) // eslint-disable-line

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
                userID,
                firstAcountKeys, 
                secondAcountKeys
            }}
        >
            {children}
        </BalanceContext.Provider>
    )
}

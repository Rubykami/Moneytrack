import { createContext, useState, ChangeEvent, FormEvent } from 'react'
import { ILoginContextProps } from '../interfaces/LoginContextProps'
import { ILogin } from '../interfaces/Login'
import axios from 'axios'
import { ILoginValidate } from '../interfaces/LoginValidate'
import useSetCookie from '../hooks/useSetCookie'
import { ILoginErrors } from '../interfaces/LogginErrors'
import { useNavigate } from 'react-router-dom'

export const LoginContext = createContext({})

export const LoginContextProvider: React.FC<ILoginContextProps> = ({children}) => {

    const navigate = useNavigate()


    const [FormValues, setFormValues] = useState<ILogin>({
        email: '',
        password: '',
    })
    const [formErrors, setFormErrors] = useState<ILoginErrors>({})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const validate = (values: ILoginValidate): ILoginValidate => {
        const errors: ILoginValidate = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        // eslint-disable-next-line
        if (!values.email) {
            errors.email = 'Inserir o email é obrigatório!'
        } else if (!regex.test(values.email ?? '')) {
            errors.email = 'Este não é um email válido!'
        }
        if (!values.password) {  // eslint-disable-line
            errors.password = 'Inserir uma senha é obrigatório!'
        }
        return errors
    }

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<any> => {
        e.preventDefault()
        if (Object.keys(validate(FormValues)).length === 0) {
            await axios
                .post('http://localhost:3001/api/auth/sign_in', FormValues)
                .then((response) => {
                    navigate('/profile')
                    window.location.reload()
                    useSetCookie(
                        'OrganizzetaCookie_',
                        String(response.headers['access-token']) +
                            String(response.data.data['id]) +
                            String(response.headers['client'])
                    )
                })
        } else {
            setFormErrors(validate(FormValues))
        }
    }

    return (
        <LoginContext.Provider value={{formErrors, handleSubmit, handleInputChange, FormValues}}>{children}</LoginContext.Provider>
    )
}

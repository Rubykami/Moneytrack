import {
    createContext,
    ChangeEvent,
    FormEvent,
    useState,
    useRef,
    useEffect,
} from 'react'
import { ISignupProps } from '../interfaces/SignupContextProps'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ISignup } from '../interfaces/Signup'
import { ISignupValidate } from '../interfaces/SignupValidate'
import axios from 'axios'
import { ISignupErrors } from '../interfaces/SignupErrors'
import useSetCookie from '../hooks/useSetCookie'

export const SignupContext = createContext({})

export const SignupContextProvider: React.FC<ISignupProps> = ({ children }) => {



    const TEXT = 'text'
    const PASSWORD = 'password'

    const OPENED_UPPER_EYE_CLASS = 'openedUpperEye'
    const CLOSED_UPPER_EYE_CLASS = 'closedUpperEye'
    const OPENED_LOWER_EYE_CLASS = 'openedLowerEye'
    const CLOSED_LOWER_EYE_CLASS = 'closedLowerEye'

    const [upperEyeClass, setUpperEyeClass] = useState<string>(
        CLOSED_UPPER_EYE_CLASS
    )
    const [lowerEyeClass, setLowerEyeClass] = useState<string>(
        CLOSED_LOWER_EYE_CLASS
    )

    const formInitialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    const [upperEye, setUpperEye] = useState<JSX.Element>(<FaEyeSlash />)
    const [lowerEye, setLowerEye] = useState<JSX.Element>(<FaEyeSlash />)
    const [formValues, setFormValues] = useState<ISignup>(formInitialValues)
    const [formErrors, setFormErrors] = useState<ISignupErrors>({})

    const validate = (values: ISignupValidate): ISignupValidate => {
        const errors: ISignupValidate = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.name) {    // eslint-disable-line
            errors.name = 'Inserir o nome é obrigatório!'
        }
        if (!values.email) {                 // eslint-disable-line
            errors.email = 'Inserir o email é obrigatório!'
        } else if (!regex.test(values.email)) {
            errors.email = 'Este não é um email válido!'
        }
        if (!values.password) {  // eslint-disable-line
            errors.password = 'Inserir uma senha é obrigatório!'
        } else if (values.password.length < 8) {
            errors.password = 'A senha deve ter pelo menos 8 carácteres'
        }
        if (!values.password_confirmation) {   // eslint-disable-line
            errors.password_confirmation =
                'Inserir a confirmação de senha é obrigatório!'
        } else if (values.password_confirmation.length < 8) {
            errors.password_confirmation =
                'A confirmação de senha deve ter pelo menos 8 carácteres'
        }
        if (values.password !== values.password_confirmation) {
            errors.password = 'As senhas devem ser iguais'
        }
        return errors
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        if (Object.keys(validate(formValues)).length === 0) {
            await axios
                .post('http://localhost:3001/api/auth', formValues)
                .then((response) => {
                    alert('Conta criada com sucesso!. Por favor, verifique seu email.')
                    useSetCookie(
                        'OrganizzetaCookie_',
                        String(response.headers['access-token']) +   // eslint-disable-line
                            String(response.data.data['id']) +      // eslint-disable-line
                            String(response.headers['client'])      // eslint-disable-line
                    )
                }).catch((response) => {
                    console.log(response)})
        } else {
            setFormErrors(validate(formValues))
        }
    }

    const passwordInputRef = useRef<HTMLInputElement>(null)
    const confirmationPasswordInputRef = useRef<HTMLInputElement>(null)
    const upperEyeDiv = useRef<HTMLDivElement>(null)
    const lowerEyeDiv = useRef<HTMLDivElement>(null)

    const toggleUpperEyeVisibility = (): void => {
        switch (upperEyeClass) {
            case OPENED_UPPER_EYE_CLASS:
                setUpperEyeClass(CLOSED_UPPER_EYE_CLASS)
                break
            case CLOSED_UPPER_EYE_CLASS:
                setUpperEyeClass(OPENED_UPPER_EYE_CLASS)
                break
        }
    }

    const toggleLowerEyeVisibility = (): void => {
        switch (lowerEyeClass) {
            case OPENED_LOWER_EYE_CLASS:
                setLowerEyeClass(CLOSED_LOWER_EYE_CLASS)
                break
            case CLOSED_LOWER_EYE_CLASS:
                setLowerEyeClass(OPENED_LOWER_EYE_CLASS)
                break
        }
    }

    useEffect(() => {
        if (
            confirmationPasswordInputRef.current !== null &&
            passwordInputRef.current !== null
        ) {
            switch (upperEyeClass) {
                case OPENED_UPPER_EYE_CLASS:
                    setUpperEye(<FaEye />)
                    passwordInputRef.current.type = TEXT
                    break
                case CLOSED_UPPER_EYE_CLASS:
                    setUpperEye(<FaEyeSlash />)
                    passwordInputRef.current.type = PASSWORD
                    break
            }
            switch (lowerEyeClass) {
                case CLOSED_LOWER_EYE_CLASS:
                    setLowerEye(<FaEyeSlash />)
                    confirmationPasswordInputRef.current.type = PASSWORD
                    break
                case OPENED_LOWER_EYE_CLASS:
                    setLowerEye(<FaEye />)
                    confirmationPasswordInputRef.current.type = TEXT
                    break
            }
        }
    }, [upperEyeClass, lowerEyeClass])

    return (
        <SignupContext.Provider
            value={{
                handleSubmit,
                formValues,
                handleInputChange,
                formErrors,
                passwordInputRef,
                confirmationPasswordInputRef,
                upperEye,
                upperEyeDiv,
                toggleUpperEyeVisibility,
                upperEyeClass,
                lowerEyeDiv,
                toggleLowerEyeVisibility,
                lowerEyeClass,
                lowerEye,
            }}
        >
            {children}
        </SignupContext.Provider>
    )
}

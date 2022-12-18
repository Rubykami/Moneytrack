import './Signup.scss'
import { ChangeEvent, FormEvent, useState, useRef, useEffect } from 'react'
import Input from '../../components/Input/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { SignupType } from '../../types/Signup'

const Signup = () => {

    const TEXT = 'text'
    const PASSWORD = 'password'

    const OPENED_UPPER_EYE_CLASS = 'openedUpperEye'
    const CLOSED_UPPER_EYE_CLASS = 'closedUpperEye'
    const OPENED_LOWER_EYE_CLASS = 'openedLowerEye'
    const CLOSED_LOWER_EYE_CLASS = 'closedLowerEye'

    const [upperEyeClass, setUpperEyeClass] = useState<String>(
        CLOSED_UPPER_EYE_CLASS
    )
    const [lowerEyeClass, setLowerEyeClass] = useState<String>(
        CLOSED_LOWER_EYE_CLASS
    )
    const [upperEye, setUpperEye] = useState<JSX.Element>(<FaEyeSlash />)
    const [lowerEye, setLowerEye] = useState<JSX.Element>(<FaEyeSlash />)
    const [formValues, setFormValues] = useState<SignupType>({
        name: '',
        email: '',
        password: '',
        confirmationPassword: '',
    })
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const FormSubmit = (e:  FormEvent<HTMLFormElement>) => {
        console.log(e)
    }

    const passwordInputRef = useRef<HTMLInputElement>(null)
    const confirmationPasswordInputRef = useRef<HTMLInputElement>(null)
    const upperEyeDiv = useRef<HTMLDivElement>(null)
    const lowerEyeDiv = useRef<HTMLDivElement>(null)

    const toggleUpperEyeVisibility = () => {
        switch (upperEyeClass) {
            case OPENED_UPPER_EYE_CLASS:
                setUpperEyeClass(CLOSED_UPPER_EYE_CLASS)
                break
            case CLOSED_UPPER_EYE_CLASS:
                setUpperEyeClass(OPENED_UPPER_EYE_CLASS)
                break
        }
    }

    const toggleLowerEyeVisibility = () => {
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
            confirmationPasswordInputRef.current &&
            passwordInputRef.current != null
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
        <form className="form" onSubmit={FormSubmit}>
            <fieldset className="form__fieldset">
                <h1 className="form__fieldset__title">
                    Crie sua conta e comece a controlar sua grana agora mesmo
                </h1>
                <Input
                    name="name"
                    placeholder="Insira seu nome"
                    type="name"
                    text="Nome:"
                    value={formValues.name}
                    OnChange={handleInputChange}
                />
                <Input
                    name="email"
                    placeholder="Insira seu email"
                    type="email"
                    text="Email:"
                    value={formValues.email}
                    OnChange={handleInputChange}
                />
                <Input
                    name="password"
                    ref={passwordInputRef}
                    placeholder="Insira sua senha"
                    type="password"
                    text="Senha:"
                    value={formValues.password}
                    OnChange={handleInputChange}
                />
                <Input
                    name="confirmationPassword"
                    ref={confirmationPasswordInputRef}
                    placeholder="Confirme sua senha"
                    type="password"
                    text="Confirmar senha:"
                    value={formValues.confirmationPassword}
                    OnChange={handleInputChange}
                />
                <button className="form__fieldset__button">
                    Começar a usar
                </button>
                <span className="form__fieldset__span">
                    Já sou cadastrado.
                    <Link to="/login" className="form__fieldset__link">
                        Quero fazer login!{' '}
                    </Link>
                </span>
                <div
                    ref={upperEyeDiv}
                    onClick={toggleUpperEyeVisibility}
                    className={`form__fieldset__${upperEyeClass}`}
                >
                    {upperEye}
                </div>
                <div
                    ref={lowerEyeDiv}
                    onClick={toggleLowerEyeVisibility}
                    className={`form__fieldset__${lowerEyeClass}`}
                >
                    {lowerEye}
                </div>
            </fieldset>
        </form>
    )
}

export default Signup

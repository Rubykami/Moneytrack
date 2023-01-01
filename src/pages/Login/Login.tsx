import './Login.scss'
import { ChangeEvent, useState, FormEvent } from 'react'
import Input from '../../components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { LoginType } from '../../types/Login'
import axios from 'axios'
import { LoginValidateTypes } from '../../types/LoginValidate'

interface LoginErrors {
    email?: string
    password?: string
}

const Login = () => {

    const navigate = useNavigate()


    const [FormValues, setFormValues] = useState<LoginType>({
        email: '',
        password: '',
    })
    const [formErrors, setFormErrors] = useState<LoginErrors>({})
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const validate = (values: LoginValidateTypes): LoginValidateTypes => {
        const errors: LoginValidateTypes = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.email) {
            errors.email = 'Inserir o email é obrigatório!'
        } else if (!regex.test(values.email)) {
            errors.email = 'Este não é um email válido!'
        }
        if (!values.password) {
            errors.password = 'Inserir uma senha é obrigatório!'
        }
        return errors
    }

    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (Object.keys(validate(FormValues)).length === 0) {
            setIsSubmit(true)
            axios.post('http://localhost:3001/api/auth/sign_in', FormValues)
            .then((response) => {
                console.log(response)
                navigate('/profile')
            })
            .catch((response) => {
                console.log(response)
            })
            } else {
                setFormErrors(validate(FormValues))
            }
            e.preventDefault()
    };

    return (
        <form className="loginform" onSubmit={handleSubmit}>
            <fieldset className="loginform__fieldset">
                <h1 className="loginform__fieldset__title">Login</h1>
                <Input
                    name="email"
                    placeholder="Insira seu email"
                    type="email"
                    text="Email:"
                    value={FormValues.email}
                    OnChange={handleInputChange}
                />
                <Input
                    name="password"
                    placeholder="Insira sua senha"
                    type="password"
                    text="Senha:"
                    value={FormValues.password}
                    OnChange={handleInputChange}
                />
                <p className="loginform__fieldset__email__errors">
                    {formErrors.email}
                </p>
                <p className="loginform__fieldset__password__errors">
                    {formErrors.password}
                </p>
                <Link
                    to="/forgotpassword"
                    className="loginform__fieldset__link__forgotpassword"
                >
                    Esqueci minha senha
                </Link>
                <button type="submit" className="loginform__fieldset__button">
                    Entrar
                </button>
                <span className="loginform__fieldset__span">
                    Ainda não tem uma conta?{' '}
                    <Link
                        to="/signup"
                        className="loginform__fieldset__link__cadastro"
                    >
                        Faça o cadastro!
                    </Link>
                </span>
                <div className="loginform__remembermecheckbox">
                    <input
                        className="loginform__remembermecheckbox__input"
                        type="checkbox"
                    />
                    <h2 className="loginform__remembermecheckbox__h2">
                        Lembrar-me
                    </h2>
                </div>
            </fieldset>
        </form>
    )
}

export default Login

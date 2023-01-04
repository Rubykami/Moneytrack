import './Login.scss'
import { ChangeEvent, useState, FormEvent } from 'react'
import Input from '../../components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { LoginType } from '../../interfaces/Login'
import axios from 'axios'
import { LoginValidateTypes } from '../../interfaces/LoginValidate'
import setCookie from '../../hooks/setCookie'

interface LoginErrors {
    email?: string
    password?: string
}

const Login = (): any => {
    const navigate = useNavigate()

    const [FormValues, setFormValues] = useState<LoginType>({
        email: '',
        password: '',
    })
    const [formErrors, setFormErrors] = useState<LoginErrors>({})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): any => {
        const { name, value } = e.target
        setFormValues({ ...FormValues, [name]: value })
    }

    const validate = (values: LoginValidateTypes): LoginValidateTypes => {
        const errors: LoginValidateTypes = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (values.email === undefined) {
            errors.email = 'Inserir o email é obrigatório!'
        } else if (!regex.test(values.email ?? '')) {
            errors.email = 'Este não é um email válido!'
        }
        if (values.password === undefined) {
            errors.password = 'Inserir uma senha é obrigatório!'
        }
        return errors
    }

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<any> => {
        if (Object.keys(validate(FormValues)).length === 0) {
            await axios
                .post('http://localhost:3001/api/auth/sign_in', FormValues)
                .then((response) => {
                    navigate('/profile')
                    setCookie(
                        'OrganizzetaCookie_',
                        String(response.headers['access-token']) +
                            String(response.data.data.id) +
                            String(response.headers.client)
                    )
                })
        } else {
            setFormErrors(validate(FormValues))
        }
        e.preventDefault()
    }

    return (
        <form className="loginform" onSubmit={() => handleSubmit}>
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

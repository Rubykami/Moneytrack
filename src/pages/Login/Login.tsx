import './Login.scss'
import { useContext } from 'react'
import Input from '../../components/Input/Input'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContext'

const Login: React.FC = () => {

    const { handleInputChange, handleSubmit, formErrors, FormValues}: any = useContext(LoginContext)

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

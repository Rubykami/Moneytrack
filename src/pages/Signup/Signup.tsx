import './Signup.scss'
import Input from '../../components/Input/Input'
import { Link } from 'react-router-dom'
import { SignupContext } from '../../contexts/SignupContext'
import { useContext } from 'react'

const Signup: React.FC = () => {
    const {
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
    }: any = useContext(SignupContext)

    return (
        <form className="form" onSubmit={handleSubmit}>
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
                <p className="form__fieldset__errors__name">
                    {formErrors.name}
                </p>
                <Input
                    name="email"
                    placeholder="Insira seu email"
                    type="email"
                    text="Email:"
                    value={formValues.email}
                    OnChange={handleInputChange}
                />
                <p className="form__fieldset__errors__email">
                    {formErrors.email}
                </p>
                <Input
                    name="password"
                    ref={passwordInputRef}
                    placeholder="Insira sua senha"
                    type="password"
                    text="Senha:"
                    value={formValues.password}
                    OnChange={handleInputChange}
                />
                <p className="form__fieldset__errors__password">
                    {formErrors.password}
                </p>
                <Input
                    name="password_confirmation"
                    ref={confirmationPasswordInputRef}
                    placeholder="Confirme sua senha"
                    type="password"
                    text="Confirmar senha:"
                    value={formValues.password_confirmation}
                    OnChange={handleInputChange}
                />
                <p className="form__fieldset__errors__confirmationPassword">
                    {formErrors.password_confirmation}
                </p>
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
                    className={`form__fieldset__${String(upperEyeClass)}`}
                >
                    {upperEye}
                </div>
                <div
                    ref={lowerEyeDiv}
                    onClick={toggleLowerEyeVisibility}
                    className={`form__fieldset__${String(lowerEyeClass)}`}
                >
                    {lowerEye}
                </div>
            </fieldset>
        </form>
    )
}

export default Signup

import './Login.scss'
import { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../../components/Input/Input';
import {Link} from 'react-router-dom'
import { LoginType } from '../../types/Login';
import axios from 'axios'


const Login  = () => {


    const [FormValues, setFormValues] = useState<LoginType>({
        email: '',
        password: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues( 
            {...FormValues, [name]: value}
        )
    };

    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(e)
    }


    return (
        <form className='loginform' onSubmit={FormSubmit}>
            <fieldset className='loginform__fieldset'> 
                <h1 className='loginform__fieldset__title'>Login</h1>
                <Input name="email"  placeholder='Insira seu email' type='email' text='Email:' value={FormValues.email}  OnChange={handleInputChange}/>
                <Input name="password" placeholder='Insira sua senha' type='password' text='Senha:' value={FormValues.password} OnChange={handleInputChange}/>
                <Link to='/forgotpassword'className="loginform__fieldset__link__forgotpassword">Esqueci minha senha</Link>
                <button type='submit' className='loginform__fieldset__button'>
                <Link to='/signup' className="loginform__fieldset__link"></Link>
                    Entrar
                </button>
                <span className="loginform__fieldset__span">Ainda não tem uma conta? <Link to='/recoverpassword' className='loginform__fieldset__link__cadastro'>Faça o cadastro!</Link></span>
                <div className='loginform__remembermecheckbox'>
                        <input className='loginform__remembermecheckbox__input'type='checkbox'/>
                        <h2 className='loginform__remembermecheckbox__h2'>Lembrar-me</h2>
                </div>
            </fieldset>
        </form>
    )

};

export default Login;
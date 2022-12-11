import './Signup.scss'
import { ChangeEvent, FormEvent, useState, useRef, useEffect} from 'react'
import Input from '../../components/Input/Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Signup  = () => {
    
    const [PasswordEye, setPasswordEye] = useState<String>("ClosedEye");
    const [ConfPasswordEye, setConfPasswordEye] = useState<String>("ClosedConfEye");
    const [Eye, setEye] = useState<JSX.Element>();
    const [ConfEye, setConfEye] = useState<JSX.Element>();
    const [FormValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confPassword: ''
    });

    const PasswordRef = useRef<HTMLInputElement>(null);
    const ConfPasswordRef = useRef<HTMLInputElement>(null);
    const EyeBlock = useRef<HTMLDivElement>(null);
    const ConfEyeBlock = useRef<HTMLDivElement>(null);

    const ChangePasswordEyeStatus = () => {
        if (PasswordEye === "OpenedEye") {
            setPasswordEye("ClosedEye")
        }
        else {
            setPasswordEye("OpenedEye")
        }

    };
    const ChangeConfPasswordEyeStatus = () => {
        if (ConfPasswordEye === "OpenedConfEye") {
            setConfPasswordEye("ClosedConfEye")
        }
        else {
            setConfPasswordEye("OpenedConfEye")
        }

    };


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues( 
            {...FormValues, [name]: value}
        )
    };
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


    useEffect (() => {
        if ( ConfEyeBlock.current && EyeBlock.current && ConfPasswordRef.current && PasswordRef.current != null) {
            if (PasswordEye === "OpenedEye") {  
                setEye(<FaEye/>)
                ConfPasswordRef.current.type = 'text'
            }
            else {
                setEye(<FaEyeSlash/>)
                ConfPasswordRef.current.type = 'password'
            }
            if (ConfPasswordEye === "OpenedConfEye") {  
                setConfEye(<FaEye/>)
                PasswordRef.current.type = 'text'
            }
            else {
                setConfEye(<FaEyeSlash/>)
                PasswordRef.current.type = 'password'
            }
        }
    },[PasswordEye, ConfPasswordEye])



    return (
        <form className='form'onSubmit={handleFormSubmit}>
            <fieldset className='form__Fieldset'> 
                <h1 className='form__Fieldset__Title'>Crie sua conta e comece a controlar sua grana agora mesmo</h1>
                <Input name='name' placeholder='Insira seu nome' type='name' text='Nome:' value={FormValues.name}  OnChange={handleInputChange}/>
                <Input name='email' placeholder='Insira seu email' type='email' text='Email:' value={FormValues.email}  OnChange={handleInputChange}/>
                <Input ref={PasswordRef}  name='password' placeholder='Insira sua senha' type='password' text='Senha:' value={FormValues.password} OnChange={handleInputChange}/>
                <Input ref={ConfPasswordRef} name='confPassword' placeholder='Confirme sua senha' type='password' text='Confirmar senha:' value={FormValues.confPassword} OnChange={handleInputChange}/>
                <button className='form__Fieldset__Button'>
                    Começar a usar
                </button>
                <span className='form__Fieldset__span'>Já sou cadastrado.<Link to='/login' className='form__Fieldset__link'>Quero fazer login! </Link></span>
                <div ref={EyeBlock} onClick={ChangePasswordEyeStatus} className={`form__Fieldset__${PasswordEye}`}>
                    {Eye}
                </div>
                <div ref={ConfEyeBlock} onClick={ChangeConfPasswordEyeStatus} className={`form__Fieldset__${ConfPasswordEye}`}>
                    {ConfEye}
                </div>
            </fieldset>
        </form>
    )

};

export default Signup;
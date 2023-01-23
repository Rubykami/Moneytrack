import './ManageAccount.scss'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import BalanceInfo from '../../components/Balanceinfo/BalanceInfo'
import { useContext } from 'react'
import { ManageAccountContext } from '../../contexts/ManageAccountContext'

const ManageAccount: React.FC = () => {

    const { handleSubmit, FormValues, handleInputChange,formErrors, handleSelectChange }: any = useContext(ManageAccountContext)


    return (
        <main className="mainsection">
            <BalanceInfo />
            <section className="mainsection__secondsectionmngacc">
                <div className="mainsection__secondsectionmngacc__div">
                    <h1 className="mainsection__secondsectionmngacc__div__title">
                        Banco
                    </h1>
                    <h2 className="mainsection__secondsectionmngacc__div__subtitle">
                        Dados cadastrais
                    </h2>
                    <form 
                        onSubmit={handleSubmit}      // eslint-disable-line
                        className="mainsection__secondsectionmngacc__div__form"
                    >
                        <Input
                            name="name"
                            type="text"
                            text="Nome do Banco"
                            placeholder="Insira o nome do Banco"
                            value={FormValues.name}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankname__errors">
                            {formErrors.name}
                        </p>
                        <Input
                            name="ownercpfnumber"
                            type="text"
                            text="CPF do Titular"
                            placeholder="Insira o CPF do Titular"
                            value={FormValues.ownercpfnumber}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankCPFvalue__errors">
                            {formErrors.ownercpfnumber}
                        </p>
                        <Input
                            name="accountnumber"
                            type="text"
                            text="Número da conta"
                            placeholder="Insira o número da conta"
                            value={FormValues.accountnumber}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankaccountnumber__errors">
                            {formErrors.accountnumber}
                        </p>
                        <Input
                            name="securitycode"
                            type="text"
                            text="Código de segurança"
                            placeholder="Insira o código de segurança"
                            value={FormValues.securitycode}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__banksecuritynumber__errors">
                            {formErrors.securitycode}
                        </p>
                        <Input
                            name="balancevalue"
                            type="text"
                            text="Quantidade de saldo"
                            placeholder="Insira a quantidade de saldo disponível"
                            value={FormValues.balancevalue}
                            OnChange={handleInputChange}
                        />
                        <p className="mainsection__secondsectionmngacc__div__form__bankbalancevalue__errors">
                            {formErrors.balancevalue}
                        </p>
                        <Select
                            onChange={handleSelectChange}
                            value={FormValues.accounttype}
                            name="accounttype"
                            selectinfo="Tipo de conta"
                            optionA="Conta Poupança"
                            optionB="Conta Corrente"
                            optionC=""
                        />
                        <button className="mainsection__secondsectionmngacc__btn">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default ManageAccount

import './UserPage.scss'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BalanceInfo from '../../components/Balanceinfo/BalanceInfo'
import { useMemo } from 'react'


const UserPage: React.FC = () => {

    useMemo(() => {
        window.location.reload // eslint-disable-line
    }, [])

    return (
        <main className="mainsection">
            <BalanceInfo />
            <section className="mainsection__secondsection">
                <h1 className="mainsection__secondsection__title">
                    Bem-Vindo ao Organizzeta!
                </h1>
                <section className="mainsection__secondsection__companyinfo">
                    <h1 className="mainsection__secondsection__companyinfo__title">
                        Quem somos
                    </h1>
                    <p className="mainsection__secondsection__companyinfo__description">
                        O Organizzeta é um gerenciador financeiro de verdade.
                        Trabalhado em cada detalhe com muito carinho e paixão
                        pelo nosso fantástico time.
                    </p>
                    <div className="mainsection__secondsection__companyinfo__firstaddinfo">
                        <div className="mainsection__secondsection__companyinfo__firstaddinfo__div">
                            <div className="mainsection__secondsection__companyinfo__firstaddinfo__div__checkedicon">
                                <BsFillPatchCheckFill />
                            </div>
                            <p className="mainsection__secondsection__companyinfo__firstaddinfo__div__description">
                                <b>
                                    Mais de 30 anos <br /> de história
                                </b>
                                <br />
                                desde 1989!
                            </p>
                        </div>
                        <div className="mainsection__secondsection__companyinfo__secondaddinfo">
                            <div className="mainsection__secondsection__companyinfo__secondaddinfo__div__checkedicon">
                                <BsFillPatchCheckFill />
                            </div>
                            <p className="mainsection__secondsection__companyinfo__secondaddinfo__div__downloadinfo">
                                <b>
                                    Mais de 10 milhões <br /> de downloads
                                </b>
                                <br /> na App Store e Google Play!
                            </p>
                        </div>
                    </div>
                    <div className="mainsection__secondsection__instructions">
                        <h1 className="mainsection__secondsection__instructions__title">
                            Como utilizar o site?
                        </h1>
                        <p className="mainsection__secondsection__instructions__description">
                            <ul className="mainsection__secondsection__instructions__description__list">
                                <li className="mainsection__secondsection__instructions__description__list__item">
                                    <b>1. </b> Primeiramente, você deve clicar
                                    no botão de <b>Gerenciar contas</b> logo abaixo de
                                    <b> Minhas contas</b> do lado esquerdo da
                                    sua tela para escolher quais bancos você irá
                                    utilizar e o quanto de dinheiro cada um tem.
                                </li>
                                <li className="mainsection__secondsection__instructions__description__list__item">
                                    <b> 2.</b> Após ter configurado corretamente
                                    as suas contas de banco, você poderá fazer
                                    depósitos para essas contas usando
                                    diretamente o dinheiro da sua
                                    <b> carteira Organizzeta!</b>. Basta clicar
                                    em <b>Fazer uma transferência</b>.
                                </li>
                                <li className="mainsection__secondsection__instructions__description__list__item">
                                    <b>3.</b> Para adicionar dinheiro a sua
                                    <b> carteira Organizzeta</b>, clique em
                                    <b> Fazer um depósito</b>.
                                </li>
                                <li className="mainsection__secondsection__instructions__description__list__item">
                                    <b>4. </b> Para cadastrar novas contas de
                                    banco , clique em <b>Gerenciar contas</b>.
                                    Para modificar suas contas de banco, é
                                    necessário deletar e cadastra-lás novamente.
                                </li>
                            </ul>
                        </p>
                    </div>
                </section>

                <p className="mainsection__secondsection__footer">
                    © 2022 Organizzeta Tecnologia Ltda. - Todos os direitos
                    reservados.
                </p>
            </section>
        </main>
    )
}

export default UserPage

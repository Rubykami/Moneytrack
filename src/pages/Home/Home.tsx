import "./Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdPhonelink, MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom'



const Home = () => {

const Navigate = useNavigate();


function RedirectToSignupPage() {
    Navigate('/signup')
};

  return (

    <main className="main">


      <section className="main__FirstSection">
        <span className="main__FirstSection__FirstItem">
          <span className="main__FirstSection__FirstItem__Controle">Controle </span>total das finanças na palma da sua mão
        </span>


        <div className="main__FirstSection__SecondItem">
          Organize seu dinheiro em tempo real em uma solução completa, prática e
          segura, e garanta o controle total das suas finanças.
        </div>


        <button className="main__FirstSection__SignupBtn" type='button' onClick={RedirectToSignupPage}>
          Teste Gratuitamente
          <div className="main__FirstSection__SignupBtn__ArrowSection">
            <AiOutlineArrowRight className="main__FirstSection__SignupBtn__Arrow" />
          </div>
        </button>


        <div className="main__FirstSection__Bottom">
          <ul className="main__FirstSection__Bottom__Items">
            <li className="main__FirstSection__Bottom__Item">

              <MdLockOutline className="main__FirstSection__Bottom__Item__LockIcon" />
              <span className="main__FirstSection__Bottom__Item__Text">
                Segurança dos seus dados em primeiro lugar
              </span>

            </li>
            <li className="main__FirstSection__Bottom__Item">

              <MdPhonelink className="main__FirstSection__Bottom__Item__ComputerPhoneIcon" />
              <span className="main__FirstSection__Bottom__Item__Text">
                Acesse quando quiser, no celular ou computador
              </span>
              
            </li>
          </ul>
        </div>


      </section>


      <section className="main__SecondSection">
        <img
          alt="FinanceImg"
          src={require('../../assets/images/pig.jpg')}
          height={400}
          width={600}
          className="main__SecondSection__image"
        />
      </section>


    </main>

)};

export default Home;

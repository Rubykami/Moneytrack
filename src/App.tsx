import './assets/global.scss';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import UserPage from './pages/UserPage/UserPage'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>    
        <Route path='/profile/*' element={ <UserPage/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;

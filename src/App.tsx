import './assets/global.scss';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/>    
        <Route path='/signup' element={ <Signup/>} />
        <Route path='/login' element={ <Login/> } />
        <Route path='/profile' element={<UserPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

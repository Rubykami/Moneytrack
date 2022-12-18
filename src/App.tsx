import './assets/global.scss'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import UserPage from './pages/UserPage/UserPage'
import ManageAccount from './pages/ManageAccount/ManageAccount'
import Transfers from './pages/Transfers/Transfers'
import Deposit from './pages/Deposit/Deposit'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<UserPage />} />
                    <Route path="/profile/manageaccount" element={<ManageAccount />} />   
                    <Route path='/profile/transfers' element={ <Transfers/>} />    
                    <Route path='/profile/deposit' element={ <Deposit/>} />   
                </Routes>
            </Router>
        </>
    )
}

export default App

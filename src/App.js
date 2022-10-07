import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Login/> />
        <Route path='/login' element=<Login/> />
        <Route path='/signup' element=<SignUp /> />
        <Route path='/dashboard' element=<Dashboard/> />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

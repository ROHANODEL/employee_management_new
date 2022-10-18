import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Protected from './components/Protected';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Protected Component={Dashboard}/>} />
          <Route path='/login' element=<Login/> />
          <Route path='signup' element={<Protected Component={SignUp}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

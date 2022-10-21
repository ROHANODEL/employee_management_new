import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Protected from './components/Protected';
import {Provider} from 'react-redux';
import {store} from './store';
import AdminDashboard from './components/admin/components/AdminDashboard';
import AddEmp from './components/admin/components/AddEmp';
import EmpDashboard from './components/employee/components/EmpDashboard';
import InfoPage from './components/admin/components/InfoPage'

function App() {
  return (
    <div className='app-main'>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Protected Component={AdminDashboard}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='/addemp' element={<Protected Component={AddEmp} />} />
          <Route path='/dashboard' element={<Protected Component={EmpDashboard} />} />
          <Route path='/info' element={<Protected Component={InfoPage} />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

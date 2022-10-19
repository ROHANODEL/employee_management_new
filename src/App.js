import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Protected from './components/Protected';
import {Provider} from 'react-redux';
import {store} from './store';
import AdminDashboard from './components/admin/components/AdminDashboard';

function App() {
  return (
    <div>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Protected Component={AdminDashboard}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='signup' element={<Protected Component={SignUp}/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

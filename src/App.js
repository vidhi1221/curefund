import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Login from './Pages/Login';
import Footer from './components/Footer';
import Register from './Pages/Register';


function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact={true} element={<Login/>}/>
        <Route path='/register' exact={true} element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

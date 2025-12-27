import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Login from './Pages/Login';
import Footer from './components/Footer';


function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact={true} element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

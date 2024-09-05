import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/registration/Signin';


function App() {
  return (
    <div>
    
     <Routes>

     <Route path='/' element={<Home/>} />
     <Route path='/signin' element={<Signin/>} />
    

     </Routes>

      
     
      
        

    </div>
  );
}

export default App;

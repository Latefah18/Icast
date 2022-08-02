
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { Notfound} from './pages/notfound';
import { Prodcastpage } from './pages/prodcast';
import { Profilepage } from './pages/profile';
import { Loginpage } from './pages/login';
import { Registerpage } from './pages/register';
import { Librarypage } from './pages/library';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>


<BrowserRouter>
        <Routes>
            <Route path='/' element={< Homepage/>} />
            <Route path='/login' element={< Loginpage/>} />
            <Route path='/register' element={< Registerpage/>} />
            <Route path='/profile' element={< Profilepage/>} />
            <Route path='/prodcast' element={< Prodcastpage/>} />
            <Route path='/library' element={< Librarypage/>} />
            <Route path='/*' element={<Notfound />} />
        </Routes>  
    </BrowserRouter>




  </React.StrictMode>
);


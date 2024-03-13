import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Cards/Card';
import Button from './components/Footer/Button';
import AppBar from './components/Cards/AppBar';
import Use from './components/Cards/UseEffect/Use';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Card' element={<Card/>}/>
      <Route path='/AppBar' element={<AppBar/>}/>
      <Route path='/Button' element={<Button/>}/>
      <Route path='/App' element={<App/>}/>
      <Route path='/Use' element={<Use/>}/>
    </Routes>
    </BrowserRouter> */}
    <App/>
  {/* </React.StrictMode> */}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

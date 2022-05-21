import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signin from './components/signin/Signin';
import Dashboard from './dashboard/Dashboard';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import DetailForm from './components/detailsForm/DetailForm';
import PageNotFound from './components/pageNotFound/PageNotFound';
const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App

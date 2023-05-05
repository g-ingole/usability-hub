import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Customer from './component/Customer/Customer';
import Pricing from './component/pricing/Pricing';
import Signin from './component/signin/Signin';
import Signup from './component/signup/Signup';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';

function App() {
  const [Show, setShow] = useState(false)
  const hideCompoenet = () => {
    if (Show === true) {
      setShow(true)
    }
    else {
      setShow(false)
    }

  }
  return (
    <div>
      {Show && (<Header />)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<Customer />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup hideCompoenet={hideCompoenet} />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

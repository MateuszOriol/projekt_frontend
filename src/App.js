import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Items from './components/ItemsPage';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetails';

function App() {
  const { user } = useAuthContext();

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Items /> : <Navigate to='/login' />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/cart' element={user ?<Cart /> : <Navigate to='/login' />} />
          <Route path="/item/:id" element={user ?<ItemDetail /> : <Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

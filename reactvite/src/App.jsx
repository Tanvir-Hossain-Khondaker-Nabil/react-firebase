import React from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

import Home from './pages/Home';
import Qrcodepage from './pages/Qrcodepage';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';

import {ProtectedRoute} from './protectRoute/ProtectedRoute';
import {ProtectedAuth} from './protectRoute/ProtectedAuth';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>          
          }/>
          <Route path='/qrcodepage' element={
            <ProtectedRoute>
              <Qrcodepage/>
            </ProtectedRoute>          
          }/>

          
                    
          <Route path='/login' element={
            <ProtectedAuth>
              <Login/>
            </ProtectedAuth>
          }/>
          <Route path='/signup' element={
            <ProtectedRoute>
              <Signup/>
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/add-form' />
      <Route exact path='/' />
      <Route path='/login' />
      <Route path='/signup' />
    </div>
  );
}

export default App;

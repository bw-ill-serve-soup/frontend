import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/add-form' />
      <Route exact path='/' />
      <Route path='/login' />
      <Route path='/signup' />
    </div>
  );
}

export default App;

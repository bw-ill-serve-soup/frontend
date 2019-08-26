import React from 'react';
import './App.css';
import List from './components/inventoryList';
import { Route } from "react-router-dom";

function App() {
  return (
    <Route>
    <div className="App">
      <List />
    </div>
   </Route>
  );
}

export default App;

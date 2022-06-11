import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import Sidebar from './Views/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BugsDisplay from './Views/BugsDisplay/BugsDisplay';
import Dashboard from './Views/Dashboard/Dashboard';
import Sidebar from './Views/Sidebar/Sidebar';
import { Col, Row, Container } from 'reactstrap';
import './App.css'

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs='4' className='pr-1'>
          <Sidebar/>
        </Col>
     
      <Col xs='6'>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='bugs' element={<BugsDisplay/>}/>
        </Routes>
      </Col>
      
      </Row>
     
    </div>
  );
}

export default App;

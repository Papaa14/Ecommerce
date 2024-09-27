import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';

function Admin() {
 

  return (
    <div className='grid-container'>     
      <Sidebar  />      
      <Home />
    </div>
  )
}

export default Admin 
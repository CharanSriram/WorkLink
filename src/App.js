import React from 'react';
import './App.css';
import Sidebar from './universal/sidebar'
import BodyContainer from './universal/bodycontainer'

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <BodyContainer></BodyContainer>
    </div>
  );
}

export default App;

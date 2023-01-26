import React, { useState } from 'react';
import './App.css';
import Caceres from './Caceres';
import Caserescaja from './Caserescaja';

function App() {
  const [Caja,setCaja]=useState([])
  console.log ( Caja)

  return (
    <div className="App">
      <Caceres Caja={Caja} setCaja={setCaja}   />
      <Caserescaja  Caja={Caja}/>
    </div>
  );
}

export default App;

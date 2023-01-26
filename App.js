import React, { useState } from 'react';
import './App.css';
import Caceres from './Caceres';
import Caserescaja from './Caserescaja';

function App() {
  const [Tarea,setTarea]=useState([])
  console.log ( Tarea)

  return (
    <div className="App">
      <Caceres Tarea={Tarea} setTarea={setTarea}   />
      <Caserescaja  Tarea={Tarea}/>
    </div>
  );
}

export default App;

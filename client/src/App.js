import './App.css';
// import { useState, useEffect } from 'react'
import Experience from './Experience'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const API = "http://localhost:8000"
    

  return(
    <div style={{backgroundColor: '#F9F2F1'}}>
      <Experience API={API}/>
    </div>
    );
  }

export default App;

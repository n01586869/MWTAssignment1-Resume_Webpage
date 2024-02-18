import './App.css';
// import { useState, useEffect } from 'react'
import Experience from './Experience'
import Education from './Education';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const API = "http://localhost:8000"

  // generic fetchData function to be passed to all children
  const fetchData = (endpoint, setData) => {
    {fetch(`${API}${endpoint}`)
        .then((res) => {
        if (res.status !== 200) {
            console.log("error");
            return Promise.reject("Exit promise");
        }
        // console.log(res)
        return res.json();
        })
        .then((json) => {
        setData(json);
        // console.log(json);
        })
        .catch((err) => console.log("Err: " + err))}
   }
    

  return(
    <div style={{backgroundColor: '#F9F2F1'}}>
      <Education fetchData={fetchData}/>
      <Experience fetchData={fetchData} />
    </div>
    );
  }

export default App;

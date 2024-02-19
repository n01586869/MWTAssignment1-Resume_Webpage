import './App.css';
import Experience from './Experience'
import Education from './Education';
import Skills from './Skills';
import Info from './Info';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const API = "http://localhost:8000"

  // generic fetchData function to be passed to all children
  const fetchData = (endpoint, setData) => {
    // fetch function with API and passed endpoint
    fetch(`${API}${endpoint}`)
      .then((res) => {
        // error handling
        if (res.status !== 200) return Promise.reject("Status not 200"); // triggers catch block with message "Status not 200"
        // if status is 200, returns json
        return res.json();
        })
      .then((json) => {
        // call setData callback function
        setData(json);
        })
      // catch error if thrown
      .catch((err) => console.log("Error: " + err))
   }
    

  return(
    <div style={{backgroundColor: '#F9F2F1', paddingTop: 0.1, paddingBottom: 10}}> {/* for some reason this paddingTop makes a weird bg color glitch get fixed */}
        <Info fetchData={fetchData}/>
        <Skills fetchData={fetchData} />
        <Education fetchData={fetchData}/>
        <Experience fetchData={fetchData} />
    </div>
    );
  }

export default App;

import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const[Mode,setMode]=useState('dark');   //whether dark mode is enable or not
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
       setAlert({msg:message,
       type: type
       })
       setTimeout(() => {
         setAlert(null);
       }, 1000);
  }
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#05155a'; 
      showAlert("dark mode has been enable","success");
     // document.title='TextUtils-Dark Mode';
     /* setInterval(()=>{
          document.title='TextUtils is Amazing Mode';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1500);
      */
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
     // document.title='TextUtils-Light Mode';
    }
  }
  const toggleMode1=()=>{
    if(Mode==="light"){
      setMode("danger");
      document.body.style.backgroundColor='#5e0606'; 
      showAlert("dark mode has been enable","success");
     // document.title='TextUtils-Dark Mode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
     // document.title='TextUtils-Light Mode';
    }
  }

  const toggleMode2=()=>{
    if(Mode==="light"){
      setMode("success");
      document.body.style.backgroundColor='#074c0b'; 
      showAlert("dark mode has been enable","success");
     // document.title='TextUtils-Dark Mode';
    } 
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
      //document.title='TextUtils-Light Mode';
    }
  }
  return (
   <>
     <Router>
     {/*navbar and textform is a components  and tittle , abouttext is a properties of components */}
      <Navbar title="TextUtils" aboutText="about us" Mode={Mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} />
      <Alert alert={alert}/>
     {/*container is a class of boot strap */}
      <div className="container my-5"> 
      <Switch>
          <Route exact path="/about">
            <About  Mode={Mode} />
          </Route>
          <Route exact path="/">
          <Textform Heading="Try Textutils- word counter,character counter,copied Text" showAlert={showAlert} Mode={Mode}/>  
          </Route>
        </Switch> 
      </div>
      </Router>
  </>
  );
}

export default App;
 
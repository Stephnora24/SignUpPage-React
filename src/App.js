import logo from './bani.svg';
import React,{ useState } from 'react';
import './App.css';

function App() {
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
  return (
    <div class="Apps App">
      <img src={logo} alt="logo" class="App-image"></img>
      <div class="App1">
        <h2 class="App2">Log in to your account</h2>
        <div class="App3">
            <p class="App4">Don’t have an account?</p>
            <p class="App5">Get Started</p>
        </div>
        <label class="App6">
            <p  class="App7">Email</p>
            <input type="text" class="App8"></input>
        </label>
            <div >
                <div class="App9">
                    <p class="App10">
                        <label>Password</label>
                    </p>
                    <p class="App11">Forgot Password</p>
                </div>
                <div  class="App12">
                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="App13" onClick={handleShow}>
                        <path d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10Z" stroke="#65717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 16.892c2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.909-3-4.65-4.733-7.592-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734Z" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <input type={show?"text":"password"} class="App8"></input>
                </div>
            </div>
         
            <a class="App14" href="#">
                <span class="App15">Login</span></a>
        </div>
    </div>
  );
}

export default App;

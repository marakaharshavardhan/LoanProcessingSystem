
import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import Header from '../header';
export default function Home() {
    let history=useHistory();
    return (
    
        <div >
        <Header />
        <h1 id="h2t">Welcome to the SmartBank<br></br><br></br>
    for more details login through your account </h1>
       <br></br>
       <br></br>
       <forms>

      <button type='submit'  className="details" class="btn btn-primary" color='primary' variant="contained" 
      onClick={() =>{ history.push('/Login');}} >Login</button>

       </forms>
    <h2 id="h2t">for more details contact +800 49 900 900, +800 49 900 901</h2>
      

        </div>

    ) 
}  

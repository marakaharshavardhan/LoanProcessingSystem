import React from 'react'
import { Redirect, useHistory } from 'react-router-dom';
function Logout() {
    localStorage.clear()
    let history=useHistory();
  return  <Redirect to="/home" />

}

export default Logout

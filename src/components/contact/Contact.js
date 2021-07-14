// import React from 'react'
// import {useHistory, userHistory} from 'react-router-dom'
// // navigating programitically: history object
// export default function Contact({ history }) {
//     const myContactHistory=useHistory();
//  return (
//  <div>
//  <h2>Contact Component</h2>
//  <button onClick={() => myContacthistory.push('/')}>Go to Home Page</button>
//  </div>
//  )
// }



import React from 'react'
import Header from '../header'
export default function Contact({history}) {
    return (
        <div>
        <Header />
        <h2>Contact Components</h2>
        <button onClick={() => history.push('/home')}>Home</button>
        </div>
        
    )
}

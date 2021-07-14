// import React from 'react'
// import { Link } from 'react-router-dom'
// import Account from '../account/Account';
// function Makeloan() {

//     return (
//         <div className="divtop" >
//      <Account />
      
//    <img src="gold.jpg" height="300px" width="400px"></img>
//     <h5 class="card-title">Gold loan </h5>
//     <p > for Gold Loan click the button and fill details</p>
//     <a href="Application" class="btn btn-primary">Button</a>

// <img src="car.jpg" height="300px" width="400px"></img>
//  <h5 class="card-title">Gold loan </h5>
//  <p class="card-text"> for Car Loan click the button and fill details</p>
//  <a href="Application" class="btn btn-primary">Button</a>
// <br></br>

// <img src="business.jpg" height="300px" width="400px"></img>
//  <h5 class="card-title">Business loan </h5>
//  <p class="card-text"> for Business Loan click the button and fill details</p>
//  <a href="Application" class="btn btn-primary">Button</a>

// <img src="home.jpg" height="300px" width="400px"></img>
//  <h5 class="card-title">Home loan </h5>
//  <p class="card-text"> for Home Loan click the button and fill details</p>
//  <a href="Application" class="btn btn-primary">Button</a>

// <img src="education.jpg" height="300px" width="400px"></img>
//  <h5 class="card-title">Education loan </h5>
//  <p class="card-text"> for Education Loan click the button and fill details</p>
//  <Link href="Application.js" class="btn btn-primary">Button</Link>
//         </div>
//     );
// }










import React from 'react'
import Application from '../applicationform/Application';
import { Link } from 'react-router-dom';
import Account from '../account/Account';
import Header from '../header';

const Makeloan = () => {
    return <React.Fragment>
    <Header />
<h1 className='text-center text-danger text-capitalize'>
    {" "}
    Welcome to make loan {" "}
    </h1>
<div className="container">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col-sm">
    <div class="card" >
  <img src="car.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Car Loan</h5>
    <p class="card-text">Car loan is a financial assistance taken to purchase a car with minimal initial payment from your own pocket. The borrowed money from the lender can be repaid in equal monthly instalments over a period of time with an agreed rate of interest.A consumer borrows in order to purchase a car.</p>
    <Link to="Applicationform" onClick={Application} class="btn btn-primary">Click</Link>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img src="gold.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Gold Loan</h5>
    <p class="card-text">A gold loan simply means a sum of money borrowed from a financial institution or bank in exchange of gold. gold loans consist of an adjustable or fixed interest rate and payment terms. ... The property is mortgaged to the lender as a security till the repayment of the loan.</p>
    <Link to="Applicationform" onClick={Application} class="btn btn-primary">Click</Link>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img src="education.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Education loan</h5>
    <p class="card-text">An education loan is a sum of money borrowed to finance post-secondary education or higher education-related expenses. Education loans are intended to cover the cost of tuition, books and supplies, and living expenses while the borrower is in the process of pursuing a degree.</p>
    <Link to="Applicationform" onClick={Application} class="btn btn-primary">Click</Link>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img src="business.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Business loan</h5>
    <p class="card-text">An business loan is a sum of money borrowed to finance post-secondary  ofor business-related expenses. business loans are intended to cover the cost of tuition, books and supplies, and living expenses while the borrower is in the process of doing business.</p>
    <Link to="Applicationform" onClick={Application} class="btn btn-primary">Click</Link>
  </div>

  
</div>
    </div>


  </div>
</div>
    </React.Fragment>
};

export default Makeloan

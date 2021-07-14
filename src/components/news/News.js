import React from 'react'
import './News';
import Header from '../header';
function News() {
    return (
        <div>
        <Header />
        <br></br><br></br>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-sm">
          <div class="card" >
        <img src="car.jpg" class="card-img-top" alt="..." height="200px"/>
        <div class="card-body">
          <h5 class="card-title">Car Loan</h5>
          <p class="card-text"> The car loan rate is icreased due to the pandamic the growth rate is 20%.</p>
        </div>
      </div>
          </div>
          <div className="col-sm">
          <div class="card" >
        <img src="gold.jpg" class="card-img-top" alt="..." height="200px"/>
        <div class="card-body">
          <h5 class="card-title">Gold Loan</h5>
          <p class="card-text"> <table>
          </table>The gold loan rates are increased to 10% </p>
        </div>
      </div>
          </div>
          <div className="col-sm">
          <div class="card" >
        <img src="education.jpg" class="card-img-top" alt="..." height="200px"/>
        <div class="card-body">
          <h5 class="card-title">Education loan</h5>
          <p class="card-text"> education loan decreased to12%</p>
        </div>
      </div>
          </div>
          <div className="col-sm">
          <div class="card" >
        <img src="business.jpg" class="card-img-top" alt="..." height="200px"/>
        <div class="card-body">
          <h5 class="card-title">Business loan</h5>
          <p class="card-text">Business loan rates are decreased to 9% </p>
        </div>
      
        
      </div>
          </div>
      </div>
      
        </div>
        </div>
    )
}

export default News

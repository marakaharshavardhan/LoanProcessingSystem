import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const userName = localStorage.getItem("userName");
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            Smart bank
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link class="nav-link" to="/news">
                News
              </Link>
              <Link class="nav-link" to="/about">
                About us
              </Link>
              <Link class="nav-link" to="/services">
                Services
              </Link>
              <Link class="nav-link" to="/contact">
                Contact us
              </Link>
              {!userName && (
                <Link class="nav-link" to="/signin">
                  Signin
                </Link>
              )}

              <Link class="nav-link" to="/accountDetails">
                Account Details
              </Link>
              <Link class="nav-link" to="/makeloan">
                Make Loan
              </Link>
              <Link class="nav-link" to="/payloan">
                Pay Loan
              </Link>
              <Link class="nav-link" to="/Admin">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/*
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <div className="container">
    //     <Link className="navbar-brand" href="/">
    //       Recat User
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/about">
    //             About
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/contact">
    //             Contact
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>

    //     <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
    //   </div>
    // </nav>
*/}
    </div>
  );
}

export default Header;

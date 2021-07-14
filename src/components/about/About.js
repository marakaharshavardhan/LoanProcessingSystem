import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
export default function About() {
  return (
    <div>
      <Header />
      <div>
        <h4>
          <p>
            <strong>
              <h1> How does it work?</h1>
              <h1> 1.SUBMIT</h1>
              <br></br>
              <h2>
                {" "}
                Provide us with your details using our quick, simple and secure
                process, Get Started
              </h2>
              <h1> 2.APPROVE</h1>
              <br></br>
              <h2>
                {" "}
                We'll either approve your application or contact you to put on
                the finishing touches.
              </h2>
              <h1> 3.FINALISE</h1>
              <br></br>
              <h2>
                {" "}
                You sign, we finalise! If it's a refinance we'll contact your
                current lender and make all the arrangements
              </h2>
              <h1> 4.SETTLE</h1>
              <br></br>
              <h2>
                {" "}
                Congratulations! Your new loan settles and you're part of the
                loans.com.au family
              </h2>
            </strong>
          </p>
        </h4>
      </div>
    </div>
  );
}

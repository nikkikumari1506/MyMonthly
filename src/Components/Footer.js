import React from 'react';
import "./FooterStyles.css";
export default function Footer() {
  return (
    <>
    <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
            <ul className="horizontal-list">
            <li className="seperator">❤︎ Fork this on<a href="https://github.com/nikkikumari1506/Mymonthly.git"> Github</a></li>
            
            
            </ul>
            </div>
        </div>
        <hr />
        <div className="row">
            <p className = "col-sm">
                &copy;{new Date().getFullYear()}・MyMonthly・All rights reserved・<a href="https://kumarinikki.com">Nikki Kumari</a>
            </p>
        </div>
      </div>
    </div>
    
    </>
  );
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
     <div>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor :'#DC143C', fontWeight: "bold"}}>
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" style={{color :'#FFFF'}}>MyMonthly</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color :'#FFFF'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color :'#FFFF'}}>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/healthwiki" style={{color :'#FFFF'}}>Health Wiki</Link>
        </li>
        
      </ul>

          <Link className="nav-link" to="/contact" style={{color :'#FFFF'}}>Contact Us</Link>
       
        
    </div>
  </div>
</nav>
     </div>   
    )
  }
}

export default NavBar
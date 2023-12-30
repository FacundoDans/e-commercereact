import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Hollow-Store</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Camisa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Pantalones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Zapatos</a>
          </li>
        </ul>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            <i className="fas fa-shopping-cart"></i> 
          </a>
          <button className="btn btn-outline-primary ml-2">Ingresar</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

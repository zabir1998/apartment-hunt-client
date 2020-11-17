import React from 'react';
import logo from '../../../images/logos/Logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <img class="logo mr-auto" src={logo} alt=""></img>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-3" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-3" href="#">About<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-3" href="#">Service<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-3" href="#">Concern<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-3" href="#">Event<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-3" href="#">Contact<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
      <button type="button" class="btn btn-success nav-link mr-3 lg">Login</button>
      </li>
     
    </ul>
  
  </div>
</nav>
        </div>
    );
};

export default Navbar;
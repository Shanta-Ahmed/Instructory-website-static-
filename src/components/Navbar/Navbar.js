import React from 'react';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light p-3">
    <div className="container-fluid">
     
    <button className="navbar-toggler custom-toggler pe-2" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon custom-icon"></span>
    </button>


     <a className="navbar-brand" href="/"> <img src="https://instructory.net/assets/images/logo-new-white.png" width={200}  className="img-fluid" alt="/"></img></a>

    <p><a className="nav-link text-white text-center cc fw-bold  pt-4 ps-5 " href="/">Course Categories</a></p>
    <p><a className="nav-link text-white text-center ba fw-bold  pt-4 ps-5" href="/"> Become an Affiliator</a></p>


    
    
      
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-white text-center fw-bold" href="/">Sign in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-center  fw-bold" href="/"> <button className="btn-danger">Get Start</button></a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;



import { Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart'
import './navbar.css'
const Navbar = ({ handleLogout }) => {
  
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-item" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="Profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="Robots">
                  Robots
                </Link>
              </li>
              
            </ul>
            <div className='d-flex'>
              <Cart/>
              <button
                className="btn btn-outline-light text-dark"
                type="submit"
                onClick={handleLogout}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </nav>
   
     
    </>
  );
};

export default Navbar;

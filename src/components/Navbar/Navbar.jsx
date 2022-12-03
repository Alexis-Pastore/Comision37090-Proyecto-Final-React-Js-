import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from "../../assets/LogoVeter.png";
//logo vete "https://firebasestorage.googleapis.com/v0/b/react-veterinariahocicos.appspot.com/o/LogoVeter.png?alt=media&token=fcca0946-90c6-4264-b639-b06286447985"

const Navbar =React.memo( () => {
    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Veterinaria Hocicos<img src={logo} width="50"/></Link>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <li className="nav-item">
            <Link className="nav-link active"  aria-current="page" to="/">Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to="/">Contacto</Link>
          </li>
          <Dropdown/>
          
        </ul>
      </div>
        <CartWidget/>
    </div>
  </nav> 
        </>
    );
})

export default Navbar;

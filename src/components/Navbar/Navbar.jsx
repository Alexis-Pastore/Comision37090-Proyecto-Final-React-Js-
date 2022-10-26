import './navbar.css';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Dropdown from '../Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from "../../assets/LogoVeter.png";
import logo2 from "../../assets/Cariito.png";

const Navbar = () => {
    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Veterinaria Hocicos</a>
    <a className="Logo" href="#" ><img src={logo} width="50"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contacto</a>
        </li>
        <Dropdown/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit"><img src={logo2} width="40"/></button>     
        <CartWidget/>
      </ul>
      <FormBusqueda busqueda ={"Productos"}/>
     
    </div>
  </div>
</nav> 
        </>
    );
}

export default Navbar;



const Dropdown = () => {
    return (
        
         <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Alimentos</a></li>
            <li><a className="dropdown-item" href="#">Pipetas</a></li>
            <li><a className="dropdown-item" href="#">Accesorios</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Nuestros Servicios</a></li>
          </ul>
        </li>  
        
    );
}

export default Dropdown;

import { Link } from 'react-router-dom';
import {getProductos} from '../../assets/firebase.js'

const Dropdown = () => {
    return (
        
         <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/category/1">Alimentos</Link></li>
            <li><Link className="dropdown-item" to="/category/2">Farmacia</Link></li>
            <li><Link className="dropdown-item" to="/category/3">Accesorios</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Nuestros Servicios</Link></li>
          </ul>
        </li>  
        
    );
}

export default Dropdown;

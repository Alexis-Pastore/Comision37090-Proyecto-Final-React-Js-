
import { Link } from "react-router-dom";
import logo2 from "../../assets/Cariito.png";

const CartWidget = () => {
    return (
        <>
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                <button className="btn btn-secondary my-2 my-sm-0" type="submit"><img src={logo2} width="40"/></button>     
                </Link>
            </li> 
        </ul>
        </>


    );
}

export default CartWidget;

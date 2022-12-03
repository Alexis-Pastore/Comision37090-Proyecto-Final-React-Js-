import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import logo2 from "../../assets/Cariito.png";
//Logo2 : https://firebasestorage.googleapis.com/v0/b/react-veterinariahocicos.appspot.com/o/Cariito.png?alt=media&token=bdda3a6b-8709-4bbb-8452-4d560524cb42
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                       
                        
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit"><img src={logo2} width="40"/><h7> { getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}</h7></button>     
                    </Link>
                </li>
            </ul>
        </>
    );
}
export default CartWidget;



import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'
const Cart = () => {
    const {cart, emptyCart, removeItem, totalPrice} = useContext(CartContext)

    return (
      <>
       {
        cart.length === 0 ? 
        <div>
            
            <h1>Tu Carrito esta vacío</h1>
            <Link to={'/'}><button className='btn btn-dark' >Volver al Inicio</button></Link>
        </div>
        : 
        <div>
                {cart.map((prod,indice) =><div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio unitario: $ {prod.precio}</p>
                            <p className="card-text">Subtotal: $ {prod.precio * prod.cant}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                    </div>
                </div>
            </div>
            )}
            <div>
                <div class="total"><h2>Total: $ {totalPrice()}</h2></div>
                <p></p>
                <button className="btn btn-danger" onClick={emptyCart}>Limpiar Carrito</button>
                <Link to="/Checkout">
                    <button className="btn btn-primary">Finalizar Compra</button>
                </Link>
            </div>
            </div>
            }
        </>
        
    );
}

export default Cart;
//  <img src={`../img/${prod.img}`} className="img-fluid rounded-start" alt="..." />
import { useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({producto}) => {

    const {isInCart, Cart, addItem } = useContext(CartContext)

    const onAdd = (contador) =>{

        addItem(producto, contador)
    }

    return (
        <div className='row g-0'>
            <div className='col-md-4'>
           
                <img src={producto.img} className='img-fluid rounded-start'/>
            </div>
            <div className='col-md-8'>
                <div className="card-body">
                    <h4 className='card-title'>{producto.nombre}</h4>
                    <p className='card-text'>Modelo: {producto.modelo}</p>
                    <p className='card-text'>Marca: {producto.marca}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Stock: {producto.stock}</p>
                    
                    
                </div>
                <ItemCount stock = {producto.stock} onAdd={onAdd}/>
                
                <button className='btn btn-secondary my-2 my-sm-0'><Link className='nav-link' to="/cart">Finalizar Compra</Link></button>
            </div>
            
        </div>
    );
}

export default ItemDetail;
//detalle producto//
//  <img src={`../img/${producto.img}`} className='img-fluid rounded-start'/>

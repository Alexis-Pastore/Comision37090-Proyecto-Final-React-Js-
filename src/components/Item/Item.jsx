import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
        <div className="card cardProducto">
             <img src={prod.img} className="card-img-top" alt="..." />
             <div className="card-body">
                 <h5 className="card-title">{prod.nombre}</h5>
                  <p className="card-text">Marca: {prod.marca}</p>
                  <p className="card-text">Modelo: {prod.modelo}</p>
                  <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                  <p className="card-text">Stock: {prod.stock}</p>
                  <button className='btn btn-secondary my-2 my-sm-0'><Link className='nav-link' to={`/product/${prod.id}`}>Ver Producto</Link></button>
            </div>
        </div>
    );
}

export default Item;
//el producto en si y su visualizacion//
//             <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
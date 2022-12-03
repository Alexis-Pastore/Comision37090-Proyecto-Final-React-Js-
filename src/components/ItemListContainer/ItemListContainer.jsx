import {useState, useEffect, useContext} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import {getProductos} from '../../assets/firebase.js'
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkMode.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category)).filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[category]);
    
    return (
        <div className= {darkMode ? 'row cardProductos darkMode' :  'row cardProductos' }>
            <button className={darkMode ? 'btn btn-light' : 'btn btn-dark'} onClick={() => toggleDarkMode()}>Cambiar Color</button>
            {productos}
        </div>
    
    );
}

export default ItemListContainer;

/* abajo el id esta parseado porque antes el id era un numero
  if(category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.idCategoria === PasreInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })*/
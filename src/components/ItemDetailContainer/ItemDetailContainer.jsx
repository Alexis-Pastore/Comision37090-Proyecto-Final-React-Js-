import {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase.js'
import { DarkModeContext } from '../../context/darkMode';
const ItemDetailContainer = () => {

    const [producto, setProducto ] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext)
    useEffect (() => {
      getProducto(id).then(prod => {
            
            setProducto(prod)
       } )
    }, []);

    return (
        <div>
          <div className={darkMode ? "darkMode card mb-3 container ItemDetail" : "card mb-3 container ItemDetail"}>
          <ItemDetail producto={producto}/>
          </div>
        </div>
    );
}

export default ItemDetailContainer;

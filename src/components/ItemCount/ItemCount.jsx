import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
  const [contador, setContador] = useState(1) //valor inicial

  const agregarAlCarrito = () => {
      onAdd(contador)
  }

  const incrementar = () => contador < stock && setContador(contador + 1)

  const decrementar = () => contador > 1 && setContador(contador - 1)

    return (
        <>
        <div>
          <button onClick={decrementar} className='btn btn-outline-secondary btn-sm'>-</button> 
           {contador}           
          <button onClick={incrementar} className='btn btn-outline-secondary btn-sm'>+</button>
         </div>
         <button className='btn btn-secondary my-2 my-sm-0' onClick={agregarAlCarrito}>Agregar al carrito</button>  
        </>
    );
}

export default ItemCount;

import { useContext } from 'react';
import './style.css';
import cartContext from '../../Context/Cart/CartContext';

const CartItem = ({item}) => {
    const {removeItem} = useContext(cartContext);

  return (
    <><li className='cartItem'>
        <img src={item.image} alt={item.id}/>
        <div className='productTitle'>{item.title.substring(0, 12)}</div> 
        <div className='productPrice'><b>${`${item.price}`}</b></div>
        <button className='cartButton btn btn-dark' onClick={()=> removeItem(item.id)}>Remove</button>
        </li></>
  )
};

export default CartItem;
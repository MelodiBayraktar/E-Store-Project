import './style.css';
import { useContext } from 'react';
import cartContext from '../../Context/Cart/CartContext';
import CartItem  from '../CartItem/CartItem';

const Cart = () => {
    const {showCart,cartItems,showHideCart} = useContext(cartContext);
    
    return(
        <>
        {showCart && (
            <div className='cartWrapper'>
                <div style={{textAlign : "right"}}>
                    <i style={{cursor:"pointer"}} className="fa fa-times-circle" aria-hidden="true"
                    onClick={showHideCart}></i>
                </div>
                <div className='cartInnerWrapper'>
                    
                    {cartItems.length ===0 ? (<h5>Cart is Empty</h5>) : (
                        <ul>
                            {cartItems.map(item => (
                                <CartItem key={item.id} item={item}/>
                            ))}
                        </ul>
                    )}
                </div>
                <hr/>
                <div className='cartTotal'>
                    <div>Cart Total</div>
                    <div></div>
                    <div style={{marginLeft:5}}>
                        {cartItems.reduce((amount,item)=>item.price + amount,0)}
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
export default Cart;
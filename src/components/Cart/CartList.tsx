import React from 'react'
import { Cart } from '../../actions';
import CartItem from './CartItem';

interface CartListProps {
    carts: Cart[];
}
  
const CartList: React.FC<CartListProps> = ({ carts }) => {
    return (
        <section className='grid grid-cols pb-6 md:pb-12'>
            {carts.map((cart) => (
                <CartItem cart={cart} key={cart.id} />
            ))}
        </section>
    );
};
  
export default CartList;

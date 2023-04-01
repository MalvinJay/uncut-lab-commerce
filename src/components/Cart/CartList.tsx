import React from 'react'
import { Cart } from '../../actions';
import CartItem from './CartItem';

interface CartListProps {
    cart: Cart[];
}
  
const CartList: React.FC<CartListProps> = ({ cart }) => {
    return (
        <section className='grid grid-cols pb-6 md:pb-12'>
            {cart.map((item) => (
                <CartItem key={item?.id} cart={item} />
            ))}
        </section>
    );
};
  
export default CartList;

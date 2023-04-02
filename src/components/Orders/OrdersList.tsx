import React from 'react'
import { Order } from '../../actions'
import OrderItem from './OrderItem'

interface CartListProps {
    orders: Order[];
}
  
const OrderList: React.FC<CartListProps> = ({ orders }) => {
    return (
        <section className='grid grid-cols gap-y-5 pb-6 md:pb-12'>
            {orders.map((item) => (
                <OrderItem key={item?.order_id} order={item} />
            ))}
        </section>
    );
};
  
export default OrderList;

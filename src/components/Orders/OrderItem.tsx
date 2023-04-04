import React from 'react'
import { Order } from '@/src/interfaces';
import Image from 'next/image';
import { repeatOrder } from '@/src/redux/features/orderSlice';
import { useAppDispatch } from '@/src/redux/hooks';

import toast from 'react-hot-toast';
import uuid from 'react-uuid';

interface CartItemProps {
    order: Order;
}

const CartItem: React.FC<CartItemProps> = ({ order }) => {
    const dispatch = useAppDispatch();

    const {
        name,
        currency,
        price,
        order_id,
        pickup_date,
        pickup_time,
        image,
        status
    } = order;

    const handleRepeatOrder = () => {
        dispatch(repeatOrder({ ...order, order_id: uuid()?.slice(0,8) }))
        toast.success('Order repeated', { duration: 3000 });
    }

    return (
        <div className='sm:flex items-center justify-between sm:gap-x-4 lg:gap-x-0 p-5 border border-gray-200 overflow-y-hidden hover:bg-slate-50 cursor-pointer'>
            <div className='relative w-full sm:w-auto h-[17rem] sm:h-28'>
                <Image
                    src={image?.src}
                    width={100}
                    height={150}
                    className="w-full h-full object-cover bg-gray-100 transition duration-700"
                    alt={name} 
                />
            </div>

            <div className="flex flex-col space-y-2 mt-4 sm:mt-0 !text-lg md:text-base">
                <h2 className='text-gray-500 font-medium'>Order Number</h2>
                <p className='text-black font-bold'>{order_id}</p>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className='text-gray-500 font-medium'>Pick-up Date</h2>
                <p className='text-black font-bold'>{pickup_date} | {pickup_time}</p>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className='text-gray-500 font-medium'>Status</h2>
                <p className='text-black font-bold'>{status}</p>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className='text-gray-500 font-medium'>Order Amount</h2>
                <p className='text-black font-bold'>{currency}{price}</p>
            </div>
            <div className='flex gap-x-3 mt-4 sm:mt-0'>
                <button className="w-32 text-base py-2 font-semibold text-black border border-black hover:bg-opacity-90"
                    onClick={handleRepeatOrder}
                >
                    Repeat Order
                </button>
                <button className="w-32 py-2 text-base font-semibold text-white bg-[#579d81] border border-[#579d81] hover:bg-opacity-90">
                    View Details
                </button>
            </div>
        </div>
    )
}

export default CartItem;

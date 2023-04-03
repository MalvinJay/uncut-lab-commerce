import React from 'react'
import { Cart } from '@/src/interfaces';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SelectListbox from '../common/SelectListbox/SelectListBox';
import { quantityList } from '@/src/helpers';

interface CartItemProps {
    cart: Cart;
}

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
    const {
        id,
        name,
        category,
        currency,
        price,
        weight,
        quantity,
        image
    } = cart;

    return (
        <div className="sm:flex justify-between bg-white py-8 border-b border-gray-200">
            <div className='sm:flex items-start '>
                <div className='relative w-full sm:w-56 h-40'>
                    <Image
                        src={image?.src}
                        width={132}
                        height={176}
                        className="w-full h-full object-cover bg-gray-100 transition duration-700"
                        alt={name} 
                    />
                </div>

                <div className="sm:ml-10 w-full h-full flex flex-col justify-between">
                    <div className="mt-5 sm:mt-0 space-y-2 text-base text-gray-500 font-semibold">
                        <h2 className="text-xl text-gray-900 font-bold">{name}</h2>
                        <p>Weight: {weight}</p>
                        <p>Category: {category}</p>
                    </div>

                    <div className='relative'>
                        <SelectListbox list={quantityList} styles="w-16 h-8" />
                    </div>
                </div>
            </div>

            <div className="flex pt-4 sm:pt-0 sm:flex-col justify-between">
                <p className="text-xl font-bold text-black text-end">{currency}{price}</p>
                
                <div className="inline-flex items-center space-x-1 cursor-pointer p-1 hover:bg-gray-100">
                    <XMarkIcon className='w-5 font-bold text-gray-500 fill-current' />
                    <span className='text-base text-gray-500 font-bold'>Remove</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;

import React from 'react'
import { Cart } from '@/src/interfaces';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

// import SelectListbox from '../common/SelectListbox/SelectListBox';
import { quantityList } from '@/src/helpers';
import { updateCart } from '@/src/redux/features/cartSlice';
import { useAppDispatch } from '@/src/redux/hooks';

interface CartItemProps {
    cart: Cart;
    confirmRemove: (cart: Cart) => void;
}

const CartItem: React.FC<CartItemProps> = ({ cart, confirmRemove }) => {
    const dispatch = useAppDispatch();

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

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const currentCart = { ...cart, quantity: Number(value) };

        dispatch(updateCart(currentCart))
        toast.success('Item Updated!', { duration: 3000})
    }

    return (
        <div className="sm:flex justify-between bg-white py-8 border-b border-gray-200">
            <div className='sm:flex items-start '>
                <div className='relative w-full sm:w-56 h-[17rem] sm:h-40'>
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

                    <div className='relative mt-4 md:mt-0'>
                        {/* <SelectListbox list={quantityList} styles="w-16 h-8" /> */}
                        <select 
                            name="quantity"
                            id="quantity"
                            onChange={handleOnChange}
                            defaultValue={quantity} className='font-semibold w-1/2 md:w-16 h-8 border border-gray-300 pl-1 text-left focus:outline-none'
                        >
                            {quantityList.map(el => (
                                <option value={el.value} key={el.id}>{el.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex pt-4 sm:pt-0 sm:flex-col justify-between">
                <p className="text-2xl md:text-xl font-bold text-black text-end">{currency}{price}</p>
                
                <div className="inline-flex items-center space-x-1 cursor-pointer p-1 hover:bg-gray-100"
                    onClick={() => confirmRemove(cart)}
                >
                    <XMarkIcon className='w-5 font-bold text-gray-500 fill-current' />
                    <span className='text-base text-gray-500 font-bold'>Remove</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;

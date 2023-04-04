import React from 'react'
import { useRouter } from 'next/router';
import { countries, states } from '@/src/helpers';
import { initialState, saveAddress } from '@/src/redux/features/checkoutSlice';
import { Cart, CheckoutInfo } from '@/src/interfaces';
import { useAppDispatch } from '@/src/redux/hooks';
import { placeOrder } from '@/src/redux/features/orderSlice';

import uuid from 'react-uuid';
import toast from 'react-hot-toast';
import { clearCart } from '@/src/redux/features/cartSlice';

interface SummaryListProps {
    List: Cart[];
};

const CheckoutInfo: React.FC<SummaryListProps> = ({ List }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const formElement = React.useRef() as React.MutableRefObject<HTMLFormElement>;

    const handlePlaceOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // 1. Save shipping address
        let data: CheckoutInfo = initialState.address;

        let arrLen = formElement.current.length;

        for (let index = 0; index < arrLen; index++) {
            data = { ...data, [formElement.current[index].id]: formElement.current[index]?.value }
        }

        console.log('FormData:', data);
        dispatch(saveAddress(data))

        // 2. Proceed to save current cart as order!
        const orderList = List.map(el => {
            return {
                ...el,
                order_id: uuid()?.slice(0,8), 
                pickup_date: data.date, 
                pickup_time: data.time, 
                status: 'Pending'
            }
        });

        dispatch(placeOrder(orderList));
        toast.success('Order placed successfully!', { duration: 3000 });
        
        // clear cart
        dispatch(clearCart([]))

        setTimeout(() => {
            router.push('/orders');
        }, 2000);
    };

    return (
        <form id="formList" className="w-full grid grid-cols-2 gap-6 py-6 appear" ref={formElement}>
            <div className='col-start-1 col-end-2'>
                <label htmlFor="firstname" className='font-semibold'>First Name</label>
                <input id="firstname" name="firstname" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="lastname" className='font-semibold'>Last Name</label>
                <input id="lastname" name="lastname" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-1 col-end-2'>
                <label htmlFor="email" className='font-semibold'>Email Address</label>
                <input id="email" name="email" type="email" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' />
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="phone_number" className='font-semibold'>Phone Number</label>
                <input id="phone_number" name="phone_number" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="tel" />
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="address" className='font-semibold'>Address</label>
                <input id="address" name="address" placeholder="123 Main St" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="address2" className='font-semibold'>Address <span className='opacity-50'>(Optional)</span></label>
                <input id="address2" name="address2" placeholder="123 Main St" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="town_city" className='font-semibold'>Town/City</label>
                <input id="town_city" name="town_city" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='grid grid-cols-3 col-start-1 col-end-3 gap-6'>
                <div className='relative'>
                    <label htmlFor="country" className='font-semibold'>Country</label>
                    {/* <SelectListbox list={countries} styles="w-full h-10 mt-2" /> */}
                    <select 
                        id="country"
                        className='font-semibold w-full h-10 mt-2 border border-gray-300 pl-1 text-left focus:outline-none'
                    >
                        {countries.map(el => (
                            <option value={el.value} key={el.id}>{el.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="state" className='font-semibold'>State</label>
                    {/* <SelectListbox list={states} styles="w-full h-10 mt-2" /> */}
                    <select 
                        id="state"
                        className='font-semibold w-full h-10 mt-2 border border-gray-300 pl-1 text-left focus:outline-none'
                    >
                        {states.map(el => (
                            <option value={el.value} key={el.id}>{el.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="zip_postcode" className='font-semibold'>Zip / Postcode</label>
                    <input id="zip_postcode" name="zip_postcode" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
                </div>
            </div>
            <div className='col-start-1 col-end-3 pt-2 pb-5 border-b border-gray-200'>
                <h2 className="text-2xl font-bold">Schedule Order Pick-up</h2>
            </div>
            <div className='col-start-1 col-end-2'>
                <label htmlFor="date" className='font-semibold'>Date</label>
                <input id="date" name="date" placeholder="04/09/2022" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="date" />
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="time" className='font-semibold'>Time</label>
                <input id="time" name="time" placeholder="00:00" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="time" />
            </div>            
            <div className='col-start-1 col-end-3'>
                <label htmlFor="description" className='font-semibold'>Description</label>
                <textarea id="description" rows={5} name="description" placeholder="" className='w-full mt-2 text-base p-3 border border-gray-300 outline-none' />
            </div>
            <div className='col-start-1 md:col-start-2 col-end-3 flex justify-end'>
                <button className="w-full md:w-3/4 mt-6 bg-[#579d81] py-2 font-medium text-white text-lg hover:bg-opacity-90"
                    onClick={handlePlaceOrder}
                >
                    Plae Order
                </button>
            </div>            
        </form>
    )
}

export default CheckoutInfo;

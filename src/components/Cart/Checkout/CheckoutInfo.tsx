import React from 'react'
import { useRouter } from 'next/router';
import SelectListbox from '../../common/SelectListbox/SelectListBox';
import { countries, states } from '@/src/helpers';

const CartSummary: React.FC = () => {
    const router = useRouter();

    const handlePlaceOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
        // handle checkout
        e.preventDefault();
    };

    return (
        <form className="w-full grid grid-cols-2 gap-6 py-6">
            <div className='col-start-1 col-end-2'>
                <label htmlFor="firstname" className='font-semibold'>First Name</label>
                <input name="firstname" placeholder="" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="lastname" className='font-semibold'>Last Name</label>
                <input name="lastname" placeholder="" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-1 col-end-2'>
                <label htmlFor="email" className='font-semibold'>Email Address</label>
                <input name="email" type="email" placeholder="" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' />
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="phone_number" className='font-semibold'>Phone Number</label>
                <input name="phone_number" placeholder="" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="tel" />
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="address" className='font-semibold'>Address</label>
                <input name="address" placeholder="123 Main St" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="address2" className='font-semibold'>Address <span className='opacity-50'>(Optional)</span></label>
                <input name="address2" placeholder="123 Main St" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="town_city" className='font-semibold'>Town/City</label>
                <input name="town_city" placeholder="" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='grid grid-cols-3 col-start-1 col-end-3 gap-6'>
                <div className='relative'>
                    <label htmlFor="country" className='font-semibold'>Country</label>
                    <SelectListbox list={countries} styles="w-full h-12 mt-2" />
                </div>
                <div>
                    <label htmlFor="state" className='font-semibold'>State</label>
                    <SelectListbox list={states} styles="w-full h-12 mt-2" />
                </div>
                <div>
                    <label htmlFor="zip_postcode" className='font-semibold'>Zip / Postcode</label>
                    <input name="town_city" placeholder="" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
                </div>
            </div>
            <div className='col-start-1 col-end-3 pt-2 pb-5 border-b border-gray-200'>
                <h2 className="text-3xl font-bold">Schedule Order Pick-up</h2>
            </div>
            <div className='col-start-1 col-end-2'>
                <label htmlFor="date" className='font-semibold'>Date</label>
                <input name="date" placeholder="04/09/2022" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="date" />
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="time" className='font-semibold'>Time</label>
                <input name="time" placeholder="00:00" className='w-full h-12 mt-2 text-base px-3 border border-gray-300 outline-none' type="time" />
            </div>            
            <div className='col-start-1 col-end-3'>
                <label htmlFor="town_city" className='font-semibold'>Description</label>
                <textarea rows={5} name="town_city" placeholder="" className='w-full mt-2 text-base px-3 border border-gray-300 outline-none' type="text" />
            </div>
            <div className='col-start-2 col-end-3 flex justify-end'>
                <button className="w-full md:w-3/4 mt-6 bg-[#579d81] py-2 font-medium text-white text-lg hover:bg-opacity-90"
                    onClick={handlePlaceOrder}
                >
                    Plae Order
                </button>
            </div>            
        </form>
    )
}

export default CartSummary;

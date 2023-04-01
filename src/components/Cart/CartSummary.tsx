import React from 'react'
import { Cart } from '@/src/actions';
import { SummaryInfo } from '@/src/interfaces';

interface InfoInterface {
    info: SummaryInfo
}

const CartSummary: React.FC<InfoInterface> = ({ info }) => {
    const {
        total,
        sub_total,
        currency,
        delivery,
        quantity,
        tax,
    } = info;

    return (
    <div className="w-full h-full bg-white shadow-form">
        <div className='p-6 border-b border-gray-200'>
            <h2 className='text-2xl font-bold'>Order Summary</h2>
        </div>
        <div className='p-6 font-bold text-lg'>
            <div className='flex justify-between items-stretch gap-x-3'>
                <input placeholder="Enter Coupon Code" className='w-full text-base font-semibold px-3 border border-gray-200 outline-none' type="text" />
                <button className="bg-[#579d81] py-3 px-2 font-medium text-white text-lg hover:bg-opacity-90">
                    Apply
                </button>
            </div>

            <hr className="my-6" />

            <div className="mb-2 flex justify-between space-y-2">
                <p className="text-black font-bold">Item Subtotal ({quantity})</p>
                <p className="text-gray-500">{currency}{sub_total}</p>
            </div>
            <div className="flex justify-between mb-3">
                <p className="text-black">Delivery</p>
                <p className="text-gray-500">{delivery}</p>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between mb-3">
                <p className="text-black">Estimated Tax</p>
                <p className="text-gray-500">{currency}{tax}</p>
            </div>

            <div className="flex justify-between mb-3">
                <p className="text-black">Total</p>
                <p className="text-gray-500">{currency}{total}</p>
            </div>

            <button className="w-full mt-6 bg-[#579d81] py-3 font-medium text-white text-lg hover:bg-opacity-90">
                Check out
            </button>
        </div>
      </div>
    )
}

export default CartSummary;

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SummaryInfo } from '@/src/interfaces';

interface SummaryInterface {
    children: React.ReactNode;
    info: SummaryInfo;
}

const CartSummary: React.FC<SummaryInterface> = ({ children, info }) => {
    const router = useRouter();

    const {
        total,
        sub_total,
        currency,
        delivery,
        quantity,
        tax,
    } = info;

    const handleCheckout = () => {
        if (router.route !== '/checkout' && quantity > 0) router.push('/checkout');
    }

    return (
    <>
        <div className="w-full h-full bg-white shadow-form appear">
            <div className='p-6 border-b border-gray-300'>
                <h2 className='text-2xl font-bold'>Order Summary</h2>
            </div>

            {/* Optional top section */}
            {children}

            <div className='p-6 font-bold text-lg'>
                <div className='flex justify-between items-stretch gap-x-3'>
                    <input placeholder="Enter Coupon Code" className='w-full text-base font-semibold px-3 border border-gray-300 outline-none' type="text" />
                    <button className="bg-[#579d81] p-2 font-medium text-white text-lg hover:bg-opacity-90">
                        Apply
                    </button>
                </div>

                <hr className="my-6 border-gray-300" />

                <div className="mb-2 flex justify-between space-y-2">
                    <p className="text-black font-bold">Item Subtotal ({quantity})</p>
                    <p className="text-gray-500">{currency}{sub_total}</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p className="text-black">Delivery</p>
                    <p className="text-gray-500">{delivery}</p>
                </div>

                <hr className="my-6 border-gray-300" />

                <div className="flex justify-between mb-3">
                    <p className="text-black">Estimated Tax</p>
                    <p className="text-gray-500">{currency}{tax}</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p className="text-black">Total</p>
                    <p className="text-gray-500">{currency}{total}</p>
                </div>

                <button className="w-full mt-6 bg-[#579d81] py-3 font-medium text-white text-lg hover:bg-opacity-90"
                    onClick={() => handleCheckout()}
                >
                    Checkout
                </button>
            </div>
        </div>

        <div className='py-5'>
            <p className='text-center font-semibold flex items-center justify-center space-x-2'>
                <Image src="/assets/images/connect.png" width={17} height={17} alt="connect" />
                <span className='text-gray-500'>Need Help?</span>
                <button className='text-[#6fab94]'>Chat Now</button>
            </p>
        </div>        
    </>
    )
}

export default CartSummary;

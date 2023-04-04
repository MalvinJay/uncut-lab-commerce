import React from 'react'
import { useRouter } from 'next/router';
import { countries, states, validationFields } from '@/src/helpers';
import { saveAddress } from '@/src/redux/features/checkoutSlice';
import { Cart, CheckoutInfo } from '@/src/interfaces';
import { useAppDispatch } from '@/src/redux/hooks';
import { placeOrder } from '@/src/redux/features/orderSlice';
import { useForm } from "react-hook-form"

import uuid from 'react-uuid';
import toast from 'react-hot-toast';
import { clearCart } from '@/src/redux/features/cartSlice';

interface SummaryListProps {
    List: Cart[];
};

const CheckoutInfoPg: React.FC<SummaryListProps> = ({ List }) => {
    const { register, clearErrors, setValue, trigger, getValues, handleSubmit,
        formState: { errors }
    } = useForm();

    const dispatch = useAppDispatch();
    const router = useRouter();

    const onSubmit = () => {
        // 1. Save shipping address
        const data = {
            firstname: getValues()?.firstname,
            lastname: getValues()?.lastname,
            email: getValues()?.email,
            phone_number: getValues()?.phone_number,
            address: getValues()?.address,
            address2: getValues()?.address2,
            town_city: getValues()?.town_city,
            country: getValues()?.country,
            state: getValues()?.state,
            zip_postcode: getValues()?.zip_postcode,
            date: getValues()?.date,
            time: getValues()?.time,
            description: getValues()?.description,
        };

        console.log('Available address data:', data);

        dispatch(saveAddress(data))

        // 2. Proceed to save current cart as order!
        const orderList = List.map(el => {
            return {
                ...el,
                order_id: uuid()?.slice(0, 8),
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
        }, 1000);
    };

    const handleForm = () => {
        try {
            trigger(validationFields)
                .then((res) => {
                    if (res) {
                        onSubmit()
                    } else {
                        console.log('Error after validation', res)
                    }
                })
        } catch (error) {
            console.error('Error validating form fields:', error);
        }
    }

    return (
        <form
            id="formList"
            className="w-full grid grid-cols-2 gap-6 py-6 appear"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='col-start-1 col-end-2'>
                <label htmlFor="firstname" className='font-semibold'>First Name</label>
                <input id="firstname" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text"
                    {...register("firstname", { required: true })}
                />
                {errors.firstname && <div className='text-red-500 text-sm pt-2'>Please provide your firstname</div>}
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="lastname" className='font-semibold'>Last Name</label>
                <input id="lastname" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text"
                    {...register("lastname", { required: true })}
                />
                {errors.lastname && <div className='text-red-500 text-sm pt-2'>Please provide your lastname</div>}
            </div>
            <div className='col-start-1 col-end-2'>
                <label htmlFor="email" className='font-semibold'>Email Address</label>
                <input id="email" type="email" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none'
                    {...register("email", { required: true })}
                />
                {errors.email && <div className='text-red-500 text-sm pt-2'>Please provide your email</div>}
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="phone_number" className='font-semibold'>Phone Number</label>
                <input id="phone_number" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="tel"
                    {...register("phone_number", { required: true })}
                />
                {errors.phone_number && <div className='text-red-500 text-sm pt-2'>Please provide your phone number</div>}
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="address" className='font-semibold'>Address</label>
                <input id="address" placeholder="123 Main St" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text"
                    {...register("address", { required: true })}
                />
                {errors.address && <div className='text-red-500 text-sm pt-2'>Please provide your address</div>}
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="address2" className='font-semibold'>Address <span className='opacity-50'>(Optional)</span></label>
                <input id="address2" placeholder="123 Main St" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text"
                    {...register("address2", { required: true })}
                />
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="town_city" className='font-semibold'>Town/City</label>
                <input id="town_city" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text"
                    {...register("town_city", { required: true })}
                />
                {errors.town_city && <div className='text-red-500 text-sm pt-2'>Please provide your town/city</div>}
            </div>
            <div className='grid grid-cols-3 col-start-1 col-end-3 gap-6'>
                <div className='relative'>
                    <label htmlFor="country" className='font-semibold'>Country</label>
                    {/* <SelectListbox list={countries} styles="w-full h-10 mt-2" /> */}
                    <select
                        id="country"
                        className='font-semibold w-full h-10 mt-2 border border-gray-300 pl-1 text-left focus:outline-none'
                        {...register("country", { required: true })}
                    >
                        {countries.map(el => (
                            <option value={el.value} key={el.id}>{el.name}</option>
                        ))}
                    </select>
                    {errors.country && <div className='text-red-500 text-sm pt-2'>Please provide your country</div>}
                </div>
                <div>
                    <label htmlFor="state" className='font-semibold'>State</label>
                    {/* <SelectListbox list={states} styles="w-full h-10 mt-2" /> */}
                    <select
                        id="state"
                        className='font-semibold w-full h-10 mt-2 border border-gray-300 pl-1 text-left focus:outline-none'
                        {...register("state", { required: true })}
                    >
                        {states.map(el => (
                            <option value={el.value} key={el.id}>{el.name}</option>
                        ))}
                    </select>
                    {errors.state && <div className='text-red-500 text-sm pt-2'>Please provide your state</div>}
                </div>
                <div>
                    <label htmlFor="zip_postcode" className='font-semibold'>Zip / Postcode</label>
                    <input id="zip_postcode" placeholder="" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="text"
                        {...register("zip_postcode", { required: true })}
                    />
                    {errors.zip_postcode && <div className='text-red-500 text-sm pt-2'>Please provide your zip_postcode</div>}
                </div>
            </div>
            <div className='col-start-1 col-end-3 pt-2 pb-5 border-b border-gray-200'>
                <h2 className="text-2xl font-bold">Schedule Order Pick-up</h2>
            </div>
            <div className='col-start-1 col-end-2'>
                <label htmlFor="date" className='font-semibold'>Date</label>
                <input id="date" placeholder="04/09/2022" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="date"
                    {...register("date", { required: true })}
                />
                {errors.date && <div className='text-red-500 text-sm pt-2'>Please provide date</div>}
            </div>
            <div className='col-start-2 col-end-3'>
                <label htmlFor="time" className='font-semibold'>Time</label>
                <input id="time" placeholder="00:00" className='w-full h-10 mt-2 text-base px-3 border border-gray-300 outline-none' type="time"
                    {...register("time", { required: true })}
                />
                {errors.time && <div className='text-red-500 text-sm pt-2'>Please provide time</div>}
            </div>
            <div className='col-start-1 col-end-3'>
                <label htmlFor="description" className='font-semibold'>Description</label>
                <textarea id="description" rows={5} name="description" placeholder="" className='w-full mt-2 text-base p-3 border border-gray-300 outline-none' />
                {/* {errors.description && <div className='text-red-500 text-sm pt-2'>Please provide description</div>} */}
            </div>
            <div className='col-start-1 md:col-start-2 col-end-3 flex justify-end'>
                <button type="button" className="w-full md:w-3/4 mt-6 bg-[#579d81] py-2 font-medium text-white text-lg hover:bg-opacity-90"
                    onClick={handleForm}
                >
                    Plae Order
                </button>
            </div>
        </form>
    )
}

export default CheckoutInfoPg;

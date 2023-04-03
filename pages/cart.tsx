"use client";

import React, { ButtonHTMLAttributes, useEffect } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '@/src/redux/hooks';
import { updateOrderSummary } from '@/src/redux/features/cartSlice';

import toast from 'react-hot-toast';

import BreadCrumb from '@/src/components/common/Breadcrumb/Breadcrumb'
import CartList from '@/src/components/Cart/CartList'
import CartSummary from '@/src/components/Cart/CartSummary';

const breadcrumbList = [
  {
    id: 1,
    name: "Product",
    link: "/products"
  },
  {
    id: 2,
    name: "Shopping Cart",
    link: "/cart"
  },
];

const Cart: NextPage = () => {
  const dispatch = useAppDispatch();
  const { items: cartList, summary } = useAppSelector((state) => state.cart);

  const handleCartUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    toast.success('Cart Updated!', { duration: 3000})
  }

  useEffect(() => {
    // set order summary
    const total_quantity = cartList.reduce((accum, curr) => accum + curr.quantity, 0)
    const sub_total = cartList.reduce((accum, curr) => accum + (curr.quantity * Number(curr.price)), 0)
    let tax = 3;

    if (cartList.length <= 0) {
      tax = 0
    }

    const orderInfo = {
      total: Number(sub_total + tax),
      sub_total: sub_total,
      quantity: total_quantity,
      currency: '$',
      delivery: 'In-Store Pickup',
      tax: tax,
    }

    dispatch(updateOrderSummary(orderInfo))
  }, [cartList]);
  
  return (
    <>
      <Head>
        <title>Cart | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <section className='bg-white min-h-screen max-w-6xl mx-auto px-4'>
        <BreadCrumb list={breadcrumbList} />

        <div className='md:flex items-start gap-x-4 sm:gap-x-8 lg:gap-x-20'>
          <div className="w-full md:w-2/3">
            <div className='flex justify-between items-center pt-8 pb-5 border-b border-gray-200'>
              <h2 className="text-2xl font-bold">Shopping Cart</h2>

              <div className='text-2xl font-semibold'>
                {cartList.length ? `${cartList.length} Item${cartList.length > 1 ? 's':''}` : ''}
              </div>
            </div>

            {cartList?.length > 0 ? 
              <CartList cart={cartList} />
            :
              <div className='py-20 text-center text-2xl font-bold'>No item in cart</div>
            }

            <div className='flex justify-between items-center text-base font-medium text-[#6fab94] pb-12 md:pb-16'>
              <span className='inline-flex items-center space-x-1 group'>
                <ChevronLeftIcon className="w-5 tranform transition duration-300 group-hover:-translate-x-1" />
                <Link href="/">Continue Shopping</Link>
              </span>

              {cartList?.length > 0 && (
                <button onClick={handleCartUpdate}>Update Cart</button>
              )}
            </div>              
          </div>

          <div className="w-full md:w-1/3 mt-6 h-full md:mt-8">
            <CartSummary info={summary}>
              <div />
            </CartSummary>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;
import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { cartList } from '@/src/reducers/cart';
import { cartSummary } from '@/src/helpers';

import AppLayout from '@/src/components/Layout/AppLayout/AppLayout'
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

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <AppLayout>
        <section className='bg-white min-h-screen max-w-6xl mx-auto px-4'>
          <BreadCrumb list={breadcrumbList} />

          <div className='md:flex items-start gap-x-4 sm:gap-x-8 lg:gap-x-20'>
            <div className="w-full md:w-2/3">
              <div className='flex justify-between items-center pt-8 pb-5 border-b border-gray-200'>
                <h2 className="text-3xl font-bold">Shopping Cart</h2>

                <div className='text-2xl font-semibold'>
                  {cartList.length} Items
                </div>
              </div>

              <CartList cart={cartList} />

              <div className='flex justify-between items-center text-base font-medium text-[#6fab94] pb-12 md:pb-16'>
                <span className='inline-flex items-center space-x-1 group'>
                  <ChevronLeftIcon className="w-5 tranform transition duration-300 group-hover:-translate-x-1" />
                  <Link href="/">Continue Shopping</Link>
                </span>

                <button>Update Cart</button>
              </div>              
            </div>

            <div className="w-full md:w-1/3 mt-6 h-full md:mt-8">
              <CartSummary info={cartSummary}>
                <></>
              </CartSummary>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  )
}

export default Cart;
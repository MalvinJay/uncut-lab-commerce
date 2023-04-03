"use client";

import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';

import BreadCrumb from '@/src/components/common/Breadcrumb/Breadcrumb'
import CheckoutInfo from '@/src/components/Cart/Checkout/CheckoutInfo'
import CartSummary from '@/src/components/Cart/CartSummary'
import SummaryList from '@/src/components/Cart/Checkout/SummaryList';
import { useAppSelector } from '@/src/redux/hooks';

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
  {
    id: 3,
    name: "Checkout",
    link: "/checkout"
  },
];

const Checkout: NextPage = () => {
  const { items: cartList, summary } = useAppSelector((state) => state.cart);

  return (
    <>
      <Head>
        <title>Checkout | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <section className='bg-white min-h-screen max-w-6xl mx-auto px-4'>
        <BreadCrumb list={breadcrumbList} />

        <div className='md:flex items-start gap-x-4 sm:gap-x-8'>
          <div className="w-full md:w-7/12">
            <div className='pt-8 pb-5 border-b border-gray-200'>
              <h2 className="text-2xl font-bold">Your Information</h2>
            </div>

            <CheckoutInfo List={cartList} />
          </div>

          <div className="w-full md:w-5/12 mt-6 h-full md:mt-8 md:pl-10">
            <CartSummary info={summary}>
              <SummaryList List={cartList} />
            </CartSummary>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout;
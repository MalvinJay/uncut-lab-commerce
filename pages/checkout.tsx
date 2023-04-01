import React from 'react';
import Head from 'next/head';
import { cartSummary } from '@/src/helpers';
import { cartList } from '@/src/reducers/cart';

import AppLayout from '@/src/components/Layout/AppLayout/AppLayout'
import BreadCrumb from '@/src/components/common/Breadcrumb/Breadcrumb'
import CheckoutInfo from '@/src/components/Cart/Checkout/CheckoutInfo'
import CartSummary from '@/src/components/Cart/CartSummary'
import SummaryList from '@/src/components/Cart/Checkout/SummaryList';

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

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <AppLayout>
        <section className='bg-white min-h-screen max-w-6xl mx-auto px-4'>
          <BreadCrumb list={breadcrumbList} />

          <div className='md:flex items-start gap-x-4 sm:gap-x-8'>
            <div className="w-full md:w-7/12">
              <div className='pt-8 pb-5 border-b border-gray-200'>
                <h2 className="text-3xl font-bold">Your Information</h2>
              </div>

              <CheckoutInfo />
            </div>

            <div className="w-full md:w-5/12 mt-6 h-full md:mt-8 md:pl-10">
              <CartSummary info={cartSummary}>
                <SummaryList List={cartList} />
              </CartSummary>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  )
}

export default Checkout;
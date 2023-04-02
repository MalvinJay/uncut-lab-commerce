import React from 'react'
import Head from 'next/head'
import { orderList } from '@/src/reducers/orders'

import AppLayout from '@/src/components/Layout/AppLayout/AppLayout'
import BreadCrumb from '@/src/components/common/Breadcrumb/Breadcrumb'
import OrderList from '@/src/components/Orders/OrdersList'

const breadcrumbList = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },
  {
    id: 2,
    name: "Account",
    link: "/account"
  }
];

const Cart = () => {
  return (
    <>
      <Head>
        <title>Orders | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <AppLayout>
        <section className='bg-white min-h-screen max-w-6xl mx-auto px-4'>
          <BreadCrumb list={breadcrumbList} />

          <div className="w-full">
            <div className='pt-8 pb-5'>
              <h2 className="text-2xl font-bold">My Orders</h2>
            </div>

            <OrderList orders={orderList} />             
          </div>
        </section>
      </AppLayout>
    </>
  )
}

export default Cart;
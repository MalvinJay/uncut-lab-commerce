"use client";

import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next';
import Head from 'next/head'

import BreadCrumb from '@/src/components/common/Breadcrumb/Breadcrumb'
import OrderList from '@/src/components/Orders/OrdersList'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setOrders } from '@/src/redux/features/orderSlice';

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

const Order: NextPage = () => {
  const dispatch = useAppDispatch();
  const { orders: orderList } = useAppSelector((state) => state.order);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // fetch all cached orders
    try {
      const cachedOrders: string = localStorage.getItem("orders") || '';

      if (cachedOrders || !cachedOrders?.includes('undefined')) {
        const List = JSON.parse(cachedOrders);
        if (List.length)
        dispatch(setOrders(List))
      }
      
      setloading(false);
    } catch (error) {
      console.error('Error fetching cached orders:', error);
      setloading(false);
    }
  }, [])
  

  return (
    <>
      <Head>
        <title>Orders | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <section className='bg-white min-h-screen max-w-6xl mx-auto px-4'>
        <BreadCrumb list={breadcrumbList} />

        <div className="w-full">
          <div className='pt-8 pb-5'>
            <h2 className="text-2xl font-bold">My Orders</h2>
          </div>

          {loading ? 
            <div className='h-[40vh] flex justify-center items-center'>
              <svg className="animate-spin ml-4 h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#579d81" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          :
          orderList?.length > 0 ? 
            <OrderList orders={orderList} />    
          :
            <div className='py-20 text-center text-2xl font-bold'>No Orders!</div>
          }
                   
        </div>
      </section>
    </>
  )
}

export default Order;
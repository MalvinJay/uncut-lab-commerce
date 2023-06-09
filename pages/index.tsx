"use client";

import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { homeBreadcrumb, sortList } from '@/src/helpers'
import { ListInterface } from '@/src/interfaces'
import { useAppSelector } from '@/src/redux/hooks'

import Dropdown from '@/src/components/common/Dropdown/Dropdown'
import BreadCrumb from '@/src/components/common/Breadcrumb/Breadcrumb'
import ProductList from '@/src/components/ProductList/ProductList'

const Home: NextPage = () => {
  const [selected, setselected] = useState(sortList[0]);
  const { products: productsList } = useAppSelector((state) => state.product);

  const handleSelection = (item: ListInterface) => {
    setselected(item)
    return;
  }

  return (
    <>
      <Head>
        <title>Home | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <section className='bg-white min-h-screen max-w-6xl mx-auto px-4'>
        {/* Page breadcrumb goes here.. */}
        <BreadCrumb list={homeBreadcrumb} />

        <div className='flex justify-between items-center py-8'>
          <h2 className="text-2xl font-bold">All Products</h2>

          <div className='flex items-center gap-x-2'>
            <span>Sort By: </span>

            <Dropdown
              position="-translate-x-1/4"
              dropdownButton={
                <div className='flex items-center gap-x-2'>
                  <span className='font-bold text-lg'>{selected.name}</span>
                  <ChevronDownIcon className="w-6" aria-hidden="true" />
                </div>
              }
              dropdownWidth="max-w-[10rem]"
              triggerState=""
            >
              <div className="relative bg-white p-3">
                {sortList.map((el, index) => (
                  <div 
                    key={index}
                    className='text-lg font-medium hover:bg-slate-50 py-1 cursor-pointer' 
                    onClick={() => handleSelection(el)}
                  >
                    {el.name}
                  </div>
                ))}
              </div>
            </Dropdown>
          </div>
        </div>

        {/* Products */}
        <ProductList products={productsList} />
      </section>
    </>
  )
}

export default Home;

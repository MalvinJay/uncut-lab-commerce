import React, { useState } from 'react'
import Head from 'next/head'
import { sortList } from '@/src/helpers'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { SortInterface } from '@/src/interfaces'

import AppLayout from '@/src/components/Layout/AppLayout/AppLayout'
import Dropdown from '@/src/components/common/Dropdown/Dropdown'
import BreadCrumb from '@/src/components/common/Breadcrumb/Breadcrumb'

const breadcrumbList = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },
  {
    id: 2,
    name: "Products",
    link: "/products"
  },
];

const Products = () => {
  const [selected, setselected] = useState(sortList[0]);

  const handleSelection = (item: SortInterface) => {
    setselected(item)
    return;
  }

  return (
    <>
      <Head>
        <title>Products | Uncut Lab Commerce</title>
        <meta name="description" content="Food on fleek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <AppLayout title="home">
        <section className='bg-white min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Page breadcrumb goes here.. */}
          <BreadCrumb list={breadcrumbList} />

          <div className='flex justify-between items-center py-8'>
            <h2 className="text-3xl font-bold">All Products</h2>

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

        </section>
      </AppLayout>
    </>
  )
}

export default Products;
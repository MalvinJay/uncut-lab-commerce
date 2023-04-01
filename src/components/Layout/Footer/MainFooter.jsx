import { company, contact, shop, socials, support } from '@/src/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MainFooter = () => {
  return (
    <footer className="mx-auto max-w-6xl py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link href="/">
            <span className="sr-only">Uncut Lab Commerce</span>
            <Image
              width={40}
              height={40}
              className="h-10 w-auto"
              src="/assets/images/II_LOGO 3.png"
              alt=""
            />
          </Link>

          <div className="flex items-center space-x-4 mt-10">
            {socials.map((el) => (
              <Link href={el.link} className="transform transition duration-500 hover:scale-110" key={el.name}>
                <Image src={el.icon} width={20} height={20} alt={el.name} className="fill-current"
                  style={{ filter: 'invert(51%) sepia(28%) saturate(530%) hue-rotate(104deg) brightness(102%) contrast(87%)' }}
                />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-black uppercase dark:text-gray-100">Support</h4>

          <div className="mt-3 grid space-y-3 text-base font-medium">
            {support.map((el) => (
              <p key={el.name}>
                <Link href={el.link} className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  {el.name}
                </Link>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-black uppercase dark:text-gray-100">Shop</h4>

          <div className="mt-3 grid space-y-3 text-base font-medium">
            {shop.map((el) => (
              <p key={el.name}>
                <Link href={el.link} className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  {el.name}
                </Link>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-black uppercase dark:text-gray-100">Company</h4>

          <div className="mt-3 grid space-y-3 text-base font-medium">
            {company.map((el) => (
              <p key={el.name}>
                <Link href={el.link} className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  {el.name}
                </Link>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-black uppercase dark:text-gray-100">Contact</h4>

          <div className="mt-3 grid space-y-3 text-base font-medium">
            {contact.map((el) => (
              <p key={el.name}>
                {el.type ? 
                  <span>{el.name}</span>
                :
                  <Link href={el.link} className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                    {el.name}
                  </Link>
                }
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Copyright (c) 2022. | & | Rose Garden. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default MainFooter;

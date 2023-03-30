import { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { socials, topMenus, profileList } from '@/src/helpers'

// Components
import Dropdown from '@/src/components/common/Dropdown/Dropdown'

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>



                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link href="/" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="/" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </Link>
                  </div>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <section className="bg-black hidden md:block">
          <div className="mx-auto max-w-7xl h-10 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium text-white">
            <Link href='/' className='flex items-center gap-x-3'>
              <Image priority src="/assets/images/truck.png" width={20} height={10} alt="store_pickup" />
              <span className='uppercase text-sm font-semibold leading-none'>Free in-store pickup</span>
            </Link>

            <div className='flex items-center'>
              <div className='inline-flex items-center gap-x-8 font-medium text-white text-sm'>
                {topMenus.map((el) => (
                  <Link key={el.name} href={el.route} className="hover:underline">{el.name}</Link>
                ))}

                <div className="inline-flex items-center gap-x-2">
                  <Image src="/assets/images/phone.png" width={20} height={10} alt="contact_us" />
                  <a href="tel:+6177757865" className='hover:underline'>(617) 775-7865</a>
                </div>
              </div>

              <div className="pl-32 flex items-center gap-x-6">
                {socials.map((el) => (
                  <Link href={el.link} className="transform transition duration-500 hover:scale-110" key={el.name}>
                    <Image src={el.icon} width={20} height={20} alt={el.name} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Top" className="shadow-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center">
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <span className="sr-only">Uncut Lab Commerce</span>
                <Image
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                  src="/assets/images/II_LOGO 3.png"
                  alt=""
                />
              </Link>

              <div className='relative pl-2 md:pl-16 lg:pl-32'>
                <Dropdown
                  position="-translate-x-1/4"
                  dropdownButton={
                    <div className='flex items-center gap-x-3'>
                      <span className='font-bold text-lg'>Shop</span>
                      <ChevronDownIcon className="w-6" aria-hidden="true" />
                    </div>
                  }
                >
                  <div className="relative bg-white p-5"></div>
                </Dropdown>
              </div>
            </div>

            <div className="ml-auto flex items-center">
              {/* Cart */}
              <div className="mr-4 flow-root lg:mr-12">
                <Link href="/" className="relative group -m-2 flex items-center p-3">
                  <Image 
                    src="/assets/images/shopping-bag.png"
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    width={26} 
                    height={22} 
                    alt="shopping_bag" 
                  />

                  <div className="absolute right-0 top-0 flex justify-center items-center h-5 w-5 rounded-full bg-[#ff7060] text-xs font-medium text-white border-2 border-white"> {/* group-hover:text-opacity-50 */}
                    0
                  </div>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>

              {/* Profile */}
              <div className="relative">
                <Dropdown
                  dropdownButton={
                    <Image src="/assets/images/profile.png" width={30} height={30} alt="profile" />
                  }
                >
                  <div className="relative bg-white p-5">
                    {profileList.map((el, index) => (
                      <div className='hover:bg-slate-50' key={index}>
                        {el.action === 'logout' ?
                          <div className='p-2' onClick={() => handleLogout()}>
                            {el.name}
                          </div> 
                        :
                          <Link href={el.link} className="block w-full p-2">{el.name}</Link>
                        }
                      </div>
                    ))}
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default MainHeader

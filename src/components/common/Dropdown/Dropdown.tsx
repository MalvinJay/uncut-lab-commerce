import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { DropdownInterface } from '@/src/interfaces';

const Dropdown: React.FC<DropdownInterface> = ({ 
    children, 
    dropdownButton, 
    position='-translate-x-3/4',
    dropdownWidth='max-w-[15rem] w-32',
    triggerState=''
}) => {
    return (
        <Popover>
            {({ open }) => (
                <>
                    <Popover.Button className={`${open ? triggerState : ''} group outline-none`}>
                        {dropdownButton}
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className={`${position} ${dropdownWidth} absolute z-[100] mt-3 mr-10 transform px-4 sm:px-0`}>
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                {children}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default Dropdown;

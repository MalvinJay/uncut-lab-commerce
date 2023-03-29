import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

interface DropdownProps {
    children: React.ReactNode;
    dropdownButton: React.ReactNode,
    position: String,
    triggerState: String,
}

const Dropdown: React.FC<DropdownProps> = ({ 
    children, 
    dropdownButton, 
    position='-translate-x-3/4',
    triggerState=''
}) => {
    return (
        <Popover>
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`${open ? triggerState : ''} group outline-none`}
                    >
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
                        <Popover.Panel className={`${position} absolute z-10 mt-3 mr-10 w-screen max-w-[15rem] transform px-4 sm:px-0`}>
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

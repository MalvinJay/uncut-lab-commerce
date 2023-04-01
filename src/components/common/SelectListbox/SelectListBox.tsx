import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ListInterface } from '@/src/interfaces';

interface SortListProps {
    list: Array<ListInterface>;
}

const SelectListbox: React.FC<SortListProps> = ({
    list = []
}) => {
    const [selected, setselected] = useState(list[0]);

    return (
        <Listbox value={selected} onChange={setselected}>
            <div className="relative w-16 mt-4">
                <Listbox.Button className="relative w-full cursor-default h-8 bg-white border border-gray-300 p-2 text-left focus:outline-none sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon
                            className="h-5 w-5 text-gray-400 font-bold"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>

                <Transition
                    as={Fragment}
                    leave="transform transition ease-in duration-300"
                    leaveFrom="translate-y-6"
                    leaveTo="translate-y-0"
                >
                    <Listbox.Options className="absolute max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
                        {list.map((el) => (
                            <Listbox.Option
                                key={el.id}
                                value={selected}
                                disabled={el.unavailable}
                                className="pl-2 hover:bg-gray-100"
                            >
                                {el.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default SelectListbox;
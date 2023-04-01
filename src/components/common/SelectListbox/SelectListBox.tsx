import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ListInterface } from '@/src/interfaces';

interface SortListProps {
    list: Array<ListInterface>;
    styles: string;
}

const SelectListbox: React.FC<SortListProps> = ({
    list = [],
    styles = "w-16 h-8 mt-4 sm:!text-sm"
}) => {
    const [selected, setselected] = useState(list[0]);

    return (
        <Listbox value={selected} onChange={setselected}>
            <div className={`relative ${styles}`}>
                <Listbox.Button className="w-full h-full flex items-center relative cursor-default bg-white border border-gray-300 px-2 text-left focus:outline-none">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon
                            className="w-6 text-black font-bold"
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
                                className="pl-3 py-1 hover:bg-gray-100"
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
import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { SortInterface } from '@/src/interfaces';

interface SortListProps {
    list: Array<SortInterface>;
}

const Filter: React.FC<SortListProps> = ({
    list = []
}) => {
    const [selected, setselected] = useState(list[0]);

    return (
        <Listbox value={selected} onChange={setselected}>
            <Listbox.Button>{selected.name}</Listbox.Button>
            <Listbox.Options>
                {list.map(() => (
                    <Listbox.Option
                        key={selected.id}
                        value={selected}
                        disabled={selected.unavailable}
                    >
                        {selected.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default Filter;
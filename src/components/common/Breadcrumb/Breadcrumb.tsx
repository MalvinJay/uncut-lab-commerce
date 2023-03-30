import React from 'react'
import Link from 'next/link';
import { Breadcrumb } from '@/src/interfaces/general';

interface BreadCrumbProps {
    list: Array<Breadcrumb>;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
    list = []
}) => {
    return (
        <div className="flex items-center pt-6 pb-4 overflow-x-auto whitespace-nowrap ">
            {list.map((el, index) => (
                <div key={el.id}>
                    <Link href={el.link} className="text-gray-600 dark:text-gray-200">{el.name}</Link>
                    {index < (list.length - 1) && (
                        <span className="mx-5 text-gray-500 dark:text-gray-300">|</span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default BreadCrumb;
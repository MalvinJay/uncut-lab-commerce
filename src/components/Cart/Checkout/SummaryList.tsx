import React from 'react';
import Image from 'next/image';
import { Cart } from '@/src/actions';

interface SummaryListProps {
    List: Cart[];
};
  
const SummaryList: React.FC<SummaryListProps> = ({ List }) => {
    return (
        <section className='grid grid-cols gap-y-4 p-6 border-b border-gray-300'>
            {List.map((item) => (
                <div key={item.id} className='sm:flex items-start p-4 border border-gray-300'>
                    <Image
                        src={item.image.src}
                        width={80}
                        height={176}
                        className="h-full object-cover bg-gray-100"
                        alt={item.name}
                    />

                    <div className="sm:ml-5">
                        <div className="mt-5 sm:mt-0 text-base text-gray-500 font-semibold space-y-1">
                            <h2 className="text-lg text-gray-900 font-bold">{item.name}</h2>
                            <p>Weight: {item.weight}</p>
                            <p>Category: {item.category}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
  
export default SummaryList;

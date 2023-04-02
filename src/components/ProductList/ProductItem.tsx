import React from 'react';
import { useRouter } from 'next/router';
import { Product } from '../../actions';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/outline';

interface SaleProductItemProps {
  product: Product;
}

const ProductItem: React.FC<SaleProductItemProps> = ({ product }) => {
  const {
    id,
    slug,
    name,
    tag,
    category,
    currency,
    price,
    rating,
    stock,
    images
  } = product;
  const router = useRouter();
  const featured_image = images.length > 0 ? images[0].src : '';

  const handleAddToCart = () => {
    // Add product to cart
    router.push(`/cart`);
  }

  return (
    <figure className='w-full block relative group'>
      <div className={`absolute left-0 z-10 ml-4 mt-4 py-2 px-6 text-base text-white ${stock > 0 ? 'bg-[#1bc18f]':'bg-[#ff7060]'}`}>{tag}</div>

      <div className='relative w-full h-[14rem] overflow-hidden bg-gray-300'>
        <Image 
          fill
          src={featured_image} 
          className="w-full h-full transform transition duration-700 group-hover:scale-110" 
          blurDataURL={featured_image}
          placeholder="blur"
          alt={name}
        />
      </div>

      <figcaption className='text-center p-5 border border-gray-300'>
        <span className='capitalize text-sm font-semibold pb-3 text-gray-600'>{category}</span>
        <p className='text-lg font-bold leading-tight px-6'>{name}</p>
        <p className='text-xl font-bold py-1'>{currency}<span>{price}</span></p>
        <div className='inline-flex items-center pb-3'>
          {new Array(5).fill('').map((i, index) => (
            <StarIcon fill={index < rating ? '#1bc18f' : "#fff"} className="w-5 text-[#1bc18f]" aria-hidden="true" key={index} />
          ))}
          <span className='pl-2 text-base text-[#1bc18f]' style={{ paddingTop: '2px' }}>13</span>
        </div>

        <button className='w-full bg-black text-white text-lg font-semibold py-3'
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </figcaption>
    </figure>
  );
};

export default ProductItem;

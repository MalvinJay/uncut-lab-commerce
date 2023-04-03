import React from 'react'
import { Product } from '@/src/interfaces';
import ProductItem from './ProductItem';

interface SaleProductListProps {
    products: Product[];
  }
  
  const ProductList: React.FC<SaleProductListProps> = ({ products }) => {
    return (
        <section className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-6 md:pb-16 appear'>
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </section>
    );
  };
  
  export default ProductList;
import { ProductTypes } from '../types';

export interface ProductImage {
  // id: number;
  src: string;
  // alt: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  tag: string;
  category: string;
  currency: string;
  date_created: string;
  description: string;
  price: string;
  rating: number;
  stock: number;
  images: ProductImage[];
}

export interface FetchProductById {
  type: ProductTypes.fetchProductById;
  payload: Product;
}

export interface FetchProductsByIds {
  type: ProductTypes.fetchProductsByIds;
  payload: Product[];
}

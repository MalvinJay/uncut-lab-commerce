export interface CartImage {
    src: string;
}

export interface Cart {
    id: number;
    name: string;
    category: string;
    currency: string;
    price: string;
    weight: string;
    quantity: number;
    image: CartImage;
}